.. title: Moving my site off of Blogger
.. slug: moving-my-site-off-of-blogger
.. date: 2014-07-08 16:48:18 UTC
.. tags: 
.. link: 
.. description: 
.. type: text

I was having two problems with the setup of this website.
First, I wanted to factor out `the experiment in vulnerability and transparency that I have been doing by keep a log of my daily goals, progress, and insights at Hacker School <http://www.subsymbol.org/journal/>`_.
I like the experiment, but I wanted it to be separate from `articles I write more deliberately <http://www.subsymbol.org/blog/>`_.

The second problem was that I wanted to migrate from Blogger.

Blogger has advantages.
It is easy to set up, and freely hosted.
It has themes, comments, and a variety of plugins.
You can export your stuff if you want to, so you aren't completely locked in.

However, Blogger is not a good match for someone who wants fine-grained control over her content.
My use of Blogger for the three sites I have hosted on it has consisted of the following elaborate dance:

#. Edit my post in reStructuredText [#]_. 
#. Convert my post into HTML using a custom script I adapted from `rst2blogger <https://pypi.python.org/pypi/rst2blogger>`_ [#]_.
#. Cut and paste my post into the Blogger compose form, click `Preview`, and see if it looked ok.
#. Repeat until all typos and other issues were resolved.
#. Click `Publish`.

The result of all this work was a site that looked more-or-less how I wanted it to in some ways, but was frustrating in others.
For example,

* I couldn't change the css styles that went with a given theme, (and some of them were really dysfunctional).
* I couldn't make the site *not a blog* — the blog assumption is that your most recent content ought to be your most prominent, and this is not an appropriate assumption for some of my use cases.
  I sometimes found myself putting off making a post that was less compelling until I knew I could follow it with a better one quickly!
  The restrictiveness wasn't serving me.

Also, a little independence from Google seems healthy.

What I really wanted was a static site generator, with no dynamic logic on a server-side database.
I wanted my whole site complete and rendered on my local machine to do with what I liked.
In other words, I wanted a static site generator.

Choosing a static site generator
==================================

My criteria were:

* Open source
* Python
* Works to generate non-blog sites.

This gave me two choices that I knew of: `Pelican <http://blog.getpelican.com/>`_, and `Nikola <http://getnikola.com/>`_.

I have had my eyes on Pelican for some time now.
I didn't like the way the resulting websites looked, though, until recently.
They had a jarring "I'm a programmer, not a designer" feel.
Being a programmer and not a designer, I can't articulate it much more precisely than that.
These days, the sites look fine to me.
The docs are well written, the code looks good, and `people whose opinions about such things I respect <http://www.lothar.com/blog/>`_ use it.

In the meantime, I also found out about Nikola,
which was recommended by `another respected coder-friend <https://github.com/punchagan>`_.

I decided to use Nikola, in part because it has a plugin to import from Blogger, and in part because the above-mentioned friend offered to help me.

In the next post, I'll describe how I ported my Blogger blog into a Nikola blog.


.. [#] I used to write in pure HTML, but after much goading from Zooko, I switched to rst.  I'm glad; I find rst more flexible.

.. [#] I didn't want the script to deploy it, because I didn't want to trust the script with my Google authentication, so I took that part out.  I also changed some heading styles that Blogger doesn't render well.
