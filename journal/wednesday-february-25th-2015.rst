.. title: Wednesday, February 25th, 2015
.. slug: wednesday-february-25th-2015
.. date: 2015-02-26 02:44:46 UTC
.. tags: grammar induction, PCFG, adaptor grammar, fragment grammar, compression
.. link: 
.. description: 
.. type: text

It has been more than seven months since I have written in my public learning journal.
I've been through a lot of personal challenge and change, and my educational life has suffered.
In the struggle to reboot, I finally remembered what a central role writing plays in my learning process.
To quote myself from `Hacker School, Monday July 28th, 2014 <http://subsymbol.org/journal/hacker-school-monday-july-28th-2014.html>`_:

..

    "I have come to recognise that writing, for me, is not something I do after I learn, it is an integral part of the process of learning. When I write, I integrate the components I gleaned from active exploration. Therefore, it is not something I should put aside in favour of more "work". It is a legitimate part of how I work."

So here I am.

Today I began reading a manuscript that fills me with excitement.
It is `Fragment Grammars: Exploring Computation and Reuse in Language <http://dspace.mit.edu/handle/1721.1/44963>`_, by Timothy J. O'Donnell, Joshua B. Tenenbaum, and Noah D. Goodman.

In this tech report (which I have only just begun reading) the authors promise to generalise `adaptor grammars <http://papers.nips.cc/paper/3101-adaptor-grammars-a-framework-for-specifying-compositional-nonparametric-bayesian-models.pdf>`_ (a variety of `PCFG <http://en.wikipedia.org/wiki/Stochastic_context-free_grammar>`_ that uses a `Pitman-Yor process <http://en.wikipedia.org/wiki/Pitman%E2%80%93Yor_process>`_ to adapt its probabilities based on context) by using a *heterogenous* lexicon (one that is not married to some prescriptivist notion of linguistic category such as word or morpheme, and thus can include items smaller or larger than words).
The "lexicon" is chosen to optimise between storing a relatively small number of tiny units which require a lot of computation to structure together vs. storing a large number of long strings which cover large stretches of text, but aren't very flexible or general.
In other words, it's a tradeoff in compression vs. computation.

If this is not enough to hook you right there, the implementation is written in a functional language such that lexical items are recursive funcions.
