# Adding Pages and Using Templates
## Overview

### What You'll Learn
In this section, you'll learn
1. How to add more pages besides "/" to your website
2. How to use "templates" to make your website prettier

### Prerequisites
Before starting this section, you should have 
1. An understanding of Flask basics (**ADD LINK WHEN READY**)
2. An understanding of HTML/CSS (**ADD LINK WHEN READY**)

### Introduction
In the previous section, you learned how to set up a barebones Flask server. In this section, you'll learn how to serve other pages and how to make your website use custom HTML and CSS. 

---

# Adding More Pages

If your website is like the vast majority of those on the web, you probably want more than 1 page for users to visit.

Let's say we were building a personal website with an "About Me" page as well as a homepage. We would add the following code:

```python3
@app.route("/about")
def about():
    return "<h1>About Me</h1>\n<p>Hello, I'm ____ _____ and I'm a member of HackBU</p>"
```

Cool! Now, when someone navigates to `www.our-domain.com/about` they'll find our "About Me" page instead of the homepage.

You can repeat this pattern with as many different pages as you'd like to add more pages to your website.

Something does feel a bit off about writing all of our HTML in a Python string, no? Let's fix that.

# Using Templates

Flask allows users to turn their HTML into "templates". To turn your raw HTML project website into a Flask webserver, we'll do the following:

## 1. Changing directory structure

You'll need to use the following directory structure for your project, and fill the folders as labeled:
```
flask-app/
├── app.py
├── static/     <- Images, CSS, etc.
└── templates/  <- HTML
```

## 2. Replacing relative paths

Anywhere your HTML has a relative path to another file (e.g. images or stylesheets), replace the path with

```{{ url_for('static', filename=<whatever the filename is>) }}```

For example, let's convert this hyperlinked image to template format:

***Before:***
```html
...
    <a href="index.html">
      <img class="logo" src="assets/logo.png"/>
    </a>
...
```

***After:***
```html
...
    <a href="{{ url_for('index') }}">
      <img class="logo" src="{{ url_for('static', filename='logo.png') }}"/>
    </a>
...
```

## 3. Using the template in your code

Now that our templates are ready to use, we can enable our Flask application to use them. We can just use the `render_template` function imported from flask to do so. With our boilerplate code from our last section, let's add this functionality:

```python3
from flask import Flask, render_template
...
@app.route("/")
def index():
    return render_template("index.html")
...
```

This code will now go look for a template called `index.html` and return it to the user!
