# Learning the Basic React Concepts

# Overview

## What You'll Learn

In this section, you'll learn:

1. Functional Components
2. React State
3. Passing Props

## Prerequisites

Before starting this section, you should have an understanding of:

1. Basic JavaScript (ideally familiar with ES6)
2. HTML
3. CSS

## Introduction

In this section, we'll be going over the basics of React and getting started on creating a to-do list.

There is a lot to learn with React, and unfortunately, we don't have enough time to go over everything it has to offer in this workshop. Thankfully, though, ReactJS has [phenomenal documentation](https://reactjs.org/docs/getting-started.html) that I will be referencing multiple times throughout this workshop. Feel free to take a look at the documentation in case there is anything you misunderstand or want to know about in more precise detail. I will also be putting links in related sections that might be helpful to you if you'd like to learn more about a topic.

You can see the completed version of the project we will be creating [here](https://codesandbox.io/s/hackbu-workshop-todo-completed-sp67f?file=/src/App.js).

## Our Environment

In order to make it easier for us to dive right into React, we will be using [codesandbox.io](http://codesandbox.io) as our in-browser editor, which already has React installed and is ready for us to use! In addition, in order to save time, you will be provided with minimal boilerplate code and stylesheets that you can use. 

## The Virtual DOM

If you've tried to create websites  before, you would know that building websites dynamically with JavaScript can be both messy and complicated. You are required to constantly manipulate the DOM ([Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model)) directly in order to get any live updates. React solves this problem by implementing a [Virtual DOM](https://reactjs.org/docs/faq-internals.html#:~:text=The%20virtual%20DOM%20(VDOM)%20is,This%20process%20is%20called%20reconciliation.). 

In other words, rather than manipulating the DOM directly to update the screen, React uses **JSX** to allow developers to write HTML-like code within their React components, which makes changes to the Virtual DOM, which controls the actual DOM.

**In short, you do not have to worry about the DOM anymore**, you just need to know how to use **JSX.**

## JSX

Let's start with some boilerplate code [here](https://codesandbox.io/s/quizzical-meadow-lseey?file=/src/App.js). You will be defaulted to the file `App.js`, where you should be able to see a live preview on the right and the following code on the left:

```jsx
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="navbar-title">HackBU - To-do List</div>
      </div>
      <div className="container"></div>
    </div>
  );
}
```

### So What's Going On Here?

On lines `1` and `2`, we are simply importing React and importing our stylesheet.

On line `4` we are creating a function, `App()`, that returns... HTML?

Well, not HTML, but JSX. This is something really awesome about React - our HTML is within our JavaScript code, making it far easier to achieve "reactivity".

Inside the `return` statement, you should be able to understand what is going on. The only part here that is different from normal HTML is that rather than using `class` to assign our divs a class name, we are using `className`. This is due to a fairly simple reason, actually. `class` is already a keyword in JavaScript, so React just changed HTML's classes to be created using `className` in JSX. This is one of the subtle differences between HTML and JSX, but not too difficult to switch to!

Our entire `App` function is called a Component in React. Components can be nested within each other, rendered conditionally, and communicate with each other, and are what we use to build out large web applications while keeping code organization simple!
