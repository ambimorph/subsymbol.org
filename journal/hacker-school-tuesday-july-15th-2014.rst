.. title: Hacker School, Tuesday, July 15th, 2014
.. slug: hacker-school-tuesday-july-15th-2014
.. date: 2014-07-16 23:11:57 UTC
.. tags: hacker school, checkin
.. link: 
.. description: 
.. type: text

Because this journal is an experiment in transparent learning, I think the fact that Tuesday was a difficult day for me is important to take note of.
Although the personal issues from the previous day were more or less resolved, my focus was still affected.

After watching some more cryptography lectures, I started going through Protagonist, with my design change notes I had written at the end of last week.
I was really happy that I had good unit testing in the code, because I could just go through each test, and modify it to match the new requirements.
I was humming along in this way, when I noticed a problem in my new design.

The problem involves the encoding of pathnames.
Even though a goal of the project is to move away from pathnames, I still wanted to encode them, for two reasons.

First, if `tag ls` returns the list of file IDs to the user, the user might not recognise the files, because the IDs are (or were) hashes.
Ultimately, I would like to have tags completely replace names.
`tag ls` could return each matching file ID accompanied by all of its tags.
If the files were tagged densely enough, this should be enough information for the user to recognise files, if the `ls` were part of a manual search.
If the system was sparsely tagged, however, this might return a large, mostly indistinguishable list.
Relatedly, sometimes you might want to send the output to a function that needs the pathname.
I'm not sure in what situation the hardlink wouldn't do, but it's possible.

The second reason I wanted to encode pathnames was because I was imagining using Protagonist as an encapsulation of the underlying filesystem that could be used to recover the files in it back to the filesystem.

However, at no point did I want to reconstruct the path hierarchies within the Protagonist structure.
This is why I used text files to hold the pathnames.


Under the new design, I intend to construct a more complete database, but still constructing tables out of files and directories.
One of the tables was going to be called inodes.
It was going to look something like this:


.. code::

      .
   └── .protagonist
       └── inodes
           ├── i0
           │   ├── p0
           │   │   └── somehash
           │   ├── p1
           │   └── p2
           ├── i1
           └── i2
   
(not fully filled in)

There is a list of inodes IDs, each of which has one or more paths that link to it, and those paths have hard links in the form of hashes to the inodes.

The problem here is that pathnames are strings with '/'s in them, which makes for difficulty in constructing directory names without reconstructing the path.
Last time I solved it by inserting these into text files, but now they are not leaves, and they are not unique.

I felt I didn't have the focus to solve that , so I went back to listening to lectures.

However, writing this out explicitly made me realise that every hash under a given inode subtree will be the same.  So I can easily have the pathnames be leaves in this tree.
There are other parts of the design I will have to reorganise, but feel less stuck than I was.
That may be partially because I am writing this post two days after the fact, and have had more time to gestate the idea, and get out of the funk.
Writing in this way has been a helpful process to me.
I'm glad I chose to do it.








