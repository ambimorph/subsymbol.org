.. title: Pólya's Urn
.. slug: polyas-urn
.. date: 2014-07-25 17:24:37 UTC
.. tags: mathjax, probability
.. link: 
.. description: 
.. type: text
.. nocomments: True

Balls in Urns
=============

If you have studied probability, you are probably familiar with the canonical balls-in-an-urn allegory for understanding discrete probability distributions.
For example, you could imagine an urn containing 1 red ball and 3 green balls.
Drawing a ball from the urn at random represents sampling from a probability distribution where the probability of one outcome is :math:`25\%` and the probability of the other outcome is :math:`75\%`
We can extend this idea in a variety of ways.


Pólya's Urn
===========

In *Pólya's Urn*, the extension is that whenever you draw a ball from the urn, you not only replace it, but you add an extra ball of the same colour.
So if you happened to draw a green ball in the example above, then the ratio would change from :math:`1:3` to :math:`1:4`.
That means on the next draw, you would now have only a :math:`20\%` chance of drawing red.
On the other hand, if you happened to have drawn red, then the ratio would change to :math:`2:3`, giving red a probability of :math:`40\%`

This process is interesting, because it has the property that the more often you observe something, the more likely you are to observe it again.

Different starting conditions
=============================

The way the distribution changes over time depends on the starting conditions.

One of each
-----------

Let's imagine the simplest case, in which we start with one each of two colours, red and green.
The following table shows the probabilities of getting red on the first three draws, and how each draw changes the probability of the next by changing the proportion of colours in the urn.


.. csv-table:: 
   :header: , RRR, 
   :widths: 4, 4, 4

   **Draw**, **p(Draw)**, **new R:G**
   R, :math:`1/2`, 2:1
   R, :math:`2/3`, 3:1
   R, :math:`3/4`, 4:1

-----

There are more ways to have drawn two of one colour, and one of the other, than 3 of one colour.
However, because of the way drawing a particular colour reinforces itself, 
there is a :math:`50\%` chance of drawing the same colour every time over the first three draws.

.. csv-table:: 
   :header: First three draws, probability
   :widths: 32, 32

   p(RRR), :math:`1/2 \times 2/3 \times 3/4 = 1/4`
   p(RRG), :math:`1/2 \times 2/3 \times 1/4 = 1/12`
   p(RGR), :math:`1/2 \times 2/3 \times 1/2 = 1/6`
   p(RGG), :math:`1/2 \times 2/3 \times 1/2 = 1/6`
   p(GRR), :math:`1/2 \times 2/3 \times 1/2 = 1/6`
   p(GRG), :math:`1/2 \times 2/3 \times 1/2 = 1/6`
   p(GGR), :math:`1/2 \times 2/3 \times 1/4 = 1/12`
   p(GGG), :math:`1/2 \times 2/3 \times 3/4 = 1/4`

Ten of each
-----------

Now suppose that we start with 10 each of red and green balls.
In this case, simply drawing a red ball the first time does not change the probability that it will be drawn again nearly as significantly as with the :math:`1:1` starting conditions.
The probability of drawing 3 of the same colour in a row falls to :math:`2 \times 10/20 \times 11/21 \times 12/22 = 2/7 ≅ 29\%`

We can view the starting conditions as a list of numbers, one for each starting colour, and call it *alpha* (:math:`\alpha`).
So our first example had :math:`\alpha = [1, 3]`, 
our second example had :math:`\alpha = [1, 1]`, 
and our third example had :math:`\alpha = [10, 10]`, 

Higher returns
--------------

On the other hand, imagine if we started with 1 each of red and green, but instead of increasing the number of balls by 1 when we draw a colour, we increased it by 10.
Now every draw has a much stronger effect.
The probability of drawing the same colour 3 times in a row would now be :math:`2 \times 1/2 \times 11/12 \times 21/22 = 7/8 \cong 88\%`

We could even have a particular increase number for each colour, and have another list, called *beta* (:math:`\beta`).

More colours
------------

Another way to change the starting conditions is to increase the number of colours.
If our starting urn had one each of 10 different colours, then, again, when we draw the first ball, it has much less of an effect on the chance of drawing it again.
We can call the number of colours :math:`n`.

Try it!
=======

Use the sliders to choose :math:`n` colours, and a single :math:`\alpha` and :math:`\beta` for all colours. Try drawing balls from the urn, and see how the urn changes.  At any time you can display the urn in rank order or reset to the current slider position.

.. raw:: HTML

	 n: <b id="n-output"></b>
	 <input class="n-slider" type="range" min="1" max="8">
	 α: <b id="alpha-output"></b>
	 <input class="alpha-slider" type="range" min="1" max="8">
	 β: <b id="beta-output"></b>
	 <input class="beta-slider" type="range" min="1" max="8">
	 <br>
	 <p id="urn">Urn</p>
	 <br>
	 <button id="draw">Draw!</button>
	 <button id="reset">Reset.</button>
	 <button id="rank">Order by rank.</button>

	 <script src="/scripts/polya.js">
	 </script>

