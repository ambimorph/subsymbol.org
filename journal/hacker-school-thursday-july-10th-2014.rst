.. title: Hacker School, Thursday, July 10th, 2014
.. slug: hacker-school-thursday-july-10th-2014
.. date: 2014-07-11 14:13:11 UTC
.. tags: hacker school, checkin
.. link: 
.. description: 
.. type: text

Thursdays are presentation days, and I have decided I want to present as often as possible, regardless of the state of my projects.
I chose to present about the realisation I had that dealing with mutable files in Protagonist means making a distinction between addresses and contents that isn't usually done in filesystems.

I had wanted to draw a simple diagram of three circular nodes laid out in an equilateral triangle formation with arrows between them showing dependencies.
My go-to language for this kind of problem is PostScript.
I love PostScript, though I am still a novice with it.
It gives fine-grained control over your drawing, and it is stack-based.

However, when I started trying to write my program, I felt rushed, and it seemed like I wouldn't have time to both write an elegant program to draw the diagram, and finish thinking through what I wanted to present before the day was over.
I have written a similar diagram in the past using some Python interface to GraphViz, but I couldn't remember which one, and I spent some time looking at different such libraries, but not feeling like they gave me what I wanted.

I eventually went back to PostScript, and hacked out some ugly-but-working code to generate my diagram:

.. image:: https://lh5.googleusercontent.com/-0dFaK3jKirQ/U78BnodwrUI/AAAAAAAACPs/mGzaDJfLZk4/w426-h376-no/name_triangle.png

This gave me an idea about to get back into learning a stack-based language, by successively refining this code.

`My presentation can be found on YouTube <https://www.youtube.com/watch?v=uiXPmDI8qDs&feature=youtu.be>`_,
and I also wrote `a blog post about it <http://subsymbol.org/posts/addresses-and-contents.html>`_.

