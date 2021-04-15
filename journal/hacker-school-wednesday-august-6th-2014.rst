.. title: Hacker School, Wednesday, August 6th, 2014
.. slug: hacker-school-wednesday-august-6th-2014
.. date: 2014-08-06 18:48:32 UTC
.. tags: hacker school, checkin
.. link: 
.. description: 
.. type: text

On Wednesday, I read through a little more of the Python data structures book.
It is very interesting to me to go through the description of basic Python built-in structures after having used them so long.
For one thing, I am much more interested in immutability than I was when I first learned Python,
so I am noting which subset of the methods and objects maintain that property.

I started writing one of the simple exercises from the first section.
Although I intend to continue to improve as a programmer, it is a pleasure to see how much I have improved since then, and even since I started here at Hacker School.
Reading and thinking is a big part of it for me, but it is only reinforced through more coding.
I think I sometimes delay too long to get back to coding.
As Gary Taubes once said to Zooko: "Research is a great way to procrastinate writing."

-----

I took an opportunity to pair with Jasmine Yan, who was working on an image matching problem.
The task is to automate Gary Blehm's Find the Two Identical Penmen puzzle.
(Click for larger image.)

.. image:: http://web.mit.edu/jesstess/www/HackerSchool/penmen2.png
	   :width: 10cm
	   :align: center
	   :target: http://web.mit.edu/jesstess/www/HackerSchool/penmen2.png

-----

The main two problems in the task are selecting regions to compare, and then effectively filtering the intractable number of naive comparisons.

Jasmine had already made a lot of progress on the former, so we brainstormed about the latter.
I love thinking about that kind of problem, and it made me happy to work with someone else.
After all these weeks at Hacker School, even coming in with the forewarning of the all-to-common post-hacker-school wish-I-had-paired-more sentiment, I still find this among the hardest things to do.
I'm making progress, though.

-----

I have had ongoing personal struggles over the last several weeks, and although I think I'm coping well, it has affected my focus.
I noticed that lately, unlike my first several weeks here, I have frequently felt compelled to read email, and look at social media throughout the day.
I decided yesterday to use a timer to help me manage this.
I do have a timer on my phone, but I like to listen to music while I work, so I am often headphoned into my laptop.
I probably could have found a timer, but just for the fun of it, I elected to write one, and to write it in bash.

I got a little stuck when the procedure I finally got working on the commandline didn't work as a function in my .bashrc.
The for-loop construct *{n..m}* did not work.  Fellow HaSchers taught me the *seq n m* command.
The final version, while having room for improvement, does what I want: allows me to give it a number of seconds, and displays a second-by-second count up until the time is complete, at which point it plays a sound.

.. code:: sh

	  function timer() { 
	    for i in `seq 1 $1`; 
	      do sleep 1; 
	        if  (($i%60 < 10)) ; then
	          echo "$((i / 60)):0$((i % 60)) ";
	        else
	          echo "$((i / 60)):$((i % 60)) ";
	        fi;
	      done; testbell
	  }

where *testbell* is an alias I wrote earlier to play one of two sound files, depending on the return code of the previous call.

If I were going to improve it, I would have it update the output in place, which I don't currently know how to do.

Armed with a timer, I could make short sprints in which whenever I felt the urge to check a message source, I could use that meditative technique I talked about in Monday's post:
Notice it, notice the circumstances, and gently let it go and return to my work, knowing that a chance will come soon.
This attention and awareness, along with the flow control has already helped me a great deal.






