# Creating and Hosting a Website on Github Pages
## Overview
* Introduction
 * What is GitHub Pages?
* Steps
  * From a new repository
  * From an existing repository to GitHub Pages
* Jekyll
  * Steps

## Introduction
Here, you will learn how to host your own website on GitHub Pages.

### What is GitHub Pages?
GitHub Pages is a free hosting service that hosts static websites directly from a Github repository. A static website is a web page with fixed content, displaying the same information every time. Since we can only host static websites, there are no databases or servers that need to be configured making GitHub Pages a great start to building your own personal website. There is no need to configure any databases or worry about server interaction using languages such as PHP, Ruby, or Python.

### What can you make with GitHub Pages?
Anything that is static, so mainly personal websites and blogs. Since it goes hand in hand with a GitHub repository, people also use Pages to write up documentations for their product/code. Below are some examples of websites that use GitHub Pages:
  * http://dirkgroenen.nl/SVGMagic/ - A website explaining documentation of SVGMagic. If you take a look at its [GitHub repository](https://github.com/dirkgroenen/SVGMagic/tree/gh-pages) and go to the "gh-pages" branch, you can see the website's source files.
  * https://government.github.com/  - A website
  * https://artsy.github.io/ - A blog

## Steps
In order to create and host a website, a GitHub account is required. Basic Git knowledge is helpful. If you want a review of Git/GitHub, look back at to our [Introduction to Programming and Starting a Personal Project](https://github.com/HackBinghamton/IntroToProgrammingWorkshop) workshop.

If you are starting a website from a new repository, continue below. If you want to convert an existing repository to GitHub Pages, skip to the next subsection.

### From a new repository
1. Go to GitHub and create a new repository named as *your_username*.github.io. Make sure *your_username* exactly matches your username in order for it to work. Click on "Initialize this repository with a README", so you can immediately clone your repo to your machine. Then, hit "Create repository."

2. Head over to your terminal, go to the location you want to keep your project, and clone your repository:
```
git clone https://github.com/username/username.github.io
```

3. Enter your project folder and create an index.html file to get started on your website:
```
cd username.github.io
echo "Hello World" > index.html
```

4. Add, commit, and push you changes:
```
git add --all
git commit -a -m "initial commit"
git push -u origin master
```
You can preview your website if you open your file on a web browser form your local machine, but make sure you push your changes onto your repository in order to see the changes on your hosted site.

5. Go to "https://username.github.io" to see your website up and running.

6. You completed the first step of building your own website. Now, you can use HTML, CSS, and JavaScript to continue improving it.

### From an existing repository to GitHub Pages
1. Go to your existing repository and click on Settings.

2. Scroll down to the Github Pages section, then select your master branch as a source using the drop down option. If your source is different from you master branch, select the branch you want.

3. The page should refresh automatically. Scroll back down to the Github Pages section, and you'll see the link to your website. It may take a few moments for your website to register and display your contents.

## Jekyll
Jekyll is a static site generator that can be used with GitHub pages. Jekyll gathers all your content, renders all of your HTML, CSS, Markdown, and Liquid (a template language), and outputs a static website. It makes managing your website easier as it uses templates (layouts) and allows you to focus on the content.

This section will cover how to get started with Jekyll. A general understanding of HTML and the structure of a website will be helpful for this section.

### Steps
1. We will be using the terminal set up Jekyll. Jekyll is a RubyGem, so first we need to install a Ruby environment then the Jekyll package. Ruby is a programming language, and RubyGem is a package manager for Ruby. For installing software, I recommend getting [Homebrew](https://brew.sh/). Homebrew is a software package manager for macOS and Linux that makes installing software easily.

  * For MacOS and Linux, a version of Ruby may already be installed, but we need to install version 2.4.0 or later. You can check the version by running ```ruby -v ```. If you have homebrew, you can easily install the updated version by running ```brew install ruby```. We need to have Ruby in our PATH, so follow the instructions homebrew tells you after it successfully finishes installing Ruby.

  * For Windows, and other methods of installing Ruby, look at the [installation guide](https://www.ruby-lang.org/en/documentation/installation/) from the official website.

2. After you finish installing a Ruby environment, close and reopen your terminal. Now, we can install Jekyll and bundler gems. Run ```gem install --user-install bundler jekyll```. Then, append your path file with ```export PATH=$HOME/.gem/ruby/2.6.0/bin:$PATH```. Replace 2.6 will the version of Ruby you have.

3. You can create a new jekyll site by running ```jekyll new nameofblog```. Replace *nameofblog* with whatever you want to title your directory.

4. Change into that directory: ```cd nameofblog```

5. Then run ```bundle exec jekyll serve``` to build the site and run it on your local host.

6. You can now go to your local host to see your Jekyll website: http://localhost:4000

Jekyll has many themes to customize your website, and the default theme it uses whenever you create a new Jekyll site is called Minima.

# Website Hosting Resources

Take advantage of the [Github Education Pack](https://education.github.com/pack)!!

As a student, Github provides access to a very large amount of tools for free!

Some of these include free domain names from popular domain websites:
* [name.com](https://www.name.com/partner/github-students) - One free domain name and free Advanced Security
* [namecheap](https://education.github.com/pack/offers#namecheap) - 1 year domain name registration on the .me TLD and 1 year SSL certificate (For example: firstNamelastName.me)
* [.tech domains](https://get.tech/github-student-developer-pack) - One .TECH domain free for 1 year.

The benefit of creating a Github Pages website and having access to free domain names is that you can redirect your website to the domain name!

For example, if your Github Pages website is accessible from johnsmith.github.io, and you want to change it to johnsmith.me (using a free namecheap domain), you can do that in your repository settings.

Follow along with [these instructions](https://help.github.com/en/articles/using-a-custom-domain-with-github-pages) from Github to complete the setup.


## Resources
* [Jekyll official website](https://jekyllrb.com/)
* [GitHub Pages official website](https://pages.github.com/)

