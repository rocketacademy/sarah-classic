## What is a program?

For the purposes of this course we will constrain our definition of what coding / programming means and what a program is used for.

We'll define a program as: **instructions to the computer to process an input and give an output**.

## What is coding?

Coding is distinct from the _program_ that a coder produces.

The process of coding includes:

* translate a set of real world data into a set of abstractions
* representation and abstraction of data inside the computer
* what operations the computer must make on that data
* what output is given and the representation of that output

## Operations

Coding means writing instructions for the computer to execute.

We will begin with the most basic kinds of instructions the computer can execute, which is an operation between 2 data values.

**Instructions:**

Open a new tab in the chrome browser. \(file menu -&gt; new tab _or_ `cmd + t`\)

Open the developer tools. \(view -&gt; developer -&gt; javascript console _or_ `cmd + option + i` _or_ right click anywhere in the chrome window and choose `insepct`\)

Make sure you've selected the javascript console tab in the dev tools.

### Math Operations

The javascript language is capable of calculating math operations.

Type these one at a time into the console and hit enter:

```javascript
2 + 2
```

```javascript
4 * 2
```

```javascript
4 / 2
```

```javascript
4 - 2
```

### Data

Our programs will soon have the ability to process data.

First we need to talk about what data is inside a javascript program and how it's represented.

#### variables

An abstract piece of data in a javascript program is called a variable.

```javascript
var pi = 3.14;
```

We name a variable and we associate a specific data value with it.

We use a variable to represent some data that our program will process.

```javascript
var radius = 4;
```

Using these 2 data values we can calculate the area of this circle:

```javascript
pi * radius * radius;
```

We can also use variables to capture that calculated value:

```javascript
var area = pi * radius * radius;
```

**abstraction**

If we wanted the same result we can also write:

```javascript
var area = 3.14 * 4 * 4;
```

But this is not as _meaningful_ as our previous example.

Our programs must not only calculate values correctly, they must also represent the kinds of operations we are making- in this case calculating the area of a circle.

The name of our variables are giving meaning to what data our code contains.


