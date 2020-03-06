#!/usr/bin/env python3
from flask import Flask, request, render_template    # Import the Flask class from flask as well as the render_template method to get HTML
import random

app = Flask(__name__)                       # Create an instance of Flask

ZALGO_CHARS = [esc for esc in range(774, 879)]

@app.route("/")                             # When the user goes to ourdomain.com/
def home():                                 #                                    ^
    return render_template("index.html")    # Return the HTML from templates/index.html


@app.route("/", methods=["POST"])
def home_post():
    text = list(request.form['text'])
    level = int(request.form['level'])
    for i in range(level * len(text)):
        text.insert(random.randint(0, len(text)), chr(random.choice(ZALGO_CHARS)))
    return render_template("index_post.html", spaced="".join(c for c in text))


if __name__ == "__main__":                  # Main method...
    app.run(debug=True)                     # Run the Flask app

