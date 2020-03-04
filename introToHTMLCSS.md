

# Intro to HTML/CSS
## Overview

### What You'll Learn
In this section, you'll learn
1. Basic HTML
2. CSS Selection
3. Simple CSS
4. Layouts
5. Cool CSS Stuff
### Prerequisites
Before starting this section, you should have an understanding of
1. How to edit a file

### Introduction
In this  section we will be learning how to create a simple website with HTML/CSS.

### HTML Basics
Every HTML file should begin with < html> and end with < /html>. This defines the file. You will notice that every time we use a tag, which is the thing with the angle brackets we just saw, we need to end it with the same thing preceded by a "/".

The visible portion of an HTML file is between the body tags. Below is an example of this. Don't worry if you see tags that you do not know yet, we will talk about them soon! Another important thing to know is how to write a comment in HTML, this is also indicated below.

    <html>
	    <body>
		    <!-- This is a comment!-->
		    <h1> This is a heading </h1>
		    <p> This is a paragraph </p>
	    </body>
    </html>

An **HTML element** is anything between a start tag and an end tag. Elements include headings, paragraphs, breaks, and others. The **heading** element above gives the largest heading size. For smaller headings, try < h2> < h3> ... < h6>. The higher the number, the smaller the heading! The **paragraph** element is self explanatory, you can put a chunk of text here.

Next let's look at how to **link** things in your HTML file. Below is an example. The href attribute tells us what website we are linking to. The text that follows will be the text to click to get to that website. By the way, an **attribute** in HTML gives more information about an element.

           <a href="https://www.reddit.com/r/sploot/comments/fcehvj/a_sploot_worth_its_weight_in_golden/?utm_source=share&utm_medium=web2x"> Click to smile</a>
**Images** are another important type of HTML element. The src attribute tells us what the name of the image file is. The alt attribute tells us what text to show if we cannot find the specified file.

    <img src="sourceFileName.jpg" alt="alternate text" width="300" height="400">
The last HTML element we will look at in depth is the **div**. This tag lets a specified portion of the HTML file be separate from the rest (*div*ided from it). This element will be useful later when we take a look at CSS.

    <div>This element creates another section</div>


### CSS Selection
Now that we have a basic website in the works, we want it to look pretty! You probably do not want your website to be just black text on a white background. In HTML, we can specify the style of elements. This shows how we want them displayed. CSS is an easier way to set the style of your HTML elements. The work we are about to explore in CSS should be contained in another file that ends with ".css". To connect your HTML and CSS files, you will want to add this line to your HTML file (before the body tag):

    <link rel="stylesheet" href="fileName.css"/>

CSS uses classes and IDs to control which elements we are altering the style of. **Multiple elements can be in a class, but an ID is unique to one element.** Let's take a look at the difference in how classes and IDs are used.

    #myID{
	    color:purple;
	}
	.myClass{
		color:blue;
	}
Notice how an ID uses "#", whereas a class uses ".". The above CSS code would make the font color of the element identified by myID purple, and the font color of every element in myClass blue.

To **assign an ID or class to an element**, you set the attribute in the start tag. See below for an example of this!

    <h3 id=myID>This heading has the myID ID.</h3>
    <div class=myClass>This div element is in myClass</div>
    <p class=myClass>This paragraph is in myClass</p>

You can also choose to style types of elements the same way. For example, if you want all paragraphs on your page to have a yellow background, you would do the following:

    p{
	    background-color:yellow;
    }
Lastly, if you want to select all of your elements, you can do the following:

    *{
	    color:red;
    }

### Simple CSS
Now that we understand how to select elements to style, let's see how we can actually alter them! As you just saw in the previous section, we can change the font color and background color of elements. We can also change the font, set a background image, set borders, and do other such things.

First, let's go back to **colors**. CSS allows you to set a color based on the name of the color, RGB values, HEX values, or HSL values. The variety of color options is endless. Check out [here](https://www.w3schools.com/colors/colors_names.asp) for some fun options to use when choosing color by name!

Moving on to **fonts**, we can change the font, the style, and the weight. When setting the font, it's important to remember that the chosen font may not be supported by the user's browser. So as a backup, you should always include one of the font families in CSS. These are fonts that will not fail to display properly. The families include: sans-serif, serif, and monospace. Below is an example of choosing a font and a backup font family.

    p{
	    <!--Arial is the chosen font, sans-serif is the backup-->
	    font-family:Arial,sans-serif;
    }
