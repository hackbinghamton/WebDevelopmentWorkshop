# Using Input and Output with Flask
## Overview

### What You'll Learn
In this section, you'll learn
1. How to make your pages accept input from POST requests
2. How to use the input on the back end
3. How to return output to the user

### Prerequisites
Before starting this section, you should have 
1. An understanding of Flask basics (**ADD LINK WHEN READY**)
2. An understanding of templates (**ADD LINK WHEN READY**)

### Introduction
Now that we know how to make a basic static webpage with Flask, let's learn how to have our page interact with the user's input.

---

# Taking Input

Input over the web can come in many forms. The easiest way to recieve input to your server is via POST request.

You can specify what function to run for a given URL based on the request type used. For example, let's consider if I had a `survey.html` on my page that you could access from `www.myurl.com/survey.html` which contained the following HTML form on it:

```html
<form action="survey.html" method="post">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
  <label for="age">Age:</label><br>
  <input type="text" id="age" name="age">
</form> 
```

When someone first visits the survey page, they'll get to it via GET request. When they submit the form after filling it, they'll send a POST request with the data from inside.

To handle both of these scenarios, we'll need to write two functions for the same page, with headers that look like so:

```python3
...
@app.route("/survey.html")
def survey():
    return render_template("survey.html")

@app.route("/survey.html", methods=["POST"])
def survey_post():
    # We'll fill in this code next...
...
```

Now, Flask will run the `survey()` function when someone comes to `/survey.html` on a GET request, and `survey_post()` on a POST request.

Now, how do we access the data in the form?

# Accessing Input

To access the data the user sent in their POST request, we'll need to import another Flask tool: `request`. With `request` we'll be able to access the inputs of any form sent to us.

With the above form in mind, we can write code to copy each field into a variable for us to use:

```python3
from flask import render_template, request, Flask
...
@app.route("/survey.html", methods=["POST"])
def survey_post():
    first = request.form['fname']
    last = request.form['lname']
    age = request.form['age']
    
    # To be continued...
...
```

Now we can use the values of their names in our code! But how would we send them back something based on what they wrote?

# Replying with Output

Let's say that after someone submits their survey, we bring them to a thank you page that uses the name they provided.

We'll have to modify our form to send the user to the thank you page (where we'll also do our POST request processing):

```html
              VVVVVVVV
<form action="thankyou.html" method="post">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
  <label for="age">Age:</label><br>
  <input type="text" id="age" name="age">
</form> 
```

And now, we'll handle the POST request in our `thankyou.html` endpoint:

```python3
...
@app.route("/thankyou.html", methods=["POST"])
def survey_post():
    first = request.form['fname']
    last = request.form['lname']
    age = request.form['age']
    
    # More to come...
...
```

Now, the problem is that we want to give them a customized thank you message with their name in it. Thankfully, Flask lets you use templates in order to customize certain parts of a page with variables!

Imagine we had the following HTML for our thank you page:

```html
<html>
  <head>...</head>
  <body>
    <h1>Thank you, name here!</h1>
  </body>
</html>
```

We'd like to replace that with the value of the `first` variable in our Python code. Let's then add this to the HTML in the place of "name here":

```html
<html>
  <head>...</head>
  <body>
    <h1>Thank you, {{ name }}!</h1>
  </body>
</html>
```

Now, to complete the implementation, we need to tell our `render_template` call to include `fname` as our `name` for the template:

```python3
...
@app.route("/thankyou.html", methods=["POST"])
def survey_post():
    first = request.form['fname']
    last = request.form['lname']
    age = request.form['age']
    
    return render_template("thankyou.html", name=fname)
...
```

Ta-da! Now our Flask server will return a customized message, and you understand the steps of how to work with input and output on Flask!
