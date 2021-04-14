.. title: Hacker School, Wednesday, July 30th, 2014
.. slug: hacker-school-wednesday-july-30th-2014
.. date: 2014-07-30 15:36:37 UTC
.. tags: hacker school, checkin
.. link: 
.. description: 
.. type: text


Goals:

* Explore the behaviour of inotify.
* Work on the Protagonist rewrite.

Actual:

* I explored inotify in a few different ways.
  I was so surprised about the behaviour of inotify, and the way it interacts with my desired use case, that I have decided to make a short presentation and post about it, so I won't elaborate here.
* I made some good progress through implementing the new Protagonist design.

  However, the design is really complex, and I can't fail to notice that I rarely want to work on it, and when I did yesterday, it took a lot of effort to stay motivated.
  I had to keep the new design document open at all times to remember the desired invariants;
  it was hard to keep it all in my mental model at once.
  That seemed like a bad sign.

  Maybe this is normal for a project of sufficient complexity, but I started thinking about why the complexity had taken such a hit.
  It has arisen out of the attempt to accommodate *immutable files*.

  Remembering this, I was inspired to watch a talk that Zach Allaun had earlier recommended, when I talked about addresses and contents:
  Rich Hickey's `The Value of Values <http://www.infoq.com/presentations/Value-Values>`_.


These three things together — the behaviour of inotify under linking and copy-on-write-like applications, the complexity of Protagonist when trying to accommodate immutable files, and Rich Hickey's talk — 
compelled me to decide to re-re-think the Protagonist design in its approach to mutability.
