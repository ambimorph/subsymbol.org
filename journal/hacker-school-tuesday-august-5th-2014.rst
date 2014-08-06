.. title: Hacker School, Tuesday, August 5th, 2014
.. slug: hacker-school-tuesday-august-5th-2014
.. date: 2014-08-05 16:03:16 UTC
.. tags: hacker school, checkin
.. link: 
.. description: 
.. type: text

My goal on Monday was simply to keep working through the LDA code.

After I completed my third unit test, I looked to see what the next step should be.
I didn't complete this step the whole day, because I spent the entire time trying to figure out how to optimise a data structure.
The following is probably difficult to follow, and not necessarily interesting.
I'm writing it down to help me clarify what thought processes I went through, and to remember any conclusions I had.

-----

In Gibbs Sampling LDA, conceptually, we suppose that we have some topic assigned to every occurrence of a word in our corpus.
This is initially accomplished by assigning topics randomly.

We then look at every occurrence in a random order, and pretend we don't know what topic it has been assigned.
Based on the *type* of the word, and which document it is in, we estimate what the most likely topic for it is, and then update the topic to that.
So the next problem I was facing was how to go through the corpus randomly.

The usual way to implement LDA includes making an index into the corpus that tells you for each word occurrence position in each document, what word type is there, and what topic it has been assigned.
This makes it relatively easy to assign a permutation for the random ordering, and to update the information in place.
This has always struck me as inordinately expensive in space, and I had been imagining trying to optimise it.

My idea was this:
Instead of having an index into every position in the corpus, we could have a count of every instance of a word type in a document that is assigned a given topic.
In other words, make our model be a set of key, value pairs, where the key is the document and word type, and the value is a dictionary counting topics.
For example, {(d5, "function"): {t0: 3, t5: 1}}.

Then to iterate through the tokens, we just make sure to visit each key the appropriate number of times (proportionally randomly), holding out the topic the appropriate number of times.
There are a couple of problems with the idea, though.

First, how do we organise the permutation, especially if the structure is being updated in place?
I spent a great part of the day exploring this problem.
I came up with many ideas that I rejected for one reason or another.
It turns out that getting a random permutation of a hash table in Python is kind of a hard problem.
You can certainly get one — the order of the hashes — but it's not clear how to get another.
Possibly one is enough, but it may contain bias, with unknown consequences.

One idea I had was to do this functionally by passing the entire structure to a function that selects one (document, type, topic) token proportionally randomly to its frequency, and returns the choice, plus a new structure not containing it.
I really like this idea, because I am persuaded by the value of immutability.
However, it would be very expensive to create a new structure on every call, and there would be as many calls as there are words in the corpus.
There does seem to be a use case here for mutability, though by the time of this writing, I am considering a persistent data structure idea.

The next thought I had, to mitigate the creation of large new structures, was to modify the structure by mutating only a count of how many times the node was visited.
So it would be like keeping the core data persistent, but adding a single mutable part inside.

While thinking of this, it also occurred to me that the problem of choosing the token proportionally randomly might be too *computationally* expensive.
This might be worse than a large space requirement, because Gibbs sampling is already notoriously slow.

I then wondered if I could take advantage of the fact that I already have the data file on disk.
I already have to do a first pass that gets all the documents and tokens, and assigns a random topic.
This can be done using a generator.
I wondered if I could build an index into the file to tell me the type of the word occurrence at each point in each document.
The problem here is that I expect the files to be stored under compression (bzip2 probably right now).
It turns out it is not easy to get random access into a bzip2 file.

By the end of all this, I had decided I was probably better off following the convention of storing an index of the entire token set of the corpus.

-----

I also decided it would be helpful for many reasons to have a solid understanding of how Python data structures are implemented, so that I know what it costs to use any of them for particular operations.
I had seen a book on this topic: `Problem Solving with Algorithms and Data Structures, by Brad Miller and David Ranum <http://interactivepython.org/runestone/static/pythonds/index.html>`_.
So I spent the remainder of the day browsing that book.


