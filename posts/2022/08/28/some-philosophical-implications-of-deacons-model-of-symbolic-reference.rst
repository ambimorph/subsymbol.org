.. title: Some Philosophical Implications of Deacon's Model of Symbolic Reference
.. slug: some-philosophical-implications-of-deacons-model-of-symbolic-reference
.. date: 2022-08-28 16:52:12 UTC-06:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text

*This is an attempt from a few years ago to assemble some thoughts on*
*Terrence Deacon's* The Symbolic Species.
*It is presented here as written then with a few minor edits.*


.. Explain the hierarchy itself
.. ----------------------------

A hierarchy of referential processes
------------------------------------

In his book *The Symbolic Species*,
Terrence Deacon sketches a theory of human language
aiming to explain how it is qualitatively different
from other forms of animal communication,
and not just a more advanced form of the same kind of communication [#]_.
I will summarize his model and attempt to describe how it
leads to particular stances on
a selection of problems in the philosophy of language
and of linguistics.

Deacon argues that different modes of reference entail properties
that constrain or allow different degrees of expressiveness, learnability, 
and other formal characteristics affecting how they can be used.
It is the mode he terms *symbolic*, which he holds responsible for the
unique properties of human languages.
This symbolic mode of communication in turn allows symbolic thought.

The symbolic mode is contrasted with two simpler modes,
*iconic* and *indexical*, on which it depends.
He then argues that human communication is the only animal communication
that uses all three modes.
These three modes are not meant to be
properties of signs themselves,
but rather modes of cognitive processing.
And argues that symbolic processing cannot occur
without being simultaneous iconic and indexical processing.

Deacon's terminology in brief
-----------------------------

As these terms have all been used by other philosophers and linguists
in different ways, we must head off confusion.
The word 'symbol' is often used to refer to a mark,
such a character or other grapheme.
We will refer to that usage with *sign vehicle*.
Similarly, the word 'indexical' has a different meaning historically
in discussion of the semantic reference pertaining to
certain words including demonstratives.
Deacon's use of the term is related and so
does have implications for that type of reference,
which I will touch on only tangentially.

.. Deacon's hierarchy is based largely on Peirce's distinctions.

The simplest mode of reference in this model is *iconic*.
What is meant by iconic reference,
is the mere recognition that x is similar to y and thus invokes it.
As such, iconic reference is basic to any cognitive process;
it reflects the formation of a category.
This is basic because all learning
requires enough stimulus generalization to
respond the same way to different stimuli
based on their similarity.
But such generalization can also be used in iconic sign vehicles
that bring to mind a category and thus *represent* it.

Iconic reference is necessary as a first step of language processing
even in sign vehicles that can be processed further as indices or symbols.
For example, a written character must be
recognized as being an instance of its class before it can be interpreted.
Similarly, this is reflected in
the type-token distinction of words in corpus analysis,
where we refer to a type as the class of the word
as separate from each of its token instances.

.. 02c054b4-3e86-11eb-8db2-d4619d1011e0 indexical

*Indexical* reference builds on iconic reference
by the addition of association.
To refer indexically requires that two categories
are already established via iconic reference.
The association of these categories allows one to index, or indicate the other.
Because these are established by co-occurrence,
there is potential for implication of causal relation.
Note also that indexical reference is transitive.
If smoke indicates fire and a smoke alarm indicates smoke,
then a smoke alarm indicates fire.

As with iconicity,
associations are also characteristic of all learning processes
and not unique to human communication.
They do not even require cognition.
Biochemical communication, for example in the human body,
is based on what are often termed *signals*,
because they indicate a physiological state.
For example, high levels of insulin
can indicate conditions favourable for growth,
so systems in the body respond to that signal
with growth promoting activity.

Indexicality is a critical stage in linguistic processing.
For example, the process of associating the word 'cup'
with things in the world that hold liquid for drinking
entails iconic relationships between instances of the word 'cup'
and iconic relationships between instances of drinking vessels
establishing both categories
before (or at the same time as) the association between them can be made.
Indexical reference is also ubiquitous in animal communication.
For example, vervet alarm calls differentiate predator types.
Likewise, in human to animal communication,
a dog can be taught associations between spoken words
and behaviours such as sitting or events such as feeding.

The mode of reference that sets human language apart is what Deacon terms *symbolic*
Symbolic reference depends on a sign vehicle already having
been processed indexically.
It then entails further indexical reference among other symbols in a set.
What makes a word a symbol is not just that it indexically
points to a conceptually or physically present referent.
It must also refer to other words,
not only reflected in a thesaurus-like web of substitutability,
but in semantic ontologies and usage constraints
constituting grammar.
This aspect of symbolic reference is responsible for
its combinatorially expansive generative power.

However, this also poses a fundamental problem
in language learnability.
If learning to symbolically process a word requires learning
its relationship with every other word,
then the task quickly becomes intractable.
The puzzle of how children seemingly effortlessly learn language,
despite this "poverty of the stimulus"
is a long-standing question,
and is the motivation for cognitive hypotheses
of innateness, and even of the hard-coded grammar modules
proposed by Chomsky that lack only
a small set of parameters by which to fit the native language [#]_.

In AI terms, Chomsky's view says that the language learning problem requires high bias
in the bias-variance tradeoff of learning models.
That is, most of the information is already in the model.
This would seem to be confirmed by the fact that
computational models that learn
co-occurrence relationships between contiguous vocabulary items on a large scale
are still very limited in ability to recognize or generate well formed language.
Not only do they fail to capture long distance relationships,
but there is never enough data to capture the behaviour of rare collocations,
let alone predict the behaviour of unseen ones.

While there is certainly evidence of bias in human brains
conferring ability to process language,
Deacon's view is that the machinery for learning these relationships
is not something added to the ability to process symbols,
but that is already present simply by having these three modes available,
and the ability to switch among them.
What is necessary to reduce the size of the language learning search space
is a way to constrain options.
Through a process of "desymbolization",
Deacon proposes that some words and contexts
call for only indexical reference to other words,
and knowing which mode of reference to use is part of what is learned.
So, for example, the word 'cup' can in principle occur in speech
with any other known word.
However the phrase 'a cup of ___' has a much smaller set of likely completions,
and 'not my cup of ___' even fewer.
This is because grammatical function words represent only indexically.
They point to specific relationships between symbols.
It does turn out that computational models that learn 
implicit distribution patterns are much more powerful.


Once the responsibility for the complexity of human language
is seen as an inherent property of optional symbolic reference,
the answer to the question of how humans can acquire complex grammars
ceases to require either more intelligence than other creatures
or more cognitive infrastructure than what is necessary for symbolic reference itself.
And since symbolic reference is built hierarchically from simpler forms of reference
already present in other animal communication,
and even other important non-verbal human communication,
there need only be an enhanced disposition to refer in this mode.

Even the important property of recursion
follows emergently from symbolic reference itself,
because symbolic reference allows substitution across type levels.
For example, symbols can replace deictic indexicals,
such as 'that boy' being replaced with 'he',
or larger grammatical units such as entire arguments replaced with 'that',
or, more abstractly,
the implicit recursion of successively applying adjectives to noun phrases,
such as 'the little red hen'.

Iconic reference and indexical reference are constrained
by the necessities of similarity of form
and correlation in time or space, respectively.
That means they cannot be substituted except
when those similarities or correlations apply transitively.
This constraint is transcended in the symbolic mode.
We don't actually need to have seen two words
occur together to learn a symbolic relationship between them!
In fact, we learn strong associations between words that occur in alternation.
For example, we associate words such as 'coffee' and 'tea',
even if each tends to occur in exclusion of the other.
This implies both that symbolic properties such as recursion cannot be added
to a system without symbolic reference,
and that once symbolic reference is in place,
nothing more is required for properties such as recursion to be possible.

I hope through the following examples to further clarify
how this symbolic distinction operates.

.. "has a grammar" means constraints on well formed combinations.

.. 98aeeb4e-3e4e-11eb-8db2-d4619d1011e0 not a simple mapping

.. 98aeeb4e-3e4e-11eb-8db2-d4619d1011e0 symbols and physical correspondence

.. 5a0c9e66-3e87-11eb-8db2-d4619d1011e0 type-token

.. b5ef23c8-3f10-11eb-8db2-d4619d1011e0 PoS

.. 13000828-400d-11eb-8db2-d4619d1011e0 recursion

.. a4491f74-40e2-11eb-8968-d4619d1011e0 analogy to math

.. c6bb6fa8-40e2-11eb-8968-d4619d1011e0 structure is not the constraint, but the product

.. Sapir Whorf
.. -----------

Linguistic relativism
---------------------

Deacon reasons that since
the structural properties of human language
emerge from the symbolic mode of reference,
the habitual use of symbolic reference for communication
in turn affects the way we think,
making it different from other kinds of thought
based on other forms of reference.
Because this mode is almost entirely restricted to humans, 
this could be viewed as a species version of strong linguistic relativism [#]_.

The relativistic idea that there is a relationship between
the particular language one speaks and the form of one's thoughts
is usually attributed to Sapir and Whorf.
It has been criticized as being either trivial in its weak form of mere influence,
or implausible in its strong form of limitation on what thoughts are possible.
It's not particularly contentious that, for example, 
linguistic distinctions our language requires 
can predispose us to make those distinctions
when thinking about objects, especially when we are preparing to talk about them,
but just because a certain meaning is more easily accessible in one language
than another, does not mean it cannot be arrived at in another.
However, if the comparison is among species rather than within,
the strong form becomes a more attractive hypothesis.
We know from the study of formal languages
that different generative rules in symbolic systems concretely affect
expressibility in mathematically provable ways.
Not having symbolic reference at all
seems to preclude many kinds of thought,
particularly thought involving modal and logical operators or other counterfactuals.

.. 3db9ece6-458f-11eb-9ff5-d4619d1011e0 examples of things animals can't think due to grammar

If we think about animals in close human contact, for example dogs,
it's clear that we can teach some of them to "understand" words,
but this understanding appears to stay strictly within indexical interpretation.
A dog can learn to associate a word or phrase with a behaviour to perform,
or with an event to happen now, such as "Let's go for a walk" or "dinner time".
These are indexical understandings only,
because they associate a word category with
a conceptual category that is, crucially, coincident in time and place.
If the co-occurrence between the word and event ceased,
the association would eventually be extinguished, too.
But imagine trying to verbally present a dog with
an alternative between a walk and a meal,
or to tell him a story about yesterday's walk.
You cannot ask a dog whether he believes there is a squirrel outside.

.. and probably most reliably when presented with
   a particular pattern of intonation.

Consider trying to replicate the "marshmallow test" of delayed gratification.
In the original Stanford experiment,
young children were given a marshmallow, and a choice.
If they did not eat the marshmallow when the staff left the room,
they would soon be given two marshmallows to eat.
The idea is that two marshmallows are better than one,
and that a child who has the ability to temporarily inhibit
the impulse to eat the one given knowledge of the contingent second,
will have better outcomes in life.

I submit that the corresponding test performed on dogs can only test obedience,
because the dog cannot be taught to understand the trade being offered,
even if they "know" the word for the treat in question.
We could train the dog not to eat a treat
because he knows he'll be rewarded.
We could even train him to reject a lesser treat, say, a strawberry,
in anticipation of a slice of beef.
But this would be a mere association of the strawberry with
the initiation of a performance: do not eat the strawberry and be rewarded with beef.
It would require training exactly because it could not be explained in words.
In other words, the dog can learn an association between behaviour and reward;
this is an indexical reference, a particular instance of
an "if x then y" relation.
But the dog can't seem to learn "if x then y" itself as a hypothetical structure
and then apply it to new referents.
If other animals had symbolic tools with which to organize perception,
we would expect to see expression of symbolic reference in their native communication,
or at least the ability to be taught to use it with humans.

.. The interesting difference in the child and dog versions of the test
   comes in the presumption that a choice can made.
   In other words, if we presume that a dog likes strawberries but prefers beef,
   how do we know that the dog, having eaten the strawberry or not,
   knew the choice he was making?
   I think at the very least we would require a kind of Turing Test,
   in which the dog could 
   
Although much of the focus of the discourse on
linguistic relativism among human languages is lexical —
the canonical example being the existence of many words for snow in the Arctic —
Whorf's original descriptions focused on what he deemed grammatical differences.
That is, he noted that in order to communicate
we have to agree on a system of organizing our perceptions,
and asserts it is this organization which then shapes our thought [#]_.
Specifically, he wrote about classifications that would either be
explicitly marked grammatically, for example with grammatical morphemes,
or implicitly through distribution patterns.

.. a428029e-458d-11eb-9ff5-d4619d1011e0 experiences, categories don't require language

Arguably, from a strictly lexical perspective,
we should expect other animals to be able to associate words with
particular sets of stimuli in ways that could
illustrate different ways of organizing the perceptual world.
We know that we can teach lab animals complex tasks that entail such distinctions.
Experiencing categories is not a linguistic act.
It requires only iconic reference and is not unique to humans.
Using a word to refer to a category is only indexical reference
and is also demonstrably teachable to some animals as in our dog example.

What is linguistic and symbolic is using categories to
constrain grammatical constructions.
For this purpose categories can be based on semantic properties grounded in experience
the way 'a cup of ___' imposes selectional restrictions [#]_,
but they can also be completely arbitrary such as grammatical gender.
Having the ability to organize categories around grammatical functions
is critical for reducing the search space of relations between words.
It's also essential for the recursive ability to
carry forward reference through a chain of substitution.

.. differentiating into language requires shaping into a form
   choosing features required by it
.. Thinking symbolically is a result of internalizing symbolic communication,
   therefore animals cannnot think symbolically at all.
.. Emoji example

.. Sense and reference
.. -------------------

.. Frege: predication is applying sense to a reference

Sense and reference
-------------------

Deacon hypothesizes that the predicate-argument structure of linguistic communication
results from the dependence of symbolic reference on indexical reference [#]_.
The linguistic function of a predicate is to categorize its argument.
In this sense, the argument is what the discourse is "about",
and therefore its reference requires a kind of concreteness of instantiation,
or grounding to something "real",
while the predicate only refers to a symbolic category
that needn't itself be thus instantiated.
Thus the predicate derives grounding via its argument
and, according to Deacon, requires it to be meaningful.
Concreteness is a property of indexical reference,
because of its requirement for co-occurence or contiguity.
What an index refers to must be something present or proximate.
But because indexical reference has transitivity,
this proximity requirement for
words that refer indexically can be linked in a chain.
To see this, consider sentences (1) - (4).

(1) The girl sat in the chair.
(2) She was too heavy.
(3) It broke.
(4) That's a shame.

In Deacon's analysis, in (1) 'the' serves in both cases as a form of deixis
that grounds the sentence indexically to specific referents.
However, once they have been incorporated into the sentence,
they can be substituted symbolically in a way that carries the reference.
'She', 'it', and 'that' make use of grammatical category to transitively
maintain a chain of referential grounding.

There is a tradition in analytic philosophy
to seek a direct correspondence between language and metaphysical reality;
for words and expressions to "attach" via reference to things in the world.
In Wittgenstein's Tractatus, he lays out a kind of logico-linguistic atomism,
where every proposition can be analyzed down to "names":
elements that directly refer to objects in the world.

There have been many different
interpretations of what it means for an expression to refer to objects
and how that reference happens.
Gottlob Frege distinguished between sense and reference,
saying "We let a *sign* *express* its sense and *designate* its nominatum." [#]_.
In other words, in this view,
sense is a set of properties that an expression describes,
and that description, in addition to corresponding to the properties,
also refers to something specific by them,
insofar as it narrows down the potential referential candidates to
the single thing in the world that has those properties.
If something does exist in the world with the properties,
the expression also corresponds to a true proposition.
He also pointed out that an expression
can have a sense and yet not have a nominatum;
not refer to anything existing in the world,
if there is nothing having the properties described.

A distinction was subsequently proposed by Keith Donellan
about definite descriptions [#]_.
He suggested that when a definite description narrows a subject
to something specific that we don't know the referent for,
it merely attributes, but doesn't refer.
For example, his claim is that in a sentence such as
'The person who sat in my chair was too heavy.'
if we don't know who sat in the chair, then
the expression 'The person who sat in my chair' doesn't refer,
but merely attributes, having a meaning akin to
there exists a person x such that x sat in my chair.
Whereas if we do believe we know who sat in the chair,
then the expression refers to that person in a "rigid" way.
That is, in the attributive case,
any subsequent attribution is meant to apply to whoever sat in the chair,
whereas in the "referring" case,
subsequent attributions are meant to apply to the person we believed sat in the chair,
even if it turns out that they didn't sit in the chair after all,
or if there is contention over that point.

In both cases there is an act of predication,
so Deacon's hypothesis would require an indexical reference in the phrase either way.
However, I don't think his hypothesis requires that the chain of reference
terminate in a rigid reference or Wittgensteinian atom.
Rather, the chain of reference need only terminate in some
mutually agreed upon focus of attention.
And this focus could be entirely fictional, such as the Jabberwock,
or incompletely specified, so long as it is held constant across substitutions.

The requirement that every predicate be
a symbol grounded by its argument via indexical reference
and that a reference chain need trace back only to a mutual focus of attention,
may explain a further example in Donellan's argument.
Donellan pointed out that a definite description in a predicate
need neither refer nor attribute
(and thus carry the implication that there exists a referent).
His example contrasts the questions:

(5) Is de Gaulle the King of France?
(6) Is the King of France de Gaulle?

Normally, we would not consider (5) to contain the presupposition
that there is a king of France, whereas we would in (6).
Deacon's hypothesis would explain this by noting that
the first predication requires an indexical grounding,
because it begins the communication.
Therefore it asserts its description as referring to something,
even if it is only the attributive sense of
asserting that the thing exists.
The second predication derives its indexical reference from the first,
so it need not itself be grounded.
In this way, (5) does not assert there is a king of France,
but only asks if the referent, de Gaulle, fits that symbolic
(and therefore hypothetical), category of being king of France.
In contrast, (6) first asserts the king of France has a referent before 
asking if it can be merged with the category of being de Gaulle.


.. This interpretation of sense and reference is thus called "descriptivism."
   
   Because descriptions inherently contain sense,
   they can solve problems where a sentence appears vacuous
   from a referent only analysis.
   For example a sentence of the form "x is y" would seem meaningless
   if x and y have no meaning other than referring to something,
   but if they carry sense,
   then the expression serves to


.. identify
   two referents, where it may not have been a priori deducible
   that the two descriptions referred to the same thing.

.. be03ccc4-3e45-11eb-8db2-d4619d1011e0 Donellan causal chain

.. d4d7d8f2-40dc-11eb-8968-d4619d1011e0 predication and sense


.. The problem of easy knowledge and private language
.. --------------------------------------------------

.. 30162e7c-3f10-11eb-8db2-d4619d1011e0 overview

Knowledge of language
---------------------

While the above discussion
suggests that expressions of language refer, at least transitively, 
to objects in the world,
I have glossed over the difference between reference and meaning.
Potential differences are sometimes illustrated
by embedding propositions that look like they have the same meaning
from a reference point of view
into belief statements.
Hence the classic example from Frege of 'the morning star' and 'the evening star'
which both refer to Venus can be used to show the difference.

(7) I believe that the morning star is the morning star.
(8) I believe that the morning star is the evening star.

If meaning were merely reference, (7) and (8) would have the same meaning.
Meaning appears to have more to do with ideas in the mind
than objects in the world.
Given that only the individual has access to his own ideas,
this led Locke to somewhat absurdly conclude that language must be private —
absurd because the putative function of language is to communicate,
and if meaning is necessarily private then nothing can be communicated [#]_.

If what words or expressions refer to are ideas,
then we may be able to make a helpful analogy
between mental representations and indexical reference.
One theory of associative memory is that the hippocampus
organizes it by index.
For example, the word 'cup' can be an index into associative memory
which ties together perceptual fragments of actual experience
(though they may be merged or idealized over time).
In this way, the associations with the word 'cup' for an individual
are indeed private.
However, because 'cup' can also be processed symbolically,
that means there are associations with other symbols
and how those symbols interact via grammar.
Grammar, unlike associative memory, is procedural
and therefore processed in part in the cerebellum [#]_.
Because the *word* 'cup' and its grammatical occurrences
are exactly what is shared when people use language to communicate,
this symbol-to-symbol structure is negotiated in public,
regardless of the idiosyncratic associative contents of its indexical grounding.
In other words,
perhaps what is private is not language, the symbolic system,
but merely associations in the pre-verbal processing of meanings.

Debate about whether language can be private
does sometimes center on discussion of grammatical rules.
For example, Saul Kripke and others point out 
that there can be many, perhaps even infinitely many rules that a given
data set of usage seen at a given point in time is obeying,
and therefore there is no way to distinguish 
whether you and I are following the same rules
or whether our rules merely agree thus far,
but are each, essentially, private and different.
To be sure even within what is considered correct usage,
there are idiosyncracies in production
such that linguistic forensics can sometimes determine authorship
just by statistical analysis.

In analogy to formal languages, many have sought
to characterize human languages as infinite sets
of utterances that would qualify as grammatically correct English.
This analogy leads naturally to treating the problem
as an inference puzzle to find the formal language
that would generate the appropriate grammar.
In contrast, Deacon's view is that language in the wild
is not so much deemed correct or incorrect,
but understandable or not,
and that this depends exactly on whether the indexical references can be 
derived from immediate sources of joint attention, linguistic or non-linguistic.
This would explain tolerance of "broken" English
by foreigners and children, or the fragments characteristic of dialogue.
Interestingly, this does seem to imply that language
requires outside verification to judge,
denying the ability of language to be private.

A related problem in language knowledge
that Deacon specifically aimed to address
was the Chomskian idea that the complexity of grammar
is so high that humans must have innate grammatical structures
that need only be parameterized to function.
They seem to agree that the induction of a rule set
is implausible,
but Deacon's solution is to consider the complexity inherent in the
symbolic mode of reference,
and the constraints to be exactly what is imposed
by generic learning constraints in the human brain.
Thus, we incorporate desymbolization exactly to the degree needed
to cope with our cognitive limitations,
such as short term memory capacity.
In other words, the forms of grammatical constraints human languages have 
are a direct result of our limited cognitive ability to deal with symbolic reference,
and this is the source of apparent universality.
The structure is the product of the process,
not the constraint that has to be learned.


In "Language and Problems of Knowledge",
Chomsky goes so far as to say that we must have innate concepts
that need only be given labels [1].
Otherwise, he says, we could not explain that children at
their peak of language acquisition learn
many words a day, sometimes after a single occurrence.
But this is not so remarkable when we remember that concepts are not symbolic,
they are merely indexical, and therefore do not require language.
It's possible that when children are in the phase of
acquiring lexical items at this rate,
they have a backlog of concepts waiting for labels,
not because those concepts were innate,
but because they were acquired non-verbally before the rest of their language ability
was ready to label them,
and the phase corresponds to a sudden readiness to acquire words symbolically,
because they have figured out how to do this mode of reference.


Summary
-------

Deacon's model of symbolic reference
distinguishes a hierarchy of modes of reference,
such that the first two are ubiquitous in learning and communication
in all living systems,
whereas the symbolic mode, building on the others, is unique to human language.
These distinctions cast new light on some old problems.
While they do not directly bear on differences between human languages,
they clarify how certain word-like communications in other animals
differ from full-fledged symbolic words, while retaining indexical properties,
and how this limitation to their use in communication,
likely imposes limitations in thought.

Conceiving of reference as a mode of processing
rather than something inherent in sign vehicles themselves
allows a shift in the objective of linguistic analyses
from finding assertions about things in the world
to maintaining shared focus on a small, but growing set of ideas
as they are transformed and created through predications.
This ability to focus on ideas via symbolic reference
allows a kind of cognition that is not dependent on
the proximity or reality of any object,
and yet is always linked to a shared context.

The general constraints of memory are sufficient to 
require limitations on symbol-to-symbol relations
that would be reflected as a kind of universal
in any language.
Therefore, according to Deacon,
We need no special innate representation of grammar,
but only a capacity to optionally use symbolic reference,
in order to end up with language structures sharing basic properties.
Non-human animal communication is not simplified symbolic language,
but rather non-symbolic.




.. Grammar syntactic-semantic
.. --------------------------

.. Error correction
.. ----------------

.. 33854d56-3f0e-11eb-8db2-d4619d1011e0 overview

.. 7d350224-3f0f-11eb-8db2-d4619d1011e0 symbolic level

.. 19ac3fd6-40e7-11eb-8968-d4619d1011e0
   A broken category that is not a error, is a metaphor.

.. Metaphor
.. --------

.. Computational Cognitive Science
.. -------------------------------

.. 7fc79df2-40e1-11eb-8968-d4619d1011e0 neural nets

.. bce30aec-40e5-11eb-8968-d4619d1011e0 Search space reduction



.. [#] Deacon, Terrence William and International Society for Science and Religion. The Symbolic Species: The Co-Evolution of Language and the Brain. Cambridge: International Society for Science and Religion, 2007.

.. [#] Chomsky, Noam. “Language and Problems of Knowledge.” Teorema: Revista Internacional de Filosofía 16, no. 2 (1997): 5–33.

.. [#] Deacon spends many pages describing a set of experiments in which
       the researchers successfully (though with difficulty)
       teach chimps to make a modest number of symbolic references.
       This is important for two reasons: first it shows that 
       symbolic reference is a process, not an innate brain structure,
       that you either have or you don't,
       and second it shows that nonetheless it is much easier for humans
       to make that particular leap, so there must be an innate *facility*.


.. [#] Scholz, Barbara C., Francis Jeffry Pelletier, and Geoffrey K. Pullum. “Philosophy of Linguistics.” In The Stanford Encyclopedia of Philosophy, edited by Edward N. Zalta, Summer 2020. Metaphysics Research Lab, Stanford University, 2020. 



.. [#] selectional restrictions: https://en.wikipedia.org/wiki/Selection_(linguistics)

       

.. [#] Deacon, Terrence W. “Beyond the Symbolic Species.” In The Symbolic Species Evolved, edited by Theresa Schilhab, Frederik Stjernfelt, and Terrence Deacon, 6:9–38. Biosemiotics. Dordrecht: Springer Netherlands, 2012. 

.. [#] Frege, G.: 1892, ‘On Sense and Nominatum’, in Martinich, Aloysius, ed. The Philosophy of Language. New York, N.Y: Oxford University Press, 2010.

.. [#] Donnellan, Keith S. “Reference and Definite Descriptions.” The Philosophical Review 75, no. 3 (July 1966): 281. 

.. [#] Locke, John, and Frederick Ryland. Locke on Words: An Essay Concerning Human Understanding. W.S. Sonnenschein & Company, 1882.

.. [#] See e.g. Adamaszek, Michael, and Kenneth C. Kirkby. “Cerebellum and Grammar Processing.” In The Linguistic Cerebellum, 81–105. Elsevier, 2016. 

