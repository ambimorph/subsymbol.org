.. title: The Grammaticality Continuum
.. slug: the-grammaticality-continuum
.. date: 2014-07-25 15:20:07 UTC
.. tags: mathjax, computational linguistics, lda, lsa, blog
.. link: 
.. description: 
.. type: text


Yesterday I was thinking about implementing *Latent Dirichlet Allocation* (LDA).
LDA is used for *topic modelling* — inducing a set of topics, such that a set of natural language documents can be represented by a mixture of those topics.
This is then used to estimate document similarity, and related information retrieval tasks.

The first step in such a project is to *tokenise* — to break up the text into words, removing attached punctuation, and regularising things like capitalisation.
When looking at the words in a document for the purposes of topic modelling,
it seems appropriate to merge word forms with the same root, or stem, instead of having each form of the "same" word represented individually.
The canonical way to tokenise for topic modelling involves stemming, and it also involves removing *stop words* — words like "the", and "and" that are more syntactic than semantic.

I am not entirely convinced that this latter is appropriate.
The reason is that the grammatically of words exists on a continuum.
Even the word "the" carries semantic weight, though its main function is probably to signal the boundaries of syntactic chunks.

-----

    My favourite example of the syntactic function of "the" comes from `Petr Beckmann <http://en.wikipedia.org/wiki/Petr_Beckmann>`_ 's book *The structure of language: a new approach*, which has profoundly influenced me since my undergraduate days.
    In it he shows how the following headline is disambiguated by the placement of "the" before or after "biting":

    "Man Refuses to Give up Biting Dog"

-----

A couple of years ago at `the NAACL conference <http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=18614>`_,
there was a session where a few prominent computational linguists presented their favourite papers from the past.
Eugene Charniak presented Kenneth Church's 2000 COLING paper: *Empirical Estimates of Adaptation:*
*The chance of Two Noriegas is closer to* :math:`p/2` *than* :math:`p^2`.
It introduced a measure of adaptation for language models based on how much a recent occurrence of a word increases its tendency to occur beyond what is already expected.

Charniak used this paper as a background with which to present a new idea about the way the prior likelihood of a word predicts its future occurrences.
He divided words into sets according to how well their priors predicted them.
Stop words were most likely to be true to priors, and content words least, with verbs at the end of the spectrum.

At the time I took this as evidence for the stratification of grammaticality.
Because of this stratification, treating stop words as a special set appears arbitrary and oversimplified.
I expect that leaving stop words in a topic model would simply result in having some topics that are distributed more evenly throughout the corpus of documents.
These topics would discriminate among documents poorly.
However, this result should also be part of a continuum.
It may be useful to account for the distribution of topics when using them in LDA, in a way analogous to `inverse document frequency <http://en.wikipedia.org/wiki/Tf%E2%80%93idf>`_ in `latent semantic analysis <http://en.wikipedia.org/wiki/Latent_semantic_analysis>`_.

-----

More generally, I am interested in the phenomenon that words vary in their semantic and syntactic load.
Even just within semantics, a morpheme may carry more than one meaning that cannot be decomposed linguistically.
For example, "uncle" is male, and while we could assign "uncle" a set of semantic features in a computer system in order to reason about its meaning, those features are only implicit in English.
In `logographic writing systems <http://en.wikipedia.org/wiki/Logogram>`_ this is all the more apparent.

This simultaneity of features in an apparently linear system is, to me, one of the most interesting aspects of language, and one of the reasons computational linguistics is difficult and rewarding.



   


