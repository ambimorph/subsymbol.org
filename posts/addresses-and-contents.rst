.. title: Addresses and Contents
.. slug: addresses-and-contents
.. date: 2014-07-09 21:42:03 UTC
.. tags: names, linguistics, cs, storage
.. link: 
.. description: 
.. type: text

What are we naming?
===================

    The name of the song is called "Haddocks' Eyes."'

    'Oh, that's the name of the song, is it?' Alice said, trying to feel interested.

    'No, you don't understand,' the Knight said, looking a little vexed. 'That's what the name is called. The name really is "The Aged Aged Man."'

    'Then I ought to have said "That's what the song is called"?' Alice corrected herself.

    'No, you oughtn't: that's quite another thing! The song is called "Ways and Means": but that's only what it's called, you know!'

    'Well, what is the song, then?' said Alice, who was by this time completely bewildered.

    'I was coming to that,' the Knight said. 'The song really is "A-sitting On A Gate": and the tune's my own invention.' 

    — `Alice Through the Looking Glass <http://www.alice-in-wonderland.net/books/2chpt8.html>`_


Mutability applies to content
=============================

I have been designing a system that seeks to change the way we name our data:
instead of naming the hierarchical way, using directories (or folders), it will name the category way, using tags.
Because the system needed an ID for every file it tagged, and perhaps for no other good reason than that I am fond of content-based hashing,
I chose to use a content-based hash for the IDs.
However, this ID is not a good match for mutable files.
I had been putting off thinking about how to handle mutable files, figuring I could add that functionality later.

When I was finally ready to confront mutable files, I realised that I was running up against a fundamental issue:

People often conflate addresses with contents when naming things
=================================================================

Take for example the problem of citation.
If you cite a book or a research paper, then what you are citing is the contents.
When we first started wanting to cite URLs, we treated them as though we were addressing content, but we aren't.
URLs point to content that can change.

Of course, this issue shows up in many areas of computer science whenever we use references.

Filesystems
===========

In a filesystem, we usually refer to files by their paths.
The relationships between paths, addresses (inodes), and contents are shown here:

.. image:: https://lh5.googleusercontent.com/-0dFaK3jKirQ/U78BnodwrUI/AAAAAAAACPs/mGzaDJfLZk4/w426-h376-no/name_triangle.png

That is, a pathname refers to a single inode, but not necessarily vice versa.
An inode has exactly one set of contents, but those contents may be replicated in many inodes in the system.
I didn't recognise at first that the problem of mutable and immutable files is the distinction between addresses and contents.

As far as file systems go, I don't know of any that make the distinction between contents and addresses, except Tahoe-LAFS.
The reference to an immutable file in Tahoe is content based for integrity and deduplication.
The reference to a mutable file just specifies a unique "slot".

I've decide to follow this paradigm in Protagonist.
Both addresses and contents should be eligible for tagging.
Tagging the box will use the inode.
Tagging the contents will use the hash.





.. The fact that we make extensive use of links in our systems attests the fact that hierarchies are not a great model for naming things.


