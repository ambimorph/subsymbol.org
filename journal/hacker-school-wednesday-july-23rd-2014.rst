.. title: Hacker School, Wednesday, July 23rd, 2014
.. slug: hacker-school-wednesday-july-23rd-2014
.. date: 2014-07-24 13:11:57 UTC
.. tags: hacker school, checkin
.. link: 
.. description: 
.. type: text

On Wednesday, I was thinking about Dirichlet processes, in preparation to write a Gibbs sampling LDA algorithm.
One of my favourite metaphors for a Dirichlet process is Pólya's Urn.
I researched around to try to remember exactly how that worked.
I won't go into detail here, since I intend to write a short post and presentation about it today.
I had fun with it, though, and I even implemented a little simulator for it.

After I was satisfied with that, I went back to thinking about LDA.
I looked at some C code that a friend of mine sent me one time that implements it,
and started writing a version of it in Python.

I had wanted to do it in a functional / generative style as much as possible.
However, this seems like a situation where the tool of using and modifying state is more appropriate, because the side effect of changing the model really is the point of the computation.
This is often true in natural language computation as well.
Also, speed becomes an issue in an algorithm like this, and recalculation of certain properties would be a huge loss, even if saving it is redundant in information terms.

I don't know if there are special techniques for keeping state in a functional program.
I've often heard people say that this is what monads are for, but I don't know why they say that.
For now, I think I will use my preferred Python wrapped C Judy arrays + Python combination to implement it.

Gibbs-LDA is a problem that pushes one of my boundaries.
It is not too hard in a technical sense.
In fact, most people would agree that it is remarkably simple.
However, I have recognised that I have some kind of block about implementing it that I don't yet understand.
Onward.



