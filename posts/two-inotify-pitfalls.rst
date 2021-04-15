.. title: Two inotify Pitfalls
.. slug: two-inotify-pitfalls
.. date: 2014-07-31 19:35:05 UTC
.. tags: inotify, linux, filesystems, links, vim, emacs, blog
.. link: 
.. description: 
.. type: text

All I wanted was to track some files.

I have a set of directories populated with files that are hardlinked from other places.
This serves as a kind of database for associating tags to files.
I wanted to write a daemon that notifies changes to the files that might affect the consistency of the database.
For example, if the file is removed, I want my database to let go of its reference.

The linux kernel has a set of system calls for this called `inotify <http://en.wikipedia.org/wiki/Inotify>`_, and `Twisted has a module to support that API <http://twistedmatrix.com/documents/current/api/twisted.internet.inotify.html>`_.
Not only that, but the module documentation has everything you need.

-----

.. code-block:: python

      from twisted.internet import inotify
      from twisted.python import filepath

      def notify(ignored, filepath, mask):
          """
	  For historical reasons, an opaque handle is passed as first
	  parameter. This object should never be used.

	  @param filepath: FilePath on which the event happened.
	  @param mask: inotify event as hexadecimal masks
	  """
	  print "event %s on %s" % (
              ', '.join(inotify.humanReadableMask(mask)), filepath)

      notifier = inotify.INotify()
      notifier.startReading()
      notifier.watch(filepath.FilePath("/some/directory"), callbacks=[notify])


-----

Pitfall #1
==========

Great!  I copy the code, change the path from "/some/directory" to "/home/amber/somedir", and start it up.

* I make a file, "f", and am notified of its creation, and some attribute change.

.. code-block:: bash

		$ touch f

.. code-block:: bash

		event create on FilePath('/home/amber/somedir/f')
		event attrib on FilePath('/home/amber/somedir/f')

* I hard link it with another name

.. code-block:: bash

		$ ln f h

.. code-block:: bash

		event create on FilePath('/home/amber/subdir/h')

Ok.  It logged the creation of h for me, but hasn't this changed the links attribute of f?
Why wasn't I notified of that?

* I try modifying it.

.. code-block:: bash

		$ echo hello >> h

.. code-block:: bash

		event modify on FilePath('/home/amber/subdir/h')

I'm further non-plussed.
This event should have modified both f and h, but I was only notified of the one used in the command.

Finally I try what I really want.
* I make a hard link to f from outside of "somedir/", and modify it through there.

.. code-block:: bash

		$ ln f ../h
		$ echo hello >> ../h

.. code-block:: bash

		(no response)

What's going on?
----------------

Inotify takes a pathname.
If the pathname is a directory, then it watches the directory, but this is not the same as watching each file in the directory.

Pitfall #2
==========

Glad to have figured out my error, I try again, modifying the pathname argument in the daemon to "somedir/f".
I remove all those files, touch f, and start the daemon again.
This time it does what I want.

.. code-block:: bash

		$ ln f h

.. code-block:: bash

		event attrib on FilePath('/home/amber/subdir/f')

.. code-block:: bash

		$ ln f h
		$ echo hello >> h

.. code-block:: bash

		event attrib on FilePath('/home/amber/subdir/f')
		event modify on FilePath('/home/amber/subdir/f')

.. code-block:: bash

		$ ln f ../h
		$ echo hello >> ../h

.. code-block:: bash

		event attrib on FilePath('/home/amber/subdir/f')
		event modify on FilePath('/home/amber/subdir/f')

But wait!
---------

I was about to call it good, when I decided to try modifying the file with vim or emacs.
I deleted all those files again, touched f, and this time modified it with vim.
On saving the file, I get this:

.. code-block:: bash

		event move_self on FilePath('/home/amber/subdir/f')
		event attrib on FilePath('/home/amber/subdir/f')
		event delete_self on FilePath('/home/amber/subdir/f')

What's going on?
----------------

It turns out that vim and emacs, and who knows what else, have a trick to save backups while in use.

To see what happens, I edited the daemon to watch the directory again, and also to print some stats about the files:

.. code-block:: python

		from twisted.internet import inotify, reactor
		from twisted.python import filepath
		import os


		def notify(ignored, filepath, mask):
    		    """
    		    For historical reasons, an opaque handle is passed as first
		    parameter. This object should never be used.

		    @param filepath: FilePath on which the event happened.
		    @param mask: inotify event as hexadecimal masks
		    """
		    print "event %s on %s" % ( ', '.join(inotify.humanReadableMask(mask)), filepath)
		    for f in os.listdir(fp):
		        stat = os.stat(os.path.join(fp, f))
		        print f, "mode:", stat.st_mode, "inode:", stat.st_ino

		fp = "/home/amber/subdir"
		notifier = inotify.INotify()
		notifier.startReading()
		notifier.watch(filepath.FilePath(fp), callbacks=[notify])
		reactor.run()

