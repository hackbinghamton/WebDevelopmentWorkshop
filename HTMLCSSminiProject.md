# HTML and CSS Basics

Good Evening, Fellow Hackers! 

In this mini project, we will build webpages using only HTML and CSS.

## 1) Plan out content

When creating a static site, the main goal is share some information. First, decide what you want to disply by writing up something worth sharing or picking a filler text ([lorem ipsum](https://www.lipsum.com/) is a classic). 

## 2) Create your initial files

We start our website with files named `index.html` and `style.css`

Note: If you're in Windows, you can create and edit these HTML and CSS files in Notepad. Open a blank page, hit save as, and change the file type to All. If the names end in .html and .css, Notepad will recognize the file types automatically.

To link the `index.html` to a `style.css` file, use the `<link>` tag in your `index.html` file

```
<!DOCTYPE html>
<html>
  <head>
      <title>Our First Websites</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>test phrase/h1>
  </body>
</html>
```

Don't forget to change out the content for the `title` and `h1` tags to better suit your site!

**To view your website, click the html file from the file manager and open it in any web browser.**

## 3) Section off your page by dividing up content

Instead of having all of the content as one giant paragraph, you probably want to section off the content on your page so it's easier to read and navigate. 
For example, you can use `<section>` and `<div>` tags to divide the body section of the `index.html` file so it looks something like this:

```
<main>
   <section id="unoriginal content">
      <div class="section-inner">
                    <h2>My Webpage</h2>
                    <h3>An engineer, a physicist, a mathematician, and a computer scientist were on a train heading north, and had just crossed the border into Scotland. </h3>
                    <ul>
                        <li>The engineer looked out of the window and said "Look! Scottish sheep are black!" </li>
                        <li>The physicist said, "No, no. Some Scottish sheep are black." </li>
                        <li>The mathematician looked irritated. "There is at least one field, containing at least one sheep, of which at least one side is black." </li>
                        <li>The computer scientist : "Oh, no! A special case!" </li>
                    </ul>
                </div>
   </section>
   <section id="emailMe">
       <div class="section-inner">
                    <h2>Contact me</h2>
                    <p><a href="mailto:mwerner7@binghamton.edu">Email me</a> a screenshot of your finished product!</p>
                </div>             
   </section>
</main>
<footer>
  Copyleft, 2019
</footer>
```

# 4) Add some CSS Formatting 

To format your webpage, add a stylesheet! Stylesheets let you specify things like the position of the content, font styles, margins, and more. Here's a sample `style.css` file:

```
body {
    margin: 0px;
    margin-top: 50px;
    font-family: sans-serif;
}

section {
    height: 100vh;
    border-bottom: 1px solid black;
    display: flex;
    margin: 60px;
    justify-content: left;
    align-items: left;
    text-align: left;
    font-size: 1.5em;
}

footer {
    text-align: center;
    padding: 50px;
}

section h2 {
    font-size: 3.5em;
}

section h3 {
    font-size: 2em;
}
```

As you edit your CSS, pull up your website (by clicking the HTML file from the file explorer and opening it in your web browser) and see if you like the changes the way you're formatting your content.  

## CSS Backgrounds

To add images to your background, add this text to the bottom of section{} in your `style.css`:

```
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
```

and at the bottom of `style.css`, add something like this:

```
#joke1 {
    background-image: linear-gradient(rgba(255,255,255,0.75),rgba(255,255,255,0.75)), url('back01stack.png');
}

#emailMeJokes {
    background-image: linear-gradient(rgba(255,255,255,0.75),rgba(255,255,255,0.75)), url('send_to_dan.png');
}
```

Note that the pound signs correspond to the section ids (`<section id="value">`) in your `index.html` and the URLs link to images you have saved in the *SAME FOLDER* of your drive as the `index.html`  file.
