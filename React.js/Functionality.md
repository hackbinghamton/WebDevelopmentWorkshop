# Adding Functionality

# Adding State Hooks

In React, we use state to keep and modify pieces of information within a component. Let's use state inside of our `InputField` component. 

In our `InputField` component, adjust the 1st line to be: `import React, { useState } from "react";`. This allows us to specify to React that we want to use its state functionality in our component. 

Now we will use state to store and manipulate the current value of the input field. We want to be able to store this piece of data so that we can fill our to-do items with the user-inputted task.

To create a new state hook, type the following inside of our component:

```jsx
...
export default function InputField() {
	const [value, setValue] = useState("");
  return (
...
```

This syntax may seem quite confusing at first, but it's really quite simple. You are creating two new things here: a `value` variable and a `setValue()` function. We will use `value` to **retrieve** (think getter) the value anywhere in our component, and will use `setValue()` to **mutate** (think setter) our `value` variable anywhere in our component. Finally, when we assign the value to `useState("")`, we are simply telling React that this is a state hook that should be instantiated to `""` (an empty string). 

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

Inside our input tag, you can see that we are setting the value equal to our variable `value` so that we always see the most updated state, which can be done by using curly braces rather than the typical quotes you'd find in HTML. The use of curly braces allows us to get out of "HTML-like" mode, and use JavaScript code directly. You might have also noticed the use of `onChange`. `onChange` is a property that React implemented to make it easier to handle events (You can learn more about this [here](https://reactjs.org/docs/handling-events.html)). Then, we use an [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) to call our `setValue()`, and set it to the input's target value. Now when you type in the input field, we update our `value` state, which will be used to add a new item to our to-do list. 

Let's create another state hook in our `InputField` component. Try creating a new state hook called `items`, with the mutator `setItems`, instantiated to an an empty array, `[]`.

If all when well, you'll get something that looks like this: `const [items, setItems] = useState([]);`. We will add this new hook to store out to-do items in an array, which will later be mapped out onto their own `ToDoItem` components.

Now let's create our first function in our component, which will add values into our to-do list array. Add the function under our state hooks, but before our return state:

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

This function checks the length of our value to ensure it's not empty, and then uses the [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) (I know that can look pretty weird, but take a look at that link and I'm confident you'll have a better understanding by the end of the article) to merge our new value in the existing array, and finally, we reset our value. See how much easier it is to allow state to handle changes to events rather than needing to access and manipulate the DOM directy with vanilla JS?

Just add this function into an `onClick` event in our button, and we should have the "Add" functionality ready to go! `<button onClick={addItem}>Add</button>`

# Passing Down Data with Props

With our newly created `addItem` function, we are successfully able to add items to our list. The only problem is that this list is not updating in our front-end. What we want to do now is show a new `ToDoItem` whenever an item is added to our list. 

To get started, let's talk about [Props](https://reactjs.org/docs/components-and-props.html). `props` (short for properties) are values that are passed into child components 

As you may recall, in our `ToDoItem`, we currently have the following div: `<div className="item-content">Wash the dishes</div>`. This works really well as a placeholder item, but what we really want is to have our tasks be dynamic. Let's do this by passing down "Eat a hearty breakfast" as a `prop` (or property).

Go back to `InputField.js` where your `<ToDoItem />` is called, and alter to like so: `<ToDoItem task="Eat a hearty breakfast" />`. We now created a new `prop`erty, called `task`, with the value "Eat a hearty breakfast". Now go into `ToDoItem.js`, and make the following changes:

```jsx
...
export default function ToDoItem(props) {
return (
    <div className="item-container">
      <div className="item-content">{props.task}</div>
...
```

As you can see, we add `props` as a parameter where our `ToDoItem` component is created to gain access to the usage, and then we use the curly braces again to specify that we want to show the property of task, which we passed in above. If you check out the preview now, you should be able to see that our "Wash the dishes" task changed to "Eat a hearty breakfast". Properties are passing in as an object, so doing `props.task` simply accesses the specific property we want. If we passing in two properties, we just need to access them by their name assigned from its parent. 

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
