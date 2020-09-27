
# Intro to Vanilla JavaScript
## Overview

### What You'll Learn
In this section, you'll learn
1. Basic JavaScript (syntax and more)
2. User input and logic in JS
3. Building on pre-existing HTML frameworks and using elements such as buttons to trigger JavaScript code

### Prerequisites
Before starting this section, you should have an understanding of
1. Basic knowledge of [HTML](Link) (**link to our HTML/CSS tutorial here!**)
2. *Optional:* A small amount of experience with at least one previous programming language

### Introduction
At the end of this section, you should be able to add interactivity to your website via JS!

---

## The Very Basics of JavaScript: Introduction, Hello World and Variables

### Editing with Codepen

For this tutorial we will be using a basic framework of HTML, some CSS and JavaScript to run and test our code. The website [Codepen](https://www.codepen.io/) perfectly fits this description.

Navigate to the website and click the **Start Coding** button. You will be redirected to an interface with HTML, CSS and JavaScript panels, a console, and a segment of the screen that shows the front end result of your code <!-- last part needs to be reworded idk how to describe it !-->. For now we will focus on the console and JS panel.

In the JavaScript panel, type ```console.log("Hello World")```. Make note that JavaScript syntax is similar to Python in that semicolons are optional in most situations. The above statement will run with or without one. If you open the console now, you will see it has printed ```"Hello World"```.

Another thing you can do with JavaScript is create browser alerts. Type ```alert("[Your message here]")``` in the JavaScript panel and you will get a popup from the website with the message.

Example:
```
alert("HEY!")
```
Returns
<br />
![--](img/Alert.PNG)

### Comments

Comment syntax in JavaScript is the exact same as in C, Java and some other languages. Single line comments are made with ```//Your comment here```, and multi-line comments are made with ```/* Your longer comment here */```.

### Variables

JavaScript's variable syntax is similar to Python and C's- while you don't have to declare a variable's exact type, you still have to use a keyword before making a variable. That keyword is ```var```. You can create a variable without assigning it to a value by ***initializing*** it with ```var myValue``` (no need for a semicolon, but you can still use one if you like).

The next step is to ***assign*** the variable to a type. You do this with ```myValue = type```, where type is the value of the variable. Note that you can initialize and assign a variable in one line with ```var myValue = type```.

JavaScript has seven different data types you can assign your variables to: ```number```,  ```string```,  ```boolean```,  ```null```,  ```undefined```,  ```symbol``` and  ```object```. All of these can be created by setting your variable name equal to the type you want. For some types, it is as easy as setting your variable equal to the type itself (e.g. ```var myValue = null```). For others, however, you will need to follow JavaScript's syntax that allows you to signify that your variable is a specific type. Thankfully, if you have experience with other programming languages, you probably know the deal- a string is created when you use ```" "``` (example ```var myString = "A string"```), and a number is created by using a numerical value (example ```var myNum = 2```).

Variables can also be ***reassigned***. Try creating a variable ```a``` and setting it equal to a value on one line, then setting it to a different value below it.

For example:
```javascript
var a = "Hi"
var a = 32
console.log(a)
```
Prints
```javascript
32
```

*Note:* JavaScript, like Python, is an ***interpreted*** language. Unlike ***compiled*** languages such as C, JavaScript code is executed line by line and does not need to be compiled before it is run. This has its advantages and disadvantages, one advantage being portability, and disadvantage being that compiled languages will always be faster.

### Functions

One more thing- functions! Like in other languages, we can divide our code up into reusable parts. The syntax for a function in JS is as follows:
```javascript
function myFunction() {
    // code goes here...
    // ...
}
```
You invoke your function in code outside your function's scope by calling with (e.g. ```myFunction()```). Like in many other languages, functions are super important for creating clean, effective programs.

*Exercise: Try writing a function that prints a string and call it!*

## Loops, Conditionals and Logic

Now that we have some understanding of variables, lets talk about loops, conditional statements and logic in JavaScript.

### Loops

#### `while` Loop
First in loops, the ***while loop***. A while loop will run indefinitely based on its specified condition until that condition becomes false. Here's an example that both shows the syntax of the while loop and how it works:

```javascript
var a = 5

while (a == 5){
    console.log("spam")
}
```
This will print the string ```spam``` infinitely because `a` is always equal to 5 (you can try this in Codepen but you'll probably have to reload the page after).

Like in many other languages, we use ```==``` instead of ```=``` in the loop above. ```=``` is for ***assigning***, while ```==``` is for ***comparing*** (more on this later).

We can manually break out of the while loop by slightly adjusting our code:
```javascript
var a = 5

while (a == 5){
    console.log("spam")
    a = 6
}
```
This prints ```"spam"``` only once.

By reassigning the variable ```a``` to 6, the condition ```a == 5``` in the while loop is no longer true. This is just an example -- there are much clearer ways to execute this idea, some of which are referenced below.

#### `for` Loop

The next loop is called the ***for loop***. This is essentially a more specific version of a while loop that can be customized more easily if you want to execute something that isn't indefinite. The syntax for a for loop in JavaScript is as follows:
```javascript
for([initialization]; [condition]; [final expression]){
    [code here]
}
```
If you've programmed in a language other than Python, you probably know the drill. The ***initialization*** part of the for loop is executed once, the ***condition*** statement is evaluated at the beginning of each loop iteration, and the ***final expression*** is executed at the end of each loop iteration.

*Exercise: Try creating a for loop that prints all the numbers from 45 to 60!*

Javascript also has other variations of the ***for*** and ***while*** loops, such as ```for/in```,
```for/of```, and ```do/while```. Here is the syntax for all of those statements:

```javascript
for ([variable] in [object]){
    [code]
}

for ([variable] of [object]){
    [code]
}

do {
    [code]
}
while ([condition])
```

### Conditionals

First off, let's discuss the ```if``` statement in JavaScript. The syntax is pretty similar to that of C's:
```javascript
if (condition)
{
    [statement]
}
```
Like an if statement in many other languages, the statement will only execute if the condition is true.

JavaScript also has ```else``` and ```else if``` statements, with similar syntax to the ```if``` statement. Here's some simple pseudo code that represents something you can use all three statements for:
```javascript
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
```

### Logic & Comparative Operators

Let's talk about the type ```boolean``` that we referenced earlier. Booleans can either be ```true``` or ```false```, and are often used to "activate" and "deactivate" functions. Look back to the ```while``` loop example we discussed where if variable ```a``` was reassigned to a different number, it would break out of the loop. We can do this in a more clear cut way using booleans like so:
```javascript
while(true)
{
    [code]
    if([condition])
    {
        return false
    }
}
```
Using booleans and an if statement, we can make the loop run indefinitely until the condition we want is met.

Like in many other languages, ```==```, known as an equality operator, is used to compare one object to another, and will return ```true``` if the two objects are equal. JavaScript has something called ***type coercion***, meaning that it if two objects being compared are different types, it will attempt to convert one to the other type. This means that something like ```1 == "1"``` will actually return ```true```.

JavaScript also has something called a ***strict equality*** operator (```===```). It is the counterpart to the regular equality operator ```==``` we discussed above. Unlike the equality operator, ```===``` does ***not*** use type coercion, meaning that ```1 === "1"``` will return ```false```.

Likewise, JavaScript also has the ***strict inequality*** operator (```!==```), a counterpart to the regular inequality operator (```!```). The same principles of coercion referenced above apply, except reversed. With the regular inequality operator, ```1 != "1"``` returns ```false```, whereas if a strict inequality operator were used in that situation it would return ```true```.

For the remaining comparative statements we have ```||``` (or), ```&&``` (and), ```<``` and ```>``` (less than and greater than), as well as ```<=``` and ```>=``` (less than or equal to, greater than or equal to). Note that coercion applies in ```>=``` and ```<=```.

*Exercise: create a short program using a while loop that keeps asking the user for input until your favorite food is entered.* *Hint: You can receive user input in JavaScript with prompt("Your text here")*

Now that we have a rough understanding of JavaScript and its syntax, lets move on to applying it in an HTML context.

## The Nitty Gritty: JavaScript Meets HTML

While JavaScript can be used on its own as a programming language, its main use is the interactivity it can provide when applied to a simple HTML website. For this section, Codepen will still prove useful thanks to it having HTML & CSS panels as well as a panel that displays the results of your code on a sample webpage.

### Triggering JavaScript Code in HTML

An interesting thing you can do with JavaScript is choose when to activate a section of code inside your HTML layout.

Lets say we want an alert to be sent to the user if they click a button on your webpage. We will first create a super simple webpage layout in the HTML panel like so:
```html
<html>
    <body>
        <button>I'm a button!</button>
    </body>
</html>
```
Now that we have the HTML setup, let's discuss an integral part to implementing your JavaScript
code in HTML- ```<script>```. When you use this (followed by ```</script>``` in the location where you want it to end) in your HTML code, you're basically creating a space where you can freely add JavaScript code. Lets modify our HTML framework like so:
```html
<html>
    <body>
        <button>I'm a button!</button>
    </body>
    <script>
    </script>
</html>
```
We now have an area where we can write our JS code. The next step is making the connection between our HTML element and the JS code we will put in ```<script>```. This is where JavaScript's ```document.querySelector()``` function comes in. This will more often than not be the connecting piece between the JavaScript code you put in your ```<script>``` and the web layout you created in HTML. The parameter of the function is where you input the desired HTML element that you want to be affected. For example, if I added a small paragraph tag ```<p>hi</p>``` in our existing HTML framework, I would input the following code in my ```<script>``` if I wanted JavaScript code to be executed on ```<p>```:
```html
<script>
document.querySelector('p') = [code]
</script>
```
With that being said, lets finally put everything together and modify our code to send an alert when a button is clicked. The resulting HTML layout would look something like this:
```html
<html>
  <body>
    <button>I'm a button!</button>
  </body>
  <script>
    document.querySelector('button').onclick = function() {
    alert('Ouch!');
}
  </script>
</html>
```
In our script, we added ```onclick``` to the end of our query selector, and then defined it to a new function in which we could add our alert. When the button is clicked, the function is executed.

### Validating Form Input with JavaScript

One common usage of JavaScript is validating user input. Here, we'll show you how to work with `<form>` elements with JavaScript.

First we'll start with a basic HTML framework as before, but this time create a function ```validateForm()``` in our ```<script>``` area. The basic layout should look something like this:
```html
<html>
    <head>
        <script>
            function validateForm() {
                //code here
            }
        </script>
    </head>
</html>
```
The next step is to create our HTML form. We can do this by adding a ```<body>``` section under our ```<head>``` and add it in there. Here's what that will look like:
```html
<html>
    <head>
        <script>
            function validateForm() {
                //code here
            }
        </script>
    </head>
    <body>
        <form name="form" onsubmit = "return validateForm()" method = "post">
            Name: <input type="text" name="fname">
            <input type="submit" value="Submit">
        </form>
    </body>
</html>
```
This is a lot of new information to process, so lets briefly mention how ```<form>``` works. The first thing we do is basically assign a name to our form ```form name="form"``` like we would a variable. The ```onsubmit``` element is then set to return the JS function we added, and ```method = "post"``` is used so we don't get a bad path error.

The next thing we do is create an ```<input>``` element in our form. This is the most important part of our form because it is what allows us to allow for user input to be entered in it. ```input type = "text"``` defines a single line text input field for our user to enter information in, and ```input type="submit"``` creates a submit button.

With this code alone, you will see a form where you can type your name in and submit it. However, it has zero control over user input, meaning a user can enter anything they want in it, even an empty field. JavaScript is how we counter this. What we need to do is add code to ```validateForm()``` so it will not take any input that isn't a string.

Now for our first addition to our script (keep the rest of the outside HTML code the same!):
```html
<script>
            function validateForm() {
                var x = document.forms["myForm"]["fname"].value
            }
</script>
```
What this does is create a variable ```x``` that is initialized to the output of whatever the user inputs in our form. With this we can easily compare x to different data types and eliminate the ones we don't like. For this, an ```if``` statement will work perfectly.
```html
<script>
            function validateForm() {
                var x = document.forms["myForm"]["fname"].value
                if (x == ""){
                    alert("Name must be filled out")
                    return false
                }
                else{
                    alert("Thanks for your submission!")
                }
            }
</script>
```
Now if the user inputs an empty or null value, our form will not accept it. However, there is still a problem. While the user is able to input strings, they can also input numbers, which is what we don't want. While the function ```isNumeric()``` would be incredibly useful in this situation, that is from jQuery, and we are only using pure JavaScript, which means we have to think creatively.

The first thing we need to do is define our own ```isNumeric()``` function. We can do this above our ```validateForm()```.
```javascript
function isNumeric(n) {
    return //code here
}
```
Here we add the parameter ```n``` in our new function so that our user's input can be tested in it. The next thing we need to do is utilize the functions vanilla JavaScript has to return a correct value. One very useful tool we can use in this situation is JavaScript's ```isNan()```. This function determines whether a value is not a number or not. If the parameter inputted into it is not a number, it will return true, and false if it is one. So, all we have to do is simply reverse its input!
```javascript
function isNumeric(n) {
    return !isNan(n)
}
```
Now ```n``` will be returned only if it is a valid number. We can account for floats by putting ```parseFloat(n)``` in the parameter of ```isNan()``` instead of just ```n```, and to account for infinite numbers, we can throw an ```&& isFinite(n)``` on the end of the return statement for good measure. The final product should look something like this:
```javascript
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
```
Now, lets modify our ```validateForm()``` with our new function.
```javascript
function validateForm() {
    var x = document.forms["myForm"]["fname"].value
    if (x == ""){
        alert("Name must be filled out")
        return false
    }
    else if (isNumeric(x)) {
        alert("Pleas enter a valid name")
        return false
    }
    else{
        alert("Thanks for your submission!")
    }
}
```
This should cover almost all of our bases in terms of user input. The final HTML layout will look something like this:
```html
<html>
<head>
<script>
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
function validateForm() {
      var x = document.forms["myForm"]["fname"].value
  if (x == "") {
    alert("Name must be filled out")
    return false
  }
  else if (isNumeric(x)){
    alert("Please enter a valid name")
    return false
  }
  else{
    alert("Thanks for your submission!")
  }
}
</script>
</head>
<body>

<form name="myForm" onsubmit="return validateForm()"  method="post">
  Name: <input type="text" name="fname">
  <input type="submit" value="Submit">
</form>

</body>
</html>
```
Try it out and make sure it works as intended!

## Challenge: Validating Form Input

For our last part of the tutorial, we'll provide you with a simple form that takes in a few pieces of data with HTML and task you with validating the user input with JavaScript.

Here's the HTML -- copy it over to codepen and let's see what you can do!
```html
<html>
    <head>
        <script>
            // Code here!
        </script>
    </head>
    <body>
        <h1>Enter your ~personal information~ below:</h1>
        <form name="form" onsubmit = "you probably want to call a function here!" method = "post">
            Name: <input type="text" name="fname">
            Age:  <input type="text" name="age">
            Phone Number: <input type="text" name="phone">
            <input type="submit" value="Submit">
        </form>
    </body>
</html>
```

*Note:* The JavaScript `substring()` function may be helpful for phone numbers!
