# Learning the Basic React Concepts

# Overview

---

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

Welcome to the React workshop! In this section, we'll be going over the basics of React and getting started on creating a to-do list. There is a lot to learn with React, and unfortunately, we don't have enough time to go over everything it has to offer in this workshop. Thankfully, though, ReactJS has [phenomenal documentation](https://reactjs.org/docs/getting-started.html) that I will be referencing multiple times throughout this workshop. Feel free to take a look at the documentation in case there is anything you misunderstand or want to know about in more precise detail. I will also be putting links in related sections that might be helpful to you if you'd like to learn more about a topic.

You can see the completed version of the project we will be creating [here](https://codesandbox.io/s/hackbu-workshop-todo-completed-sp67f?file=/src/InputField.js).

## Our Environment

In order to make it easier for us to dive right into React, we will be using [codesandbox.io](http://codesandbox.io) as our in-browser editor, which already has React installed and is ready for us to use! In addition, in order to save time, you will be provided with minimal boilerplate code and stylesheets that you can use. 

## The Virtual DOM

If you've tried to create websites  before, you would know that building websites dynamically with JavaScript can be both messy and complicated. You are required to constantly manipulate the DOM ([Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model)) directly in order to get any live updates. React solves this problem by implementing a [Virtual DOM](https://reactjs.org/docs/faq-internals.html#:~:text=The%20virtual%20DOM%20(VDOM)%20is,This%20process%20is%20called%20reconciliation.). 

Explained concisely, rather than manipulating the DOM directly to update the screen, React uses **JSX** to allow developers to write HTML-like code within their React components, which makes changes to the Virtual DOM, which controls the actual DOM. So in short, you do not have to worry about the DOM anymore, you just need to know how to use **JSX.**

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

On line `4` we have are creating a function, `App()`, that returns...HTML??

Well, not HTML, but JSX. This is something really awesome about React - our HTML is within our JavaScript code, making it far easier to achieve "reactivity".

Inside the return statement, you should be able to understand what is going on. The only part here that is different from normal HTML is that rather than using `class` to assign our divs a class name, we are using `className`. This is due to a fairly simple reason, actually. `class` is already a keyword in JavaScript, so React just changed HTML's classes to be created using `className` in JSX. This is one of the subtle differences between HTML and JSX, but not too difficult to switch to!

Our entire `App` function is called a Component in React. Components can be nested within each other, rendered conditionally, and communicate with each other, and are what we use to build out large web applications while keeping code organization simple!

## Creating Our InputField Components

Continuing from our boilerplate code, create a new file called `InputField.js`. 

Like our previous file, let's add React to this file by adding this line at the top: `import React from "react";`. Now create another file called `InputField.css` (YOU CAN DOWNLOAD THE WORKSHOPS CSS FILE HERE), which you can use to style your to-be created components and on line `2`, write `import "./InputField.css";`. In summary, you should have the following code:

```jsx
import React from "react";
import "./InputField.css";
```

Now, let's create the component itself, basing it off of our `App` component:

```jsx
export default function InputField() {
	return (
		<div>
			<div className="input-container">
				<input placeholder="Add a task" />
				<button>Add</button>
			</div>
		</div>
	)
}
```

This part should be somewhat familiar to you. We have a function, or **Component,** called `InputField`, that returns a few divs containing an input tag and an add button. This component will allow the user to type their new tasks and add them to their lists. 

Now, if you check out the live preview on the lefthand side of your sandbox, you'll notice that nothing has changed! That's because we only created the component, but we aren't using it anywhere.

To fix this, let's go back to our `App` component and use `InputField`. 

To begin using it, we need to import our InputField component and then call it in our JSX.

```jsx
import "./styles.css";
import InputField from "./InputField";

...
...
		<div className="container">
			<InputField />
		</div>
```

Now when you check out the live preview, you should see our newly created input field!

You may be noticing here that we used `InputField` as like an HTML element. This is how we nest components within each other. `index.js` has our `App` component nested inside it, which has our `InputField` component nested inside that. As we continue with our project, we will see that nesting our components also allows information to be passed down and reusability to be very easy.

## Creating Our To-Do Item

Let's make another component, our to-do items. Create two files: `ToDoItem.js` and `ToDoItem.css` (YOU CAN FIND THE CSS FILE HERE).

Your component should look like this:

```jsx
import React from "react";
import "./ToDoItem.css";

export default function ToDoItem() {
  return (
    <div className="item-container">
      <div className="item-content">Wash the dishes</div>
      <div className="delete-button">X</div>
    </div>
  );
}
```

Remember to use our newly created component somewhere in our application! Let's add `ToDoItem` inside of `InputField`:

```jsx
import "./InputField.css";
import ToDoItem from "./ToDoItem";

export default function InputField() {
...
		<button>Add</button>
  </div>
	<ToDoItem />
</div>
...
```

Checking out the preview, you should now have a pretty good idea of what we're going for. The user adds their task in the input field, presses the Add button, and then we will create a new to-do item that can be deleted by pressing the X button. The only thing that is left to do is to add all the functionality, which is where the fun part begins. 

## Adding State Hooks

In React, we use state to keep and modify pieces of information within a component. Let's use state inside of our `InputField` component. 

In our `InputField` component, adjust the 1st line to be: `import React, { useState } from "react";`. This allows us to specify to React that we want to use it's state functionality in our component. 

Now we will use state to be able to store and manipulate the current value of the input field. We want to be able to store this piece of data so that we can fill our to-do items with the user-inputted task.

To create a new state hook, type the following inside of our component:

```jsx
...
export default function InputField() {
	const [value, setValue] = useState("");
  return (
...
```

This syntax may seem quite confusing at first, but it's really quite simple. You are creating two new things here: a `value` variable, and a `setValue()` function. We will use `value` to be able to **retrieve** the value anywhere in our component, and will use `setValue()` to **mutate** our `value` variable anywhere in our component. Finally, when we assign these to `useState("")`, we are simply telling React that this is a state hook that should be instantiated to `""` (empty string). 

Now that we have our state created, we can use it to keep track of the current user's input. Let's edit our JSX a bit:

```jsx
<div className="input-container">
        <input placeholder="Add a task" 
							 value={value} 
							 onChange={(e) => setValue(e.target.value)}
				/>
        <button>Add</button>
      </div>
```

Inside out input tag, you can see that we are setting the value equal to our variable `value` so that we always see the most updated state, which can be done by using curley braces rather than the typical quotes you'd find in HTML. The use of curly braces allows us to get out of "HTML-like" mode, and use JavaScript code directly. You might have also noticed the use of `onChange`. `onChange` is a property that React implemented to make it easier to handle events (You can learn more about this [here](https://reactjs.org/docs/handling-events.html)). Then, we use an arrow function to call our `setValue()`, and set it to the input's target value. Now when you type in the input field, we update our `value` state, and can now use it add a new item to our to-do list. 

Let's create another state hook in our `InputField` component. Trying creating a new state hook called `items`, with the mutator `setItems`, which is instantiated to an an empty array, `[]`.

Ideally, it should look like this: `const [items, setItems] = useState([]);`. We will add this new hook to store out to-do items, which will later be mapped out onto their own `ToDoItem` components.

Now let's create our first function in our component, where will add values into our to-do list array. Add the function under our state hooks, but before our return state:

```jsx
...
const [items, setItems] = useState([]);
const addItem = () => {
    if (value.length > 0) {
      setItems((items) => [...items, value]);
      setValue("");
    }
  };
...
```

This function checks the length of our value to ensure it's not empty, and then uses the [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) to merge our new value in the existing array, and finally, we reset our value. See how easy it is to use state to handle events?

 Just add this function into an `onClick` event in our button, and we should have the "Add" functionality ready to go! `<button onClick={addItem}>Add</button>`

## Passing Down Data with Props

With our newly created `addItem` function, we are successfully able to add items to our list. The only problem is that this list is not updating in our front-end. What we want to do now is show a new `ToDoItem` whenever an item is added to our list. 

To get started, let's talk about [Props](https://reactjs.org/docs/components-and-props.html). `props` are values that are passed into child components 

As you may recall, in our `ToDoItem`, we currently have the following div: `<div className="item-content">Wash the dishes</div>`. This works really well as a placeholder item, but what we really want is to have our tasks be dynamic. Let's do this by passing down "Eat a hearty breakfast" as a `prop`.

Go back to `InputField.js` where your `<ToDoItem />` is called, and alter to like so: `<ToDoItem task="Eat a hearty breakfast" />`. We know created a new `prop`erty, called `task`, which the value "Eay a hearty breakfast". Now go into `ToDoItem.js`, and make the following changes:

```jsx
...
export default function ToDoItem(props) {
return (
    <div className="item-container">
      <div className="item-content">{props.task}</div>
...
```

As you can see, we add `props` as a parameter where our `ToDoItem` component is created, and then use the curley braces again to specify that we want to show the property of task, which we passed in above. If you check out the preview now, you should be able to see that our "Wash the dishes" task changed to "Eat a hearty breakfast". 

But this is still somewhat static. The only difference here is that we are passing down our static value from the parent component. What we *really* want to do is render out our list, passing down the values as props. Let's do that!

In `InputField.js`, remove our `<ToDoItem />` and replace it with the following:

```jsx
return (
    <div>
      <div className="input-container">
        <input
          placeholder="Add a task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>
      {items.map((task, index) => {
        return (
          <ToDoItem
            task={task}
            key={index}
            id={index}
          />
        );
      })}
    </div>
  );
```

This scary looking piece of code takes our `items` array, and [maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) our tasks into their own `ToDoItem`, where we pass down the `task`, `key`, and `id`. The `task` is the only really important part here, `key` is to [prevent a warning that React gives us](https://reactjs.org/docs/lists-and-keys.html) when rendering out lists, and `id` will be used to complete the last feature: removing an item from our list.  

## Remove Items From Our List

Let's start by adding the `removeItem` function in our `InputField` component:

```jsx
const addItem = () => {
    if (value.length > 0) {
      setItems((items) => [...items, value]);
      setValue("");
    }
  };

  const removeItem = () => {
  };
```

But what should our logic be? We want the user to be able to click on the X button in our `ToDoItem`, which will remove an item from the list. But we aren't in the `ToDoItem` component, we are in the `InputField` component, so how do we tell React to remove an item from a list within a child?

The way we do that is by passing in our `removeItem` function as a prop to our children components. This may be a bit confusing right now, but as we continue with this, it should begin to make more sense. 

```jsx
...
{items.map((task, index) => {
        return (
          <ToDoItem
            task={task}
            key={index}
            id={index}
            removeItem={removeItem}
          />
        );
      })}
...
```

You can see here that we are passing down `removeItem` as a prop, called `removeItem`. Let's handle the function in our `ToDoItem` component:

`<div className="delete-button" onClick={() => props.removeItem(props.id)}>x</div>`.

We added on onClick event handle that called `removeItem` and passes in our current `id`. By passing in the `id`, we can now go back to our `InputField` component, and complete our `removeItem` function.

```jsx
...
const removeItem = (id) => {
    setItems(items.filter((item) => item !== items[id]));
  };
...
```

We use the `id` to [filter through our `items`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) and remove any matching value. 

Try the live preview now. You should be able to add new items to the list as well as remove them by pressing X. 

Look back at your code and see if you can understand most of it. You may be able to notice that we really didn't have to write *that* much to get it working. We just needed to spend some time setting up our components, but we have very minimal actual JavaScript code. The other great thing is that we have our functionality organized inside of components in a clear way. This makes it a lot easier for you to add more features and further complicate the program. In fact, why don't you try adding some more features? To-do lists are great projects because they start out so simple but can become complex if you want it to be. So I highly encourage you to try adding new features, components, or messing around with the [official documentation](https://reactjs.org/docs/getting-started.html) and learn about the concepts we glanced over in more detail.
