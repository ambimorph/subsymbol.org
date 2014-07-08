.. title: Hacker School, Monday, July 7th, 2014
.. slug: hacker-school-monday-july-7th-2014
.. date: 2014-07-08 03:02:13 UTC
.. tags: mathjax
.. link: 
.. description: 
.. type: text

I spent most of the weekend working on moving my blog off of Blogger.
I imported it to Nikola, a static site generator, and spent many hours figuring out how to configure it to have both a main blog for articles, and a journal blog in the background.
I also had to learn how to host it on GitHub.
I subsequently wrote two(!) posts about how that process went.

This blog moving used up time I had allocated to Dan Boneh's Coursera cryptography course, and so I still had that to do on Monday.
Not only that, but I spent more time trying to configure more blog things for the first few hours of the day.

I did finally get to the cryptography, though.
I'm pleased about that, because I love cryptography and coding theory, and have been wanting a refresher for a long time.
I'd like to turn some of my notes into a more formal post, but there was one small point that I'd like to mention.

The term *random variable* has long bothered me.
I don't find the *concept* confusing, but the name for it makes it hard for me to remember what it is.
A *random variable* is just a function that maps a set to a probability distribution.
A *randomised algorithm* is defined here in essentially the same way.

I guess I would prefer if the variable were abstracted away entirely.


Update
======

The above statement "A *random variable* is just a function that maps a set to a probability distribution." is not technically correct.

A random variable is a function from the universe to some outcome set.
However, the random variable implicitly *induces* a probability distribution on the outcome set based on the distribution of the outputs given a uniform distribution on the inputs.
That is, if the random variable is :math:`X:U \to V`, then the probability distribution that \\( X \\) induces on \\( V \\) can be described by a function 
:math:`F: V \to R`, where :math:`F(v) = P(X^{-1}(v))`.
This is usually written as :math:`P(X=v)`.

The idea I was trying to convey was that the `F` form of the function is a kind of pointfree function, that feels more intuitive to me.
Something like this:

:math:`F: V \to R = lambda X: P(X^{-1}(v))`

I'm not sure how much sense this makes, either.
I confess I'm a bit underslept.
