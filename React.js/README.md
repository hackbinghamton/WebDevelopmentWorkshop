# HackBU - React
## Overview
For today's project we will be creating a React.JS web application that serves
as a store for HackBU gear. In this workshop we'll be focusing specifically on
using React to create front-end components. In the demo project, I wrote some
server-side PHP code to send and receive data like images, names, etc. from an
externally hosted database. While we won't focus on the back-end of this web
application today, feel free to poke around in the code to see how it works,
if interested.

### What you'll learn
1. Installing React, npm, Node.js, and create-react-app
2. How to build React components
3. How to integrate multiple components on a page
4. How to route pages using React-router
5. How to use the previous steps to build a React single-page-application

### Getting Started
If you're unfamiliar with React.JS, it will be extremely beneficial to first check out
HackBU's React tutorial. It's a comprehensive guide covering everything from
installation and configuration, to creating components, state, routing, deploying,
hosting data, etc.
One of my favorite features of React is its ability to store and set state using props. While
the guide explains this in-depth, unfortunately, today's tutorial will not have time to.

### First Steps
We'll start with installing React if you haven't already.
In your terminal, enter the following command:
        > npm i react
If this command fails, you may still need to install npm, a popular package manager
for JavaScript; you can install npm and Node.js (server-side JavaScript) at nodejs.org.

This project leverages a package called create-react-app.

If you'd like to build this web app from scratch, then you'll need to install create-react-app as demonstrated below.
![alt](http://github.com/LINKTO/CREATEREACTAPP.png)
As taken from the React site:
It sets up your development environment so that you can use the
latest JavaScript features,
provides a nice developer experience,
and optimizes your app for production.
Create React App doesn’t handle backend logic or databases;
it just creates a frontend build pipeline, so you can use it with any backend you want.
Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.

### Building React Components
A React component is essentially a function that returns a UI element. For example, the homepage  
seen below is comprised of a top navigation bar component which has the tag <NavBar>, and a <Post> component, which displays the items on the site. Upon opening the App.js, you'll see that the first few lines are import statements.
Line 1 imports React, and 2 functions which deal with setting state. The next 2 lines import the components
<NavBar> and <Post>.

To demonstrate how a component is built we'll look at components/Post.js. You'll notice that <Post> takes in parameters,
these parameters are retrieved from a PHP function that outputs it as json data. There are a few lines of JavaScript logic,
but there are only 15 lines of JSX which render the <Post> component. If you've written html before, this probably looks familiar.
Lastly, the final line exports the component, which allows us to reuse it in other files. Moving back to our App.js file, we can
see that the file imports Post.



### Final Product
