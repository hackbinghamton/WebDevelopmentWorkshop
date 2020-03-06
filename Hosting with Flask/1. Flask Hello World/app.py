#!/usr/bin/env python3
from flask import Flask             # Import the Flask class from flask

app = Flask(__name__)               # Create an instance of Flask


@app.route("/")                     # When the user goes to ourdomain.com/
def home():                         #                                    ^
    return "<h1>HELLO WORLD</h1>"   # Return the HTML "hello world"


if __name__ == "__main__":          # Main method...
    app.run(debug=True)             # Run the Flask app
