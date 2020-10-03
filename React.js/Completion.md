# Project Completion, and Beyond

# Remove Items From Our List

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

But what should our logic be? We want the user to be able to click on the X button in our `ToDoItem` to remove an item from the list. But we aren't in the `ToDoItem` component, we are in the `InputField` component, so how do we tell React to remove an item from a list within a child?

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

We added on onClick event handler that called `removeItem` and passes in our current `id`. By passing in the `id`, we can now go back to our `InputField` component, and complete our `removeItem` function.

```jsx
...
const removeItem = (id) => {
    setItems(items.filter((item) => item !== items[id]));
  };
...
```

We use the `id` to [filter through our `items`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) and remove any matching value. 

Try the live preview now. You should be able to add new items to the list as well as remove them by pressing X. 

Look back at your code and see if you can understand most of it. You may be able to notice that we really didn't have to write *that* much to get it working. We just needed to spend some time setting up our components, but we have very minimal actual JavaScript code. The other great thing is that we have our functionality organized inside of components in a clear way, making it a lot easier to scale-up features and further build out the application. 

In fact, why don't you try adding some more features? To-do lists are great projects because they start out so simple but can become complex if you want it to be (have you noticed how many to-do apps are out there, yet there isn't one that is considered the best?). So I highly encourage you to try adding new features, components, or mess around with the [official documentation](https://reactjs.org/docs/getting-started.html) and learn about the concepts we glanced over in more detail.