The style of a font refers to whether or not it is italicized. The options include: normal, oblique, and italic. Altering the weight of a font determines how bold it is. The options include normal and bold. Below are examples of both.

    p{
    	font-style:italic;
	    font-weight:bold;
    }
Another fun thing we can do is set a **background image** for our website. Remember when we wrote our HTML file and everything included in the body section was the visible portion of the file? Now we want to select the body and set the background image. This will make the image cover the entire background of the website. It's also important to note that this image will be repeated in the background to fill the page. Below is an example of the implementation.

    body{
	    background-image:url("filename.jpg");
    }
We can also set **borders** on elements. Like text, you can set the color of a border. You can set the style and sides too. There are many options for the style of a border including: dashed, double, outset, and more! The sides of a border can be individually set, instead of simply lining the entire element with the same border. The example below shows a class of elements with a dashed border, then a class of elements where each side is a different style.

    .classDash{
	    border-style:dashed;
    }
    .classVaried{
	    border-top-style:solid;
	    border-right-style:dotted;
	    border-bottom-style:double;
	    border-left-style:outset;
    }

### Layout Attributes
Now we will take a look at some common layouts and how to create similar things.

First, let's take a look at using **float**.  Using float allow you to place an element to the left or to the right. As pictured below (image taken from [this website](https://css-tricks.com/all-about-floats/)):
![](https://i1.wp.com/css-tricks.com/wp-content/csstricks-uploads/web-layout.png?resize=540%2C240&ssl=1)
Here's an example of implementing the float attribute to all div elements:

    div{
	    float:right;
    }

Next we'll take a look at formatting by using **inline-block**. This is analogous to when you insert an image to a word document and set "Wrap Text->In Line with Text". Here is how we apply this to the paragraph elements on our page:

    p{
	    display:inline-block;
    }

### Cool CSS Things
So far we have covered some simple CSS material that will make our HTML file more exciting. We can do even more to make our website look fabulous! Now we will cover fading, rounded corners, and dropdowns. These are only a few of the many possibilities that CSS provides. Feel free to look around online for more options!

**Fade-in** is a neat way to introduce an element to your site. This will animate your selected element(s) to fade onto the screen from 0% to 100% opacity. Something to consider when doing a fade-in is how quickly we want to image to fully appear. We can alter the "ease" part to change this. In the example below, we use ease 10s. This is a slower fade-in. Play around with this number to achieve the speed you want!

    div{
	    animation:fadeIn ease 10s;
    }

   We can implement **fade-out** in a similar way. All you need to do is replace the part of the above code that says "In" with "Out".

Remember the borders that we decked out? What if we wanted to **round the corners** on them? We can use the border-radius attribute to adjust these corners. In the example below, we set the border-radius to 5px. The higher this value is, the more rounded the border will be.

    p{
	    border-style:solid;
	    border-radius:5px;
    }
The last cool CSS thing we will take a look at is **dropdowns**. This allows us to display something when the user's mouse hovers over the element. Dropdowns are more complicated than the previous CSS things we've looked at. Let's start with the HTML portion of this. We will need the element to be moused over and the element that will appear. These can be any element you choose. Below, I've chosen a paragraph to mouse over and a div to appear.

    <div class="dropdown">
	    <p>Hover on me!</p>
	    <div class="dropdownHidden">Surprise!</div>
    </div>
Notice that I set the class of the overall div to dropdown and the class of the div with the text to appear to dropdownHidden. Now we can use CSS to describe what these classes do. The CSS code below will produce a dropdown. It is commented with what each attribute does.

    .dropdown{
	    <!--This portion ensures that the hidden part of the dropdown will appear below the "Hover on me!" text. -->
	    position:relative;
	    display:inline-block;
    }
    .dropdownHidden{
	    <!--Setting display to none means that this is hidden-->
	    display:none;
	    <!--The box shadow gives the dropdown depth-->
	    box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2)
    }
    .dropdown:hover .dropdownHidden{
	    <!--This section implements the appearance of the hidden portion when the mouse hovers over the dropdown element-->
	    display:block;
    }

### Project Idea
A great way to show off the HTML/CSS skills that you learned today is by creating a simple personal website. You can include links to your GitHub and LinkedIn pages. Click [here](https://avicndugu.github.io/) to see a great example of a personal website made with HTML/CSS!