Now I run it and open f with vi.

.. code-block:: bash

		$ vi f

.. code-block:: bash

		event create on FilePath('/home/amber/subdir/.f.swp')
		f mode: 33204 inode: 2307370
		.f.swp mode: 33188 inode: 2307363
		event create on FilePath('/home/amber/subdir/.f.swpx')
		f mode: 33204 inode: 2307370
		.f.swp mode: 33188 inode: 2307363
		event delete on FilePath('/home/amber/subdir/.f.swpx')
		f mode: 33204 inode: 2307370
		.f.swp mode: 33188 inode: 2307363
		event delete on FilePath('/home/amber/subdir/.f.swp')
		f mode: 33204 inode: 2307370
		.f.swp mode: 33188 inode: 2307363
		event create on FilePath('/home/amber/subdir/.f.swp')
		f mode: 33204 inode: 2307370
		.f.swp mode: 33188 inode: 2307363
		event modify on FilePath('/home/amber/subdir/.f.swp')
		f mode: 33204 inode: 2307370
		.f.swp mode: 33188 inode: 2307363
		event attrib on FilePath('/home/amber/subdir/.f.swp')
		f mode: 33204 inode: 2307370
		.f.swp mode: 33188 inode: 2307363

(pause)

.. code-block:: bash

		event modify on FilePath('/home/amber/subdir/.f.swp')
		f mode: 33204 inode: 2307370
		.f.swp mode: 33188 inode: 2307363

(modify manually)

.. code-block:: bash

		event modify on FilePath('/home/amber/subdir/.f.swp')
		f mode: 33204 inode: 2307370
		.f.swp mode: 33188 inode: 2307363
		event modify on FilePath('/home/amber/subdir/.f.swp')
		f mode: 33204 inode: 2307370
		.f.swp mode: 33188 inode: 2307363

(save manually)

.. code-block:: bash

		event create on FilePath('/home/amber/subdir/4913')
		f~ mode: 33204 inode: 2307370
		.f.swp mode: 33188 inode: 2307363
		event attrib on FilePath('/home/amber/subdir/4913')
		f~ mode: 33204 inode: 2307370
		.f.swp mode: 33188 inode: 2307363
		event delete on FilePath('/home/amber/subdir/4913')
		f~ mode: 33204 inode: 2307370
		.f.swp mode: 33188 inode: 2307363
		event moved_from on FilePath('/home/amber/subdir/f')
		f~ mode: 33204 inode: 2307370
		.f.swp mode: 33188 inode: 2307363
		event moved_to on FilePath('/home/amber/subdir/f~')
		f~ mode: 33204 inode: 2307370
		.f.swp mode: 33188 inode: 2307363
		event create on FilePath('/home/amber/subdir/f')
		f mode: 33204 inode: 2307371
		f~ mode: 33204 inode: 2307370
		.f.swp mode: 33188 inode: 2307363
		event modify on FilePath('/home/amber/subdir/f')
		f mode: 33204 inode: 2307371
		f~ mode: 33204 inode: 2307370
		.f.swp mode: 33188 inode: 2307363
		event attrib on FilePath('/home/amber/subdir/f')
		f mode: 33204 inode: 2307371
		.f.swp mode: 33188 inode: 2307363
		event modify on FilePath('/home/amber/subdir/.f.swp')
		f mode: 33204 inode: 2307371
		.f.swp mode: 33188 inode: 2307363
		event delete on FilePath('/home/amber/subdir/f~')
		f mode: 33204 inode: 2307371
		.f.swp mode: 33188 inode: 2307363

(exit)

.. code-block:: bash

		event modify on FilePath('/home/amber/subdir/.f.swp')
		f mode: 33204 inode: 2307371
		.f.swp mode: 33188 inode: 2307363
		event delete on FilePath('/home/amber/subdir/.f.swp')
		f mode: 33204 inode: 2307371




As far as I can tell, the result is as if they have renamed f to something else like f~, copied the contents of f~ to a new file named f, modified f, and finally deleted f~.
This is essentially `copy-on write <http://en.wikipedia.org/wiki/Copy-on-write>`_.

But inotify, while taking pathnames as arguments and returning pathnames, actually tracks inodes.
So simply using an editor has the effect of moving the file to a different inode and thereby breaks inotify!

This is ultimately a consequence of using aliases to files (pathnames) as if they were canonical references to files (inodes).

.. **It is a property of mutable objects that 


Post Script: Lucky break?
-------------------------

As it happens, the behaviour of vim and emacs is different when the inode holding the file has more than one reference.
I can prevent the inode from disappearing by making a hardlink to the file before opening it with an editor.
The editor must have recognised that it can't move inodes willy-nilly when other pathnames depend on it.
This maps exactly to my original scenario, and therefore might make it safe for me to use.
On the other hand, my whole confidence in the bahaviour is undermined, and I am reluctant to rely on it.







