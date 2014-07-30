.. title: Hacker School, Tuesday, July 29th, 2014
.. slug: hacker-school-tuesday-july-29th-2014
.. date: 2014-07-30 13:55:49 UTC
.. tags: hacker school, checkin
.. link: 
.. description: 
.. type: text
.. nocomment: True

My goal on Tuesday was simply to finish the JavaScript interactive part of the post I had written on `Pólya's Urn <http://subsymbol.org/posts/polyas-urn.html>`_.
I got the basic functionality working, and then paired with a fellow HaScher who showed me one way to get parameters from the user, and helped me clean up the code.
I finished it by the end of the day, and it was rewarding to me to get to post it.
I would like to write a series of posts building on that beginning.

I really enjoyed using JavaScript, despite some vague misgivings having to do with my current concern to be perceived as a back-end engineer, on the one hand, and the reputation JavaScript has for poor design on the other.
It has some features I really like, such as that writing and passing anonymous functions is not only easy, but idiomatic.
I was pleasantly surprised with it, and I feel like the set of things I can do has been expanded significantly by learning even as little as I have.

The other thing I did on Tuesday was get help from Jessica McKellar on getting started writing a daemon that notifies of changes to files.
This can be done easily using Twisted, which `supports the linux inotify API <http://twistedmatrix.com/documents/current/api/twisted.internet.inotify.html>`_.
I am excited about this for a couple of reasons.

First, I've been wanting to use Twisted for a long time, just because I like the aesthetics of it.
However, none of my previous projects needed its functionality.
Protagonist, on the other hand, could make good use of it, because it is easier to repair consistency of the database through notification of changes, than through scanning the whole database.
Moreover, it can be done immediately in response to such changes.
A repair process (a feature I would also like to provide) would have to be run only periodically, and would therefore leave things broken between runs.

Second, I found that inotify has some surprising-to-me behaviour that I am eager to explore.
Specifically, inotify appears to be pathname triggered, rather than inode triggered, judging by what happens to hard and soft links.
I intend to explore this more today.
Digging into kernel functions is something I have barely scratched before, and it makes me feel closer to the machine.

