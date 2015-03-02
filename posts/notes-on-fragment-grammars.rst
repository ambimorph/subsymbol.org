.. title: Notes on Fragment Grammars
.. slug: notes-on-fragment-grammars
.. date: 2015-03-02 22:00:26 UTC
.. tags: 
.. link: 
.. description: 
.. type: text

Last week I read
`Fragment Grammars: Exploring Computation and Reuse in Language <http://dspace.mit.edu/handle/1721.1/44963>`_
by Timothy J. O'Donnell, Joshua B. Tenenbaum, and Noah D. Goodman.

As I mentioned in `my journal <http://subsymbol.org/journal/wednesday-february-25th-2015.html>`_,
the authors of this tech report promise to generalise `adaptor grammars <http://papers.nips.cc/paper/3101-adaptor-grammars-a-framework-for-specifying-compositional-nonparametric-bayesian-models.pdf>`_ (a variety of `PCFG <http://en.wikipedia.org/wiki/Stochastic_context-free_grammar>`_ that uses a `Pitman-Yor process <http://en.wikipedia.org/wiki/Pitman%E2%80%93Yor_process>`_ to adapt its probabilities based on context) by using a *heterogenous* lexicon (one that is not married to some prescriptivist notion of linguistic category such as word or morpheme, and thus can include items smaller or larger than words).
The "lexicon" is chosen to optimise between storing a relatively small number of tiny units which require a lot of computation to structure together vs. storing a large number of long strings which cover large stretches of text, but aren't very flexible or general.
In other words, it's a tradeoff in compression vs. computation.

Here are my impressions on first reading.

**What I really love about this tech report is that it unpacks a lot of typically presumed knowledge right inside it.**

So if you didn't know about PCFGs or memoization, or Chinese restaurant processes, or non-parametric Bayesian methods before, you can get a lot of what you need to know right there.
Of course, The reason a typical conference or journal paper doesn't include such thorough background, is simply that there isn't the space for it.
Moreover, one can usually assume that the audience has the appropriate background, or knows how to acquire it.
Nonetheless, I find it a great pleasure to read something that assumes an educated audience that isn't intimidated by statistical models or equations, but might not know every niche term involved in such a specialised task.

**Here are some ways in which reading this paper helped me to grok non-parametric Bayesian techniques.**

I had never thought of LDA and related algorithms as *stochastic memoisation*, which is how they are described here.

..

  "A stochastic memoizer wraps a stochastic procedure [i.e a sampler]
  in another distribution, called the memoization distribution, which
  tells us when to reuse one of the previously computed values, and
  when to compute a fresh value from the underlying procedure. To
  accomplish this, we generalize the notion of a memotable so that it
  stores a distribution for each procedure–plus–arguments
  combination."

I like this description because it is immediately understandable to someone who has used dynamic programming.
We know the value of limiting recomputation (and, again, if you don't, the classic Fibonacci example is right in the paper!),
and now we see this generalised to probabilistically either using the cached value or resampling.
As the authors explain:

.. 

  "If we wrap such a random procedure in a deterministic memoizer, then
  it will sample a value the first time it is applied to some arguments,
  but forever after, it will return the same value by virtue of
  memoization. It is natural to consider making the notion of
  memoization itself stochastic, so that sometimes the memoizer returns
  a value computed earlier, and sometimes it computes a fresh value."

I have seen several different presentations of LDA, and not once was it described in this intuitive way.

Further, we can see how using the Chinese Restaurant Process, which is biased to sample what has been sampled before as a "simplicity bias":

.. 

   "all else being equal, when we use the CRP as a stochastic memoizer
   we favor reuse of previously computed values."

An assumption that Gibbs sampling relies on was made clear to me in the explanation of *exchangeability*.

.. 

   "Intuitively, exchangeability says that the order in which we observed
   some data will not make a difference to our inferences about
   it. Exchangeability is an important property in Bayesian statistics,
   and our inference algorithms below will rely on it crucially. It is
   also a desirable property in cognitive models."

   "Pitman-Yor processes, multinomial-Dirichlet distributions, and
   beta-Binomial distributions are all exchangeable, which means that
   we are free to treat any expression e(i) ∈ E as if it were the last
   expression sampled during the creation of E.  Our sampling
   algorithm leverages this fact by (re-)sampling each p(i) ∈ P
   for each expression in turn."

Even though I knew that the exchangeability was necessary for taking products, 
that is, that permutations don't effect the joint distributions,
I hadn't thought about the way this frees us in our sampling order.
If we wanted to add some kind of recency effects to our models, order would, of course, become important.

**The real meat of the paper, though, is in describing** *Fragment Grammars* **as contrasted with** *Adaptor Grammars*.

This will likely be the topic of the next post.




