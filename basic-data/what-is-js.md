# What is JavaScript

Now that we've worked with JavaScript a little bit we can step back and talk about what we are doing.

## Why Javascript

JavaScript bears no resembalancee to the language `Java`, other than some superficial syntax similarities to a shared ancestor language, `C`. THe name was mostly a marketing descision.

It was famously created in about a week by Brendan Eich, who was working at the first browser company, _Netscape_.

JavaScript is not a terribly well-regarded language, but has become popular because it is the **only** language of the web browser. Any and every single web browser created must run the JavaScript language, which has made it a powerhouse in terms of ubiquity. In fact it's relatively rare for a signle language to dominate a such a diverse and wide spread platform such as the web browser.

## What's happening

Once the browse has loaded our JavaScript file into the browser, it begins executing the file from top to bottom.

We define the `main` function and the program waits for it to run when the user clicks the button.

If we call a function from within the `main` function, JavaScript jumps to the lines where _that_ function was defined and runs those.

The environment created by our JavaScript and the code run by the browser is an envirnment meant for the user to interact with inside that webpage.

This environment was created so that javascript could completely control the contents and interactivity of a page.

We've setup this starter code so that we can focus on the logic of the program and less on the kinds of inputs we are getting and the kinds of outputs we are creating. (This is what's referred to as the DOM - the javascript interface to the HTML page on the screen).
