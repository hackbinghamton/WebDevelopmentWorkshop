# Hosting Webpages with Flask
## Overview

### What You'll Learn
In these sections, you'll learn
1. How webservers work, and how to set up a Flask webserver
2. How to use "templates" (custom HTML and CSS) with Flask
3. How to take user input into your Python programs through Flask

### Prerequisites
Before starting these sections, you should have an understanding of
1. Have Python installed (see "Before We Start" below)
2. [Python Basics](https://github.com/HackBinghamton/PythonWorkshop)
3. [HTML/CSS]() **FILL LINK** (for parts 2 and 3)

### Introduction
In these sections, we'll discuss hosting web content with Flask servers, how to use custom HTML/CSS with them, and how to take input into your own Python code from users and send output back to them.

## Before We Start
Make sure that you have Python 3 and Flask installed.

The latest version of Python 3 for your OS can be found at https://www.python.org/downloads/.
If using Linux of some variety, try to install it through your package manager (e.g. apt-get, pacman, etc.) instead of downloading from the website.

Once Python is installed, open the command prompt and run 'pip3 install Flask'.

You should be good to go!

---

## 1. Raw Basics
1. Import Flask from flask -- this will let you run Flask!

1. Create an instance of a Flask app
    ```python
    app = Flask(__name__)
    ```
    Note: The `__name__` part is required.

1. Then, use function decorators to tell Flask how to route your page.
    For example:
    ```python
    @app.route('/')
    def index():
        ...
    ```
    This function will define what happens when a client goes to "yoururl.com/"
    
    ```python
    @app.route('/about')
    def about():
        ...
    ```
    This function will define what happens when a client goes to "yoururl.com/about"

1. Now, let's make these functions do something!
    What a app.route()-decorated function returns is the HTML that gets served to clients requesting your page!
    So, if we return "Hello, world!" from a given method, that is what will be seen by the users navigating to that method's url.

1. Enable the app to run.
    We'll add the following code to the bottom of our file:
    ```python
    if __name__ == "__main__":
      app.run(debug=True)
    ```
    Two things to note:
    1. The `if __name__ == "__main__"` chunk is a built-in way of running a kind of 'main' method
    2. `debug=True` just makes sure that messages about what's happening get printed to the command line you run Flask from.
    
--- 

## 2. Making It Pretty
So, it would be nice to make websites that looked half-decent and had multiple pages, right? Let's do that.
To make your Flask website have HTML and CSS decoration, we'll do the following:
1. Create two new folders, `static` and `templates`
    * Static will hold your images and CSS
    * HTML will hold your HTML pages
1. Inside of templates, let's write an `index.html`
    * Instead of doing paths to assets and stylesheets after `href` tags, use `{{ url_for('static', filename='<asset name here>') }}`
1. Now, inside of `app.py`, let's do a few things. 
    1. Add `render_template` after your import statment, right next to `Flask`
    1. In your `index()` function, instead of returning a message, return `render_template('<filename>')`
1. Create several other pages like this.
1. To link to these pages in your HTML, use `{{ url_for('<url-ending>') }}`
    * For example, `{{ url_for('index') }}` would link someone to the `index()` function in your app.py

---

## 3. Taking Input and Output: Zalgo Text Generator
Over the course of this tutorial so far, we haven't learned to do anything you couldn't do with raw HTML. Let's change that.
Let's try to take user input and do some cool Python stuff to it, and return it to the user.
1. To the top of your app.py file, add this to your import: `request`
1. Next in the `app.route()` decorator, add the argument `methods=['POST']`
1. Now, we can access data passed in through HTML forms. See the example for specifics on how to do this. 
1. To send a piece of information back to the user:
    1. Add the following tag to your HTML: `{{ <variable name> }}`
    1. Add the folowing argument to your `render_template()`: `<variable name>=<variable>`

## 4. Converting HTML5UP Templates Into Flask-Ready Format
If you want to make your new website look a bit more exciting, you can always grab a template from html5up: https://html5up.net/.

Once you've downloaded and extracted a zip file for the template that you like, move the index.html file into the templates folder of your project. Then rename your old index.html to something else (like index2.html or something along those lines).

Back in the extracted template directory, go into the assets folder and move the fonts folder into the static folder of your project. Then, move just the contents (folders and all) from the css and sass folders into the static folder as well.

Because of some differences in how Flask handles html and css files, you'll need to change a few things before your template will work.

Start by opening up the index.html that you just moved into your templates folder.

Anywhere that you see:

```html
"rel="stylesheet" href="assets/css/..."
```

replace it with:

```html
"rel="stylesheet" href="{{ url_for('static', filename='...') }}"
```

If all of your files are in the correct place, this should run your website with the new template.

All you'll have to do now is edit the new index.html file with your own information.

If you're feeling ambitious, you can also copy the html from index into the other pages that we made in this demo. You'll also need to add links that connect all of the pages. If you need any help with this, feel free to ask any of the organizers.
