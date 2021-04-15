.. title: Hacker School, Wednesday, July 9th, 2014
.. slug: hacker-school-wednesday-july-9th-2014
.. date: 2014-07-10 16:06:28 UTC
.. tags: hacker school, checkin
.. link: 
.. description: 
.. type: text

On Wednesday, having refreshed my motivation by writing about other things, and thus getting closure on them,
I was able to return to the Protagonist project with enthusiasm.

I rewrote the command line interface using `argparse`, mainly so it would display nice usage messages.
Then I started investigating a bug that is triggered when you have an already tagged file, and then tag a symlink to that file.
One of the effects of this is a special case of what happens when you try to tag a file with the same contents as a previously tagged file.
I had flagged this situation as a TODO in the code, but hadn't addressed it.
So I decided to tackle that next.

My first idea was to raise an exception, and not tag the new file.
This seemed unnecessarily restrictive, to not be able to tag two files, just because they have the same contents.
My second idea was to issue a warning of a duplicate file, and then tag it, but this would require changing the design to allow multiple paths in the truenames files.

At this point I took a step back and thought about whether the time had come to move from pure file-and-directory-based design to incorporating a database.
I was reluctant to do that, but am practising keeping an open mind against my tendencies to extremism.
I convinced myself that since directories are implemented as b-trees, at least in ext3, that using directories for search is sufficiently efficient.
[#]_
(Phew!)

Nonetheless, when I started going through the implications of tagging multiple files, and multiple contents, and factoring in the issue of mutable files that I had been putting off dealing with, I finally realised that something about `Addresses and Contents <../posts/addresses-and-contents.html>`_.

.. [#] Also, Zooko pointed me to `btrfs <http://en.wikipedia.org/wiki/Btrfs>`_ which looks very interesting.
       It is sometimes pronounced Butter FS, which only adds to its appeal.
