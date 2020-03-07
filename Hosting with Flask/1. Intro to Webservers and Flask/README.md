# Intro to Webservers and Flask
## Overview

### What You'll Learn
In this section, you'll learn
1. What webservers do and how
2. How to set up a Flask webserver in Python

### Prerequisites
Before starting this section, you should have 
1. Python and Flask installed on your computer, explained [here](https://github.com/ajstensland/flask-tutorial/blob/hackbu-webdev/README.md#before-we-start)
1. An understanding of [Introductory Python](https://github.com/HackBinghamton/PythonWorkshop)

### Introduction
In this section, we'll discuss how to host webpages with Flask and give you enough background on HTTP(S) to make you comfortable with the next two sections.

---

# What Do Webservers... Do?

Right now, you're viewing the GitHub website. In order for you to view this website, a few things had to happen:

1. Your browser sent out an HTTP "GET request" to GitHub
1. A webserver at GitHub received your HTTP request
1. The webserver sent you the correspoding HTML/CSS/JS to display this page

Webservers have the following responsibilities:

1. Store web pages (e.g. HTML/CSS/JS)
1. Listen for user requests (e.g. "Send me your index.html" or "Here's my survey results, store them, please")
1. Act on those requests appropriately
1. Respond to users with updated content

How does this all happen? We could discuss things such as the [OSI model](https://www.lifewire.com/layers-of-the-osi-model-illustrated-818017) and [socket programming](https://docs.python.org/3/howto/sockets.html), but thankfully Flask abstracts most of this away for you.

We will, however, have to discuss some HTTP concepts before diving in.

# What is HTTP?

Hypertext Transfer Protocol (HTTP) is the language of requests and responses that drives the Web. It consists of two main parts: requests by clients (i.e. users) and responses by webservers.

Requests allow users to ask for pages from and send information to their webserver of interest. The two main requests we'll discuss are GET requests and POST requests.

## Requests: GET and POST

GET requests are the way we usually ask a webserver for a webpage. When you navigated to this URL, your browser sent a GET request asking for this page.

POST requests allow users to send data *back* to a webserver. For example, when someone fills out a form or uploads a file, the data is usually sent via POST.

## Responses: 200, 404, 403, 418...

Once the webserver gets a request, it has to let the user know its status with that request. For example, if I asked the webserver for a page that doesn't exist, it has to let me know that the file doesn't exist -- this is a 404 response.

Every response has a different "code", or number, associated with it. Here's a table of some of the most common response codes (as well as one less common one):

| Response Code | Description                                                                   |
|:-------------:|-------------------------------------------------------------------------------|
| 200           | "OK." Everything went as expected                                             |
| 404           | The file you requested was not found                                          |
| 301           | "Redirect." The site you visited is sending you to a new URL.                 |
| 500           | "Internal server error" -- a backend error.                                   |
| 418           | ["I'm a teapot"](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#418) |

Now, we need to discuss how we can programatically receive requests and reply with responses with Flask.

***Fun Exercise:*** If you open up your developer tools (F12, or go into your browser settings) and go to the "Network" menu and browse to a website of your choice, you can see all the requests you sent and responses you received!

***Note:*** While HTTP and HTML may almost look the same, keep in mind that HTML is a way of writing webpages, while HTTP is a way of sending them.

# What is Flask?

Flask allows someone to easily set up a webserver with just a little bit of Python code. All that you need to write is:

1. Some boilerplate code to get the server up and running
2. Functions to handle user requests for different pages

Let's get you started with some of the boilerplate code.

## Boilerplate

In an editor of your choice, let's write the following:

```python3
from flask import Flask

app = Flask(__name__)
```

These two lines will:
1. Import the Flask class, which handles most of the behavior of the application
2. Create a globally-accessible instance of the Flask class. 

(*Note:* Don't worry about the `__name__` bit -- it's a bit of Python heresy).

Now, we're going to tell Flask what to do when a user sends a request for our "home" (i.e. `www.url.com/`) directory. To do this, we're going to need to use some *very* weird Python features you don't normally see:

```python3
@app.route("/")                       # Line 1
def home():                           # Line 2
    return "<h1>Hello, world!</h1>"   # Line 3
```

The first line tells our `app` Flask object, "Hey, when a user requests our home directory, run this `home()` function."

When the Flask object eventually runs the `home()` function, it treats whatever the return value is like HTML and sends it back to the user in a 200 response.

## Running Flask

To test out our new Flask webserver (let's say you named it `webdev.py`), go into a terminal and run `python3 webdev.py`.

You should see a message stating:

```
~ : python3 webdev.py
 * Serving Flask app "test" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 ...
```
You don't have to worry about most of the messages, but the last one is of particular interest. The `127.0.0.1:5000/` is the URL that your new server is being hosted on. To see the results, go to that link! You should see your "Hello, world!" message appear.

## What We've Learned

We can describe the way Flask works in the following steps:

1. Get a request from the user for some file or directory, for example "/index.html"
1. Run the function with the `@app.route("/index.html")` decorator on it
    1. If the function exists, take whatever HTML is returned and send it to the user in a 200 response
    1. If the function does not exist, send back a 404 response
    
Knowing this, let's move on to the next part to learn how to add more pages to our website!
