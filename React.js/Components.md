# Creating Our Components

# Creating Our InputField Component

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

# Creating Our To-Do Item Components

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
