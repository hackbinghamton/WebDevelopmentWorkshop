
# Intro to Vanilla JavaScript
## Overview

### What You'll Learn
In this section, you'll learn
1. Basic JavaScript (syntax and more)
2. User input and logic
3. Building on pre-existing HTML frameworks and using elements such as buttons to trigger JavaScript code

### Prerequisites
Before starting this section, you should have an understanding of
1. Basic knowledge of [HTML and CSS](Link) (link to our HTML/CSS tutorial here!)<!-- nav to html css tut !-->
2. A small amount of experience with at least one previous programming language

### Goal
At the end of this section, you should be able to add interactivity to your website via JS!

### The Very Basics of JavaScript: Introduction, Hello World and Variables
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

Lets also discuss comment syntax. Comment syntax in JavaScript is the exact same as in C, Java and some other languages. Single line comments are made with ```//Your comment here```, and multi-line comments are made with ```/* Your longer comment here */```.

Finally, lets talk about **variable** syntax. JavaScript's variable syntax is kind of like a combination of Python and C's- while you don't have to declare a variable's exact type, you still have to use some prerequisite keyword before making a variable. That keyword is ```var```. You can create a variable without assigning it to a value by ***initializing*** it with ```var myValue``` (remember, there is no need for a semicolon but you can still use one if you like). The next step is to ***assign*** the variable to a type. You do this with ```myValue = [type]```, where type is the value of the variable. It is important to note, however, that you can initialize and assign a variable in one line with ```var myValue = [type]```.

JavaScript has seven different data types you can assign your variables to: ```number```,  ```string```,  ```boolean```,  ```null```,  ```undefined```,  ```symbol``` and  ```object```. All of these can be created by setting your variable name equal to the type you want. For some types, it is as easy as setting your variable equal to the type itself (one example is ```var myValue = null```). For others, however, you will need to follow JavaScript's syntax that allows you to signify that your variable is a specific type. Thankfully, this is relatively simple, and if you have experience with other programming languages, you probably know the deal- a string is created when you use ```" "``` (example ```var myString = "A string"```), and a number is created by using a numerical value (example ```var myNum = 2```). Variables can also be ***reassigned***. Try creating a variable ```a``` and setting it equal to a value on one line, then setting it to a different value below it.

For example:
```
var a = "Hi"
var a = 32
console.log(a)
```
Prints
```
32
```

This is also a good time to note that JavaScript, like Python, is an ***interpreted*** language. Unlike ***compiled*** languages such as C, JavaScript code is executed line by line and does not need to be compiled before it is ran. This has its advantages and disadvantages, one advantage being portability and disadvantage being that compiled languages will always be faster.

### Loops, Conditionals and Logic

Now that we have some understanding of variables, lets talk about loops, conditional statements and logic in JavaScript.

#### Loops
First in loops, the ***while loop***. A while loop will run indefinitely based on its specified condition until that condition becomes false. Here's an example that both shows the syntax of the while loop and how it works:

```
var a = 5

while (a == 5){
    console.log("spam")
}
```
This will print the string ```spam``` indefinitely because in this code, a is always equal to 5 (you can try this in Codepen but you'll probably have to reload the page after).

Like in many other languages, we use ```==``` instead of ```=``` in the loop above. ```=``` is for ***assigning***, while ```==``` is for ***comparing***.

We can manually break out of the for loop by slightly adjusting our code:
```
var a = 5

while (a == 5){
    console.log("spam")
    a = 6
}
```
This prints ```"spam"``` only once.

By reassigning the variable ```a``` to 6, the condition ```a == 5``` that is specified in the while loop is no longer true. This is a mere example- there are much more clear cut ways to execute this idea, some of which will are referenced below.

The next loop is called the ***for loop***. This is essentially a more specific version of a while loop that can be customized more easily if you want to execute something that isn't indefinite. The syntax for a for loop in JavaScript is as follows:
```
for([initialization]; [condition]; [final expression]){
    [code here]
}
```
If you've programmed in a language other than Python, you probably know the drill. The ***initialization*** part of the for loop is executed once, the ***condition*** statement is evaluated at the beginning of each loop iteration, and the ***final expression*** is executed at the end of each loop iteration.

Javascript also has other variations of the ***for*** and ***while*** loops, such as ```for/in```,
```for/of```, and ```do/while```. Here is the syntax for all of those statements:

```
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

With that being said, lets move on to conditional statements.

#### Conditionals



#### Boolean Logic

### The Nitty Gritty: JavaScript Meets HTML
