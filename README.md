# Welcome!

This is Rocket Academy's Part Time Coding Basics Course.

In this course you will learn the basics of what code is and build some simple programs.

# Operations

Coding means writing instructions for the computer to execute.

We will begin with the most basic kinds of instructions the computer can execute, which is an operation between 2 data values.

#### Instructions:
Open a new tab in the chrome browser. (file menu -> new tab *or* `cmd + t`)

Open the developer tools. (view -> developer -> javascript console *or* `cmd + option + i` *or* right click anywhere in the chrome window and choose `insepct`)

Make sure you've selected the javascript console tab in the dev tools.

## Math Operations

The javascript language is capable of calculating math operations.

Type these one at a time into the console and hit enter:

```
2 + 2
```

```
4 * 2
```

```
4 / 2
```

```
4 - 2
```

## Data

Our programs will soon have the ability to process data.

First we need to talk about what data is inside a javascript program and how it's represented.

### variables

An abstract piece of data in a javascript program is called a variable.

```
var pi = 3.14;
```

We name a variable and we associate a specific data value with it.

We use a variable to represent some data that our program will process.

```
var radius = 4;
```

Using these 2 data values we can calculate the area of this circle:

```
pi * radius * radius;
```

We can also use variables to capture that calculated value:

```
var area = pi * radius * radius;
```

#### abstraction

If we wanted the same result we can also write:

```
var area = 3.14 * 4 * 4;
```

But this is not as *meaningful* as our previous example.

Our programs must not only calculate values correctly, they must also represent the kinds of operations we are making- in this case calculating the area of a circle.

The name of our variables are giving meaning to what data our code contains.

## Template

Let's get started with running some code outside of the javascript console.

#### instructions

Copy the starter code from github:

`cd` into your code directory.

```
cd ~/code
```

git clone the starter code:
```
git clone https://github.com/rocketacademy/basic-js-starter.git basic-data
```

This will create a `basic-data` directory inside your `code` directory.

`cd` into the `basic-data` directory.

```
cd basic-data
```

Open the `index.html` file in chrome.

#### default template behavior

The default starter code has one basic behavior.

After you open the `index.html` file in your browser, click the submit button.

This causes "hello world" to appear in the grey box.

#### our own values being output

Open the `script.js` file in your editor.

You should see the following:

```
console.log("bananas");

var main = function(input){

  var myOutputValue = "hello world";

  return myOutputValue;
};
```

We will eventually see all of the functionalities of this code, but first we are going to start with *line 5*.

We are defining a variable and this is the value that we see in the grey box after we click the button.

Change the value of the variable to something else. We'll start with numbers only:

```
var myOutputValue = 2;
```

Remember to save the file and refresh the browser screen. Then you can try your changes out.

What happens when you click the button?

Try assigning a bunch of different values. See them output in the grey square.

```
var myOutputValue = 12;
```

```
var myOutputValue = 9999999999;
```

```
var myOutputValue = 1.234234;
```

#### operations as output

Let's assign the output of our previous code to the variable:

Previously all the lines we had together look like this:

```
var pi = 3.14;
var radius = 4;
var area = pi * radius * radius;
```

Let's assign our final value to the `myOutputValue` variable:

```
var myOutputValue = area;
```

When we click the submit button our program is now succesfully calculating the area of a circle!

Try some other calculations. Remember to assign the final value to `myOutputValue` in order for them to appear in the grey square.

```
var myOutputValue = 34534 * 2334;
```

```
var myOutputValue = 12 * 12;
```

```
var myOutputValue = 100 / 10;
```



























