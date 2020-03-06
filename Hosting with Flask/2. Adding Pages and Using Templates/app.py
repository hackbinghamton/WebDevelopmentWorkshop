#!/usr/bin/env python3
from flask import Flask, render_template    # Import the Flask class from flask as well as the render_template method to get HTML


app = Flask(__name__)                       # Create an instance of Flask


@app.route("/")                             # When the user goes to ourdomain.com/
def index():                                #                                    ^
    return render_template("index.html")    # Return the HTML from templates/index.html


@app.route("/programming")
def programming():
    return render_template("programming.html")


@app.route("/music")
def music():
    return render_template("music.html")


if __name__ == "__main__":                  # Main method...
    app.run(debug=True)                     # Run the Flask app
