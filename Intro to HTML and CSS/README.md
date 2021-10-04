# Intro to HTML/CSS
## Overview

### What You'll Learn
In this section, you'll learn
1. Basic HTML
2. CSS Selection
3. Simple CSS
4. Layouts
5. Forms
6. Cool CSS Stuff

### Prerequisites
Before starting this section, you should have an understanding of
1. How to edit files

### Introduction
In this section we will learn how to create a simple website with HTML and CSS.

---
## Editing HTML
***The below sections will be showing you different ways of using HTML -- to follow along, try writing HTML into the HTML editor on [Codepen](https://codepen.io/pen/).***

If you'd prefer, you could create a `.html` file of your choice, and double-click it to open it in your web browser, and refresh to view your changes.

## HTML Basics
Every HTML file should begin with `<html>` and end with `</html>`. This defines the file. You will notice that every time we use a tag, which is the thing with the angle brackets we just saw, we need to end it with the same thing preceded by a "`/`" inside the brackets.

The visible portion of an HTML file is between the body tags. Below is an example of this. Don't worry if you see tags that you do not know yet, we will talk about them soon! Another important thing to know is how to write a comment in HTML, this is also indicated below.

```html
<html>
    <body>
	    <!-- This is a comment!-->
	    <h1> This is a heading </h1>
	    <p> This is a paragraph </p>
    </body>
</html>
```

A **HTML element** is anything between a start tag and an end tag. Elements include headings, paragraphs, breaks, and others. The **heading** (`h1`) element above gives the largest heading size. For smaller headings, try `<h2>`, `<h3>`, `<h6>`. The higher the number, the smaller the heading! The **paragraph** element is self explanatory, you can put a chunk of text here.

Next let's look at how to **link** things in your HTML file with `<a>` elements. Below is an example. The `href` attribute tells us what website we are linking to. The text that follows will be the text to click to get to that website. By the way, an **attribute** in HTML gives more information about an element.

```html
<a href="https://www.reddit.com/r/sploot/comments/fcehvj/a_sploot_worth_its_weight_in_golden/">Click to smile</a>
```

**Images** (`<img>`) are another important type of HTML element. The `src` attribute tells us what the name of the image file is. The `alt` attribute tells us what text to show if we cannot find the specified file or the user has an old browser.

```html
<img src="sourceFileName.jpg" alt="alternate text" width="300" height="400">
```

The last HTML element we will look at in depth is the **div** (`<div>`). This tag lets a specified portion of the HTML file be separate from the rest (*div*ided from it). This element will be useful later when we take a look at CSS.

```html
<div>This element can be styled and modified independent of other elements</div>
```

## CSS Selection (`class` and `id`)
Now that we have a basic website in the works, we want it to look pretty! You probably do not want your website to be just black text on a white background. In HTML, we can use the `style` attribute of elements to specify how we want them displayed. CSS is a clean way to set the style of your HTML elements from outside of the HTML file. All our CSS work should be contained in another file that ends with "`.css`".

Let's pause here to mention a couple more important HTML features. The ```<head>``` element allows us to store data about our HTML code. This might include tags such as ```<title>``` and ```<link>```, which we will talk about soon. The ```<head>``` element is placed between the `<html>` and `<body>` tags. The ```<title>``` tag defines the title of the file and tells the browser what to display for a tab on this page. You can use the ```<link>``` tag to connect your HTML and CSS files. Here is an example of the tags we just mentioned:
```html
<html>
  <head>
	 <title> This is the title! </title>
	 <link rel="stylesheet" href="fileName.css"/>
	</head>
	<body>
			<!-- HTML code goes here-->
	</body>
</html>
```

CSS uses "classes" and "IDs" to control which elements we are altering the style of. **Multiple elements can be in a class, but an ID is unique to one element.** Let's take a look at the difference in how classes and IDs are used.

```css
#myID{
    color:purple;
}
.myClass{
	color:blue;
}
```
Notice how an ID uses `#`, whereas a class uses `.`. The above CSS code would make the font color of the element identified by myID purple, and the font color of every element in myClass blue.

To **assign an ID or class to an element**, you set the `id` or `class` attributes in the element's start tag. See below for an example of this:

```html
<h3 id=myID>This heading has the myID ID.</h3>
<div class=myClass>This div element is in myClass</div>
<p class=myClass>This paragraph is in myClass</p>
```

You can also choose to style types of elements the same way. For example, if you want all paragraphs on your page to have a yellow background, you can do the following:

```css
p{
    background-color:yellow;
}
```

Lastly, if you want to apply certain style rules to all of your elements, you can do the following:

```css
*{
    color:red;
}
```

## Simple CSS
Now that we understand how to style particular elements, let's see how we can actually alter them! As you just saw in the previous section, we can change the font color and background color of elements. We can also change the font, set a background image, set borders, and do other such things.

### Colors

First, let's go back to **colors**. CSS allows you to set a color based on the name of the color, RGB values, HEX values, or HSL values. The variety of color options is endless.

Check out [here](https://www.w3schools.com/colors/colors_names.asp) for some fun options to use when choosing color by name.

### Fonts

Moving on to **fonts**, we can change the font, the style, and the weight. When setting the font, it's important to remember that the chosen font may not be supported by the user's browser. So as a backup, you should always include one of the font families in CSS. These are fonts that will not fail to display properly. The families include: sans-serif, serif, and monospace. Below is an example of choosing a font and a backup font family.

```css
p{
    /* This is a comment in CSS */
    /* Arial is the chosen font, sans-serif is the backup in case their browser doesn't have Arial */
    font-family:Arial,sans-serif;
}
```

The `font-style` value refers to whether or not a given element is italicized. The options include: `normal`, `oblique`, and `italic`. Altering the `font-weight` of a font determines how bold it is. The options include `normal` and `bold`.

Here are examples of both:

```css
p{
    font-style:italic;
    font-weight:bold;
}
```

### Background Images

Another fun thing we can do is set a **background image** for our website. Remember when we wrote our HTML file and everything included in the body section was the visible portion of the file? Now we want to select the body and set the background image. This will make the image cover the entire background of the website. It's also important to note that this image will be repeated in the background to fill the page. Below is an example of the implementation:

```css
body{
    background-image:url("filename.jpg");
}
```

### Borders

We can also set **borders** on elements. Like text, you can set the color of a border. You can set the style and sides too. There are many options for the style of a border including: dashed, double, outset, and more! The sides of a border can be individually set, instead of simply lining the entire element with the same border. The example below shows a class of elements with a dashed border, then a class of elements where each side is a different style:

```css
.classDash{
    border-style:dashed;
}
.classVaried{
    border-top-style:solid;
    border-right-style:dotted;
    border-bottom-style:double;
    border-left-style:outset;
}
```

## Layout Attributes

Now we will take a look at how to position elements on the screen with CSS.

First, let's take a look at using **float**. Using float allows you to place an element to the left or to the right. As pictured below (image taken from [this website](https://css-tricks.com/all-about-floats/)):

![](https://i1.wp.com/css-tricks.com/wp-content/csstricks-uploads/web-layout.png?resize=540%2C240&ssl=1)

Here's an example of implementing the float attribute to all div elements:

```css
div{
    float:right;
}
```

Next we'll take a look at formatting by using **inline-block**. This is analogous to when you insert an image to a word document and set "Wrap Text->In Line with Text". Here is how we apply this to the paragraph elements on our page:

```css
p{
    display:inline-block;
}
```
Take a look at the difference between using ```float``` and ```inline-block```:
![How text flows around a floated block and an inline-block](http://www.vanseodesign.com/blog/wp-content/uploads/2012/11/floats-inline-blocks.png)

Shoutout to the website that image is from, vanseo desgin! They have more information on using ```float``` vs. ```inline-block```, if you follow [this link](https://vanseodesign.com/css/inline-blocks/)!

## Forms
Forms let users interact with the website, whether it be by entering their information or their vote in a poll or anything of that sort. In HTML we have a handy dandy ```form``` element! This will let us get input from the user.

The next element to know is ```input```. This has a ```type``` attribute, which let's us say what kind of input we want the user to give us. Our options include ```text```, ```radio```,  ```checkbox```, and many more. We will only be covering the three types mentioned, but there are many more out there that are only a google search away!

First let's start with the ```text``` type. This shows a text box that takes input from the user. Here is an example of using this type:
```html
    <form>
	    <label for="animal">Favorite animal:</label><br>
	    <input type="text" id="animal" name="animal">
    </form>
```
The ```label``` tag displays what will show above the text box. ```<br>``` is a line break, so the text box will appear on the next line. The ```input``` element takes the user's response.

Another option for taking input from a user is the ```radio``` type. This displays a series of buttons and allows the user to choose one option. Here is an example where we want to know a student's year in school:
```html
    <form>  
		<input type="radio"  id="freshman"  name="year"  value="freshman">  
		<label for="freshman">Freshman</label><br>  
		<input type="radio"  id="sophomore"  name="year"  value="sophomore">  
		<label for="sophomore">Sophomore</label><br>  
		<input type="radio"  id="junior"  name="year"  value="junior">  
		<label for="junior">Junior</label><br>  
		<input type="radio"  id="senior"  name="year"  value="senior">  
		<label for="senior">Senior</label><br>
		<input type="radio"  id="grad"  name="year"  value="grad">  
		<label for="grad">Graduate Student</label>
	</form>
```
In this example, each pair of ```input``` and ```label``` tags produces a single button. It will be labeled with the text that comes after the ```<label for="freshman">```, which is "Freshman" in this case. Then there will be a button next to the label that allows us to know what the user chose.

The last input type we will look at is ```checkbox```. As expected, this displays a list of options the user can select. This input type allows the user to select as many options as they choose, including none of them. The following example is similar to the ```radio``` example, besides the obvious difference of the ```type``` attribute.
```html
    <form>  
		<input type="checkbox"  id="pet1"  name="pet1"  value="cat">  
		<label for="pet1">Cat</label><br>  
		<input type="checkbox"  id="pet2"  name="pet2"  value="dog">  
		<label for="pet2">Dog</label><br>  
		<input type="checkbox"  id="pet3"  name="pet3"  value="fish">  
		<label for="pet3">Fish</label><br>
		<input type="checkbox"  id="pet4"  name="pet4"  value="hamster">  
		<label for="pet4">Hamster</label><br>
		<input type="checkbox"  id="pet5"  name="pet5"  value="rabbit">  
		<label for="pet5">Rabbit</label>
	</form>
```
This checklist finds out what pets a user owns. It would display something similar to the ```radio``` type, but with checkboxes as opposed to buttons.

Now that the user has submitted their response to our form... what's next? The ```action``` attribute will tell our site where to send the user's data from here. This attribute affects the ```form``` element. So it should be placed within the ```form``` tag, like so:
```html
    <form action="/foodDecider.php">
	    <label for="food">What is your favorite food?</label>
	    <input type="text" id="food" name="food">
    </form>
```
This form asks a user what their favorite food is and sends the information to the ```foodDecider``` file. This file will actually process the information.

This section will be very useful later in this workshop when we take a look at JavaScript and Flask!

## Cool CSS Things
So far we have covered some simple CSS material that will make our HTML file more exciting. We can do even more to make our website look fabulous! Below we will cover fading, rounded corners, and dropdowns. These are only a few of the many possibilities that CSS provides. Feel free to look around online for more options!

### Fade-in and Fade-out

**Fade-in** is a neat way to introduce an element to your site. This will animate your selected element(s) to fade onto the screen from 0% to 100% opacity. Something to consider when doing a fade-in is how quickly we want to image to fully appear. We can alter the "ease" part to change this. In the example below, we use ease 10s. This is a slower fade-in. Play around with this number to achieve the speed you want!

```css
div{
    animation:fadeIn ease 10s;
}
```

We can implement **fade-out** in a similar way. All you need to do is replace the part of the above code that says "In" with "Out".

### Rounded Corners

Remember the borders that we decked out? What if we wanted to **round the corners** on them? We can use the border-radius attribute to adjust these corners. In the example below, we set the border-radius to 5px. The higher this value is, the more rounded the border will be.

```css
p{
    border-style:solid;
    border-radius:5px;
}
```

### Dropdowns

The last cool CSS thing we will take a look at is **dropdowns**. This allows us to display something when the user's mouse hovers over the element. Dropdowns are more complicated than the previous CSS things we've looked at. Let's start with the HTML portion of this. We will need the element to be moused over and the element that will appear. These can be any element you choose. Below, I've chosen a paragraph to mouse over and a `div` to appear.

```html
<div class="dropdown">
    <p>Hover on me!</p>
    <div class="dropdownHidden">Surprise!</div>
</div>
```

Notice that I set the class of the overall `div` to dropdown and the class of the `div` with the text to appear to `dropdownHidden`. Now we can use CSS to describe what these classes do. The CSS code below will produce a dropdown. It is commented with what each attribute does.

```css
.dropdown{
    /* This portion ensures that the hidden part of the dropdown will appear below the "Hover on me!" text. */
    position:relative;
    display:inline-block;
}
.dropdownHidden{
    /* Setting display to none means that this is hidden */
    display:none;
    /* The box shadow gives the dropdown depth */
    box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2)
}
.dropdown:hover .dropdownHidden{
    /* This section implements the appearance of the hidden portion when the mouse hovers over the dropdown element */
    display:block;
}
```

## Project
A great way to show off the HTML/CSS skills that you learned today is by creating a simple personal website. You can include links to your GitHub and LinkedIn pages. Click [here](https://avicndugu.github.io/) to see a great example of a personal website made with HTML/CSS!
