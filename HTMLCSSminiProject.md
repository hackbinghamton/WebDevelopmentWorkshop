# HTML and CSS Basics

Good Evening Fellow Hackers! In this **Mini Project** we will build webpages using only HTML and CSS.

## STEP ONE -- plan out content.

Write up something worth sharing, or decide on your filler text. ([lorem ipsum] is a classic)

[lorem ipsum]: https://www.lipsum.com/

## STEP TWO -- create your initial files.

We start our website with files named index.html and style.css

If you're in Windows, you can create and edit these HTML and CSS files in Notepad. Open a blank page, hit save as, and change the file type to All. If the names end in .html and .css, Notepad will recognize the file types automatically.

Now we link our files like this:

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

This text block should be placed in the index.html file. Change lines title and h1 to better suit your content!

**At any point from now on you can view your website by clicking the html file from the file manager and opening it in any web browser.**

## STEP THREE -- section off your page and add content.

If you want a multipage website, head over to the README and grab some links to one of our many quality tutorials; otherwise, change the body section of your HTML file so it has sections that look like this:

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

# STEP FOUR -- CSS Formatting.

Next, write your stylesheet using the CSS links back in the README. Below is the CSS for my website thus far.

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

As you edit your CSS pull up your website (by clicking the HTML file from the file explorer and opening it in your web browser) and see how you like the changes you're making.

# STEP FIVE -- CSS Backgrounds

To add images to your background, add this text to the bottom of section{} in your CSS:

```
    background-size: cover; 
    background-position: center center; 
    background-repeat: no-repeat; 
    background-attachment: fixed;
```

and at the bottom of CSS add something like this:

```
#joke1 {
    background-image: linear-gradient(rgba(255,255,255,0.75),rgba(255,255,255,0.75)), url('back01stack.png');
}

#emailMeJokes {
    background-image: linear-gradient(rgba(255,255,255,0.75),rgba(255,255,255,0.75)), url('send_to_dan.png');
}
```

Note that the pound signs correspond to the section ids in your HTML and the URLs link to images you have saved in the SAME FOLDER of your drive as the HTML file.
