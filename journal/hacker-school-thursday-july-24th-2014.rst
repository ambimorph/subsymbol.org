.. title: Hacker School, Thursday, July 24th, 2014
.. slug: hacker-school-thursday-july-24th-2014
.. date: 2014-07-25 13:37:35 UTC
.. tags: hacker school, checkin, compuational linguistics
.. link: 
.. description: 
.. type: text

I worked on two things on Thursday.

First, I spent some time thinking through the design I wanted for writing LDA.
The first step in the process has nothing to do with the actual algorithm.
It is to tokenise the text.
I've spent a lot of time on tokenising in the past for `malaprop <http://subsymbol.org/posts/201303malaprop-v010.html>`_.
So I looked back through the code for that (which is in my first ever Python package, `recluse <https://pypi.python.org/pypi/recluse>`_).

I have a couple of useful functions there.
One does what I've called "subtokenisation", by which I mean beyond the whitespace level, and it mostly deals with punctuation.
Another does "regularisation".
That means taking tokens that vary in predictable ways and unifying them.
In `recluse`, I treat only numbers.

Looking at both of these functions, I was motivated to turn them into generators.

Generators in Python are a Beautiful Abstraction
================================================

Ever since I recently read `David Beazley's slides on generators <http://www.dabeaz.com/generators/Generators.pdf>`_, I've been excited about making better use of them.
They have elegant compositionality properties.
Generators are particularly appropriate for computational linguistics and machine learning tasks, in which there is a potentially enormous amount of data,
because we often can't fit it all in RAM, and need to stream.
In fact, I learned how to use Python's generators for the first time for my `recluse` code out of sheer necessity.

Morphological Analysis
======================

What I have not done in `recluse` at all is morphological analysis.
This is partly because I wanted `malaprop` to be language independent.
Language independent morphological analysis is a compelling problem to me.
In fact, unsupervised structural analysis is one of my strongest research interests.
However, I didn't want to tackle that at the time.

Also, since `malaprop` specifically deals with spelling,
it would have added another layer of complexity to deal with the interaction between the spelling variations and the morphological forms.

Nonetheless, for *topic modelling*, it seems more appropriate to have words converge by their stems instead of having each form of the "same" word represented individually.
The canonical way to tokenise for topic modelling involves both stemming and removing *stop words* — words that are more syntactic than semantic.

I subsequently wrote a `blog post <http://www.subsymbol.org/posts/the-grammaticality-continuum.html>`_ explaining why I think this latter practice may not be appropriate.

Polya's Urn
===========

The other thing I worked on was the Polya's Urn simulator that I had made on Wednesday.
I added colour to it using `Tom Ballinger's curtsies library <https://github.com/thomasballinger/curtsies>`_, and got ready to present it.
Unfortunately my presentation was bungled due to me not understanding how to mirror my laptop display properly.
I had several awkward moments during which my private email was on display, and this discombobulated me.
Moreover, I had inadvertently broken a function at the last minute, so the demo was incomplete.

Nonetheless, a couple of HaSchers expressed interest in the program, and one of them fixed my broken function.
I look forward to expanding on the code, and I hope he will pair with me on it.
I intend to write a post explaining it later today.


