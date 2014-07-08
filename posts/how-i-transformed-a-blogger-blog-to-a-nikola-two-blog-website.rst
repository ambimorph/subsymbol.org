.. title: How I transformed a Blogger blog to a Nikola two-blog website
.. slug: how-i-transformed-a-blogger-blog-to-a-nikola-two-blog-website
.. date: 2014-07-08 16:59:38 UTC
.. tags: 
.. link: 
.. description: 
.. type: text

In the last post I described why I wanted to move my blog, and what went into my choices.
My goal in exporting my site from Blogger to Nikola was to separate my content into two separate blogs on a single site:
one which is the primary blog, and the other which resides in the background.
I wanted them to be archived separately.
I also wanted there to be a front page that didn't change every time I wrote a new post.

Importing the blog
==================

Nikola has a plugin to import a blog from Blogger, so the first step was to import the blog.
To import, I took the following steps:

* First, I exported my blog from Blogger, which gave me a file called `blog-07-05-2014.xml`. Then,

.. code::

   $ sudo pip install nikola
   $ nikola plugin -i import_blogger
   $ nikola import_blogger -o site blog-07-05-2014.xml # The -o tells nikola what directory to make the site in.

After this, I had some cleanup to do.
For one thing, Nikola renamed all the Blogger files (in a sensible way).
Blogger has date-derived subdirectories for posts, whereas in Nikola all the posts are kept in one folder, called "posts"
So when the new site is up, redirects will be required for anyone with the old link.

The import gave me a file called `url_map.csv`, which contained all the information necessary to redirect the old links to their new locations, but as far as I could tell, those redirects still had to be encoded into the configuration file to take effect.
Since I only had a few, I did this manually.
For every line in the url_map, I inserted a tuple into the `REDIRECTIONS` list in `conf.py`.

The result at this point was a Nikola blog that contained everything the old blog did.

Making it not a blog
====================

There is a document in the Nikola project describing `how to make a non-blog site <http://getnikola.com/creating-a-site-not-a-blog-with-nikola.html>`_.
The instructions boil down to changing three lines of `conf.py`.

Posts and Pages
---------------

As usual, Nikola distinguishes two different kinds of text-derived files.

* *Posts* are blog files.
  They are archived, indexed by tag, and ordered by date for display.
* *Pages* are essentially independent.

So to make a blog into a non-blog, you simply manipulate the variable `POSTS` defined in `conf.py`.
`POSTS` and `PAGES` are lists describing where to find posts or pages respectively, where to render them, and what template to use for them.
We let the `POSTS` list be empty, so everything on the site will be a page.

.. code::

   POSTS = []
   PAGES = [
           ("pages/*.rst", "", "story.tmpl"),
           ("pages/*.txt", "", "story.tmpl"),
           ]

The two entries for `PAGES` are here to allow either txt or rst, but the one that comes first is what will be used when you use the `new_post` command.

So you can create a *page* called "index.html" by running `new_post -p`, and giving it the name `index`.

.. code::

   $ nikola new_post -p

   [...]

   Creating New Page
   -----------------

   Title: index

   [...]
   INFO: new_page: Your page's text is at: pages/index.rst


Since we put it at "", which is the top level of the site, it will be what you see on the "front page".

Unfortunately, this creates a conflict, because when you build the site, the *blog* part is already wired to make an index.html file in the top-level directory, since that's how blogs normally appear.
So you intercept this by adding to `conf.py` the line:

.. code::

   INDEX_PATH = "blog"

This just makes it so the blog index is now created under the folder blog, instead of the top level, and it no longer conflicts.

It also means that now you can have a regular blog under the subdirectory blog, by putting options back in for `POSTS`:

.. code::

   POSTS = [("posts/*.rst", "blog", "post.tmpl")]

But this is not enough for us, because we have imported posts from Blogger that were also being found from the `POSTS` list.
There is another entry in `POSTS` that we need back, that tells Nikola to also collect and render existing html files, such as those we imported.
So we need to add:

.. code::

   ("posts/*.html", "blog", "post.tmpl")

back into the list.
   
Two blogs
=========

At this point I had part of what I wanted.
I had a front page separate from my blog, and all of my previous blog reachable from the site.
But I still wanted to have two blogs, a primary one for themed entries, and a journal for unstructured reflections.

Here are the steps I took to factor the blogs apart:

* Made a new directory for the journal posts called "journal", and moved the appropriate files into it.
* Added ("journal/*.rst", "journal", "story.tmpl") and ("journal/*.html", "journal", "story.tmpl") to the `PAGES` list, so old and new journal entries can be found for rendering.
* Updated the conf.py `REDIRECTIONS` to reflect those

This worked to render them and include them in the site, but the journal articles were not indexed.
That meant that if I knew the URL, I could go to the article, but a visitor to the site could never discover them.

To add indexing I had to add to conf.py:

.. code::

   STORY_INDEX = True

But again, this created a conflict with multiple files called "index.html" trying to go in the same folder.
So I also had to change the name of the index.  I chose "default.html"

.. code::

   INDEX_FILE = "default.html"

But my server doesn't redirect "default.html", so I also added more manual redirects, for the journal, and also for the archives, which also use the `INDEX_FILE` variable.

.. code::

  ("journal/index.html", "http://www.subsymbol.org/journal/default.html"),
  ("2014/index.html", "2014/default.html"),
  ("2013/index.html", "2013/default.html"),
  ("2012/index.html", "2012/default.html"),

Finally, I wanted the journal to be findable without knowing the directory name "journal", so I updated the navigation links:

.. code::

   NAVIGATION_LINKS = {
    DEFAULT_LANG: (
        ("/archive.html", "Archive"),
        ("/categories/default.html", "Tags"),
        ("/blog/default.html", "Blog"),
        ("/journal/default.html", "Journal"),
        ("/rss.xml", "RSS feed"),
     ),
    }


As an extra configuration tweak, I set `TAG_PAGES_ARE_INDEXES = True`, so that when you go to the page for a given tag, it renders the posts themselves, rather than a list.

I would like to do that for my journal index as well, but that feature is not yet general, so if you navigate to "Journal" you will get a list of posts, and unfortunately, since it is a journal, they are named by date.
Moreover, their tags aren't collected.

Parting thoughts
================

All in all, I'm satisfied with the move.
I got a lot of help from the Nikola community, and my main requirements are fulfilled.

There are a few remaining troubles.

Comments
--------

I signed up with Disqus, and think I have initiated the process of importing my old comments, which I was reluctant to lose.
It takes an unspecified amount of time to complete, so I'm hoping that will take care of itself now, but I'm uncertain.

Orphaned rst
------------

Because of the way I built my Blogger site: writing in reStructuredText, converting to HTML, and uploading, I still have the original, pristine rst files on my local system, but Nikola doesn't use them.
It uses the backported HTML from Blogger.
In order to inject the old rst files into Nikola, however, would require manually editing them all to include the correct headers and timestamps.
This seems like a lot of work, and I'm not willing to do it right now.



