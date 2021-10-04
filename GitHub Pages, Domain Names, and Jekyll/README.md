# Hosting a Website on GitHub Pages
## Overview
* Introduction
 * What is GitHub Pages?
* Steps
  * From a new repository
  * From an existing repository to GitHub Pages

## Introduction
Here, you will learn how to host your own website on GitHub Pages. This will not require prior knowledge on database usage, server set-up, PHP, Python, or Ruby.

## What is GitHub Pages?
GitHub Pages is a free hosting service that hosts static websites directly from GitHub repositories. A static website is a web page with fixed content, displaying the same information every time. Since we can only host static websites, we cannot include databases or servers. This makes GitHub Pages best suited for building your own personal website.

## What can you host with GitHub Pages?
Anything that is static, so mainly personal websites and blogs. Since it goes hand in hand with a GitHub repository, people also use Pages to write up documentations for their product/code. Below are some examples of websites that use GitHub Pages:
  * http://dirkgroenen.nl/SVGMagic/ - a website explaining documentation of SVGMagic: look at its [GitHub repository](https://github.com/dirkgroenen/SVGMagic/tree/gh-pages) and go to the `gh-pages` branch, to see the website's source files
  * https://government.github.com/  - a webpage advocating for government adaption of Github
  * https://artsy.github.io/ - an engineering blog

## Steps
In order to create and host a website, a GitHub account is required. Basic Git knowledge is helpful. If you want a review of Git/GitHub, look back at to our [Introduction to Programming and Starting a Personal Project](https://github.com/HackBinghamton/IntroToProgrammingWorkshop) workshop.

If you are starting a website from a new repository, continue below. If you want to convert an existing repository to GitHub Pages, skip to the next subsection.

### From a new repository
1. Go to GitHub and create a new repository named as `your_username.github.io.` Make sure *your_username* exactly matches your username in order for it to work. Click on "Initialize this repository with a README", so you can immediately clone your repo to your machine. Then, hit "Create repository."

2. Head over to your terminal, go to the location you want to keep your project, and clone your repository:
```
git clone https://github.com/username/username.github.io
```

3. You will be prompted to enter your GitHub username and password. For "password," you'll want to input an access token given by GitHub. Follow [this guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to get your token and then paste it into the terminal. Don't worry if it doesn't physically appear in the terminal after you paste it – just paste and press enter.

4. Enter your project folder and create an `index.html` file to get started on your website:
```
cd username.github.io
echo "Hello World" > index.html
```

5. Add, commit, and push your changes:
```
git add --all
git commit -am "initial commit"
git push
```
You can preview your website if you open your file on a web browser from your local machine, but make sure you push your changes onto your repository in order to see the changes on your hosted site.

6. Go to `https://username.github.io` to see your website up and running.

7. You completed the first step of building your own website. Now, you can use HTML, CSS, and JavaScript to continue improving it!

### From an existing repository to GitHub Pages
1. Go to your existing repository and click on Settings.

2. Scroll down to the GitHub Pages section, then select your master branch as a source using the drop down option. If your source is different from you master branch, select the branch you want.

3. The page should refresh automatically. Scroll back down to the GitHub Pages section, and you'll see the link to your website. It may take a few moments for your website to register and display your contents.

## Website Hosting Resources

Take advantage of the [GitHub Education Pack](https://education.github.com/pack)!!

As a student, GitHub provides access to a very large amount of tools for free!

Some of these include free domain names from popular domain websites:
* [name.com](https://www.name.com/partner/github-students) - 1 free domain name and free Advanced Security
* [namecheap](https://education.github.com/pack/offers#namecheap) - 1 year domain name registration on the .me TLD and 1 year SSL certificate (For example: firstNamelastName.me)
* [.tech domains](https://get.tech/github-student-developer-pack) - 1 .TECH domain free for 1 year.

If you create a GitHub Pages website and have access to a domain name, you can redirect your website to that domain name!

For example, if your GitHub Pages website is accessible from `johnsmith.github.io`, and you want to change it to `johnsmith.me` (using a free namecheap domain), you can do that in your repository settings.

Follow along with [these instructions](https://help.github.com/en/articles/using-a-custom-domain-with-github-pages) from GitHub to connect your GitHub Pages website to a domain.
