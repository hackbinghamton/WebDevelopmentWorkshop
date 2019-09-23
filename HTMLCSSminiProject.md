# Heyyoo My Fellow Elvis Impersonators!

In this **Mini Project (TM)** we're gonna build our own snazzy webpages with just HTML and CSS like some middle school tech project straight outta the 90s.

This is gonna be my first website too, so fasten your seatbelts! 

If I can make a website using like 5 different wikiHow articles simultaneously, you can also make a website by following my instructions and flagging down organizers if [when] I get confusing.

[I'm confusing because I too am confused.]

## STEP ONE -- decide what you want to put on your website.

You always remember your first time. Think about it. 

Can't you still remember the pain from your first time losing duck-duck-goose? (October 2006)

Or, okay, your first time being bit by a duck? (August 2013)

Maybe not... but how about your first time getting dumped by a girl for sending her pictures of ducklings? (April 2017)

IDK--maybe I'm not "relatable", but regardless, we're gonna remember our first websites, so they gotta be cool!

Come up with some quality content and then sketch her out on paper.

## STEP TWO -- create your initial files.

According to my bros on the interwebs, we start with files named index.html and style.css

I have some serious doubts about the names of these files having any importance, but someone is gonna have to approve of this branch merge, so they can clarify here.

**Reviewer: Hello it's _________ and _________ (Y|N), the names are(n't) important.**

If you're in Windows like I am at the moment *gagging noises*, you can create and edit the HTML and CSS files in Notepad. Open a blank page, hit save as, and change the file type to All.
If the names end in .html and .css, Notepad will recognize the file types automatically.

Now we link our files like this:

```
<!DOCTYPE html>
<html>
  <head>
      <title>Jokes About Math Involving Sheep</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>I have a very specific sense of humor, okay...?</h1>
  </body>
</html>
```

This text block should be placed in the index.html file. Change lines title and h1 to better suit your content!

**At any point from now on you can view your website by clicking the html file from the file manager and opening it in any (which, always means firefox) web browser.**

## STEP THREE -- section off your page and add content

If you want a multipage website, head over to the README to grab some links to one of our many quality tutorials, or follow in my footsteps and hit up wikiHow for the deets on your plan.
(I partitioned my hard drive and installed linux using wikiHow. also broke into my linux partition sans password via wikiHow. their shit's suprisingly legit--like, this is not a sponsered workshop, I just love and respect wikiHow.)

If you are instead, like me, chosing not to reach for the stars and going bare bones on your First Ever Website (ah!), change the body section of your html file so it has sections that look like this:
```
<main>
   <section id="joke1">
      <div class="section-inner">
                    <h2>Joke1</h2>
                    <h3>An engineer, a physicist, a mathematician, and a computer scientist were on a train heading north, and had just crossed the border into Scotland. </h3>
                    <ul>
                        <li>The engineer looked out of the window and said "Look! Scottish sheep are black!" </li>
                        <li>The physicist said, "No, no. Some Scottish sheep are black." </li>
                        <li>The mathematician looked irritated. "There is at least one field, containing at least one sheep, of which at least one side is black." </li>
                        <li>The computer scientist : "Oh, no! A special case!" </li>
                    </ul>
                </div>
   </section>
   <section id="emailMeJokes">
       <div class="section-inner">
                    <h2>Contact me</h2>
                    <p><a href="mailto:mwerner7@binghamton.edu">Email me</a> more jokes about sheep and math!</p>
                </div>             
   </section>
</main>
<footer>
  Copyleft, 2019         
</footer>
```

# STEP FOUR -- CSS Formatting

Next, write your stylesheet using the CSS links back in the README. CSS is even less like a programming language than html. All you have to do is sort out some sections and then change variables within them. Below is the CSS for my website thus far.

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

As you edit your CSS pull up your website (by clicking the html file from the file explorer and opening it in your web browser) and see how you like the changes you're making.

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




