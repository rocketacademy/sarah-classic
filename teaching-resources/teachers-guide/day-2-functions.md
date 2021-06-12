# Day 2: Functions

## Overview

This day introduces two foundational topics: functions and errors.

## Pre-Class Material

Total Video Watch Time: **~25 mins**

## Review[ Social Rules](../../course-logistics/love-social-rules.md)

In the previous session the students were introduced to the idea of pairing and got to experience it for themselves. Now that they have some context for the experience we want to talk about the optimal pairing experience, and to emphasize how their behaviour is key to the experience for themselves and others.

To begin, reiterate the big ideas behind pairing because the students only heard them once before:

* Learning directly from a peer helps with understanding.
* The best way to fully know something is to have to explain it.
* Pairing is a collaborative experience that should involve a lot of communicating and talking.
* Both people are focused on the same task. Not one person typing, another person Googling.

Then, introduce the social rules. Briefly mention each one. No need to read the whole thing. Ask them to read it if they haven't already. Remind students that these are just some pitfalls when working closely with others and are not actually rules, and that they mostly boil down to, be considerate.

The rules are just a reminder because they are behaviors that commonly arise when discussing technical topics.

### Discussion Questions

#### Q: Have you ever felt dumb or uncomfortable or unknowledgeable when speaking with someone who is an "expert" in a topic?

A: In a lot of situations in everyday life people can purposefully or inadvertently make you feel bad for not understanding something. We hope the social rules can help everyone avoid these kinds of situations by being more kind and thoughtful.

## [5.1: Functions](../../5-structuring-and-debugging-code/5.1-functions.md)

### Overview

The Basics curriculum is trying to emphasize functions as the most important unit of computation. Because a game will naturally have some global values we also have to introduce those, but the idea is that when the computer must do something the easiest way to think about it is wrapped in a function.

There are a few key ideas that students should take away:

* functions can be named and the action of computation can also stand in for the value itself. `calcCircleArea(3)` is both an expression of a calculation but is also the value \(the return value\). Clear naming is key to writing a good function.
* writing code that decomposes into input \(parameters\) and output \(return value\) is much easier to reason about than code that deals with multiple global values. Therefore, we should try to emphasize writing functions that take input and return values.

#### Discussion Questions

Prepare this code in VSCode. Run it in the browser.

```text
var add = function(a,b){
    return a + b;
};

var main = function(input){
    var myOutputValue = 'hello ' + add(input, 5);
    myOutputValue = myOutputValue + ' papaya ' + add(input, 6);
    return myOutputValue;
};
```

#### Q: How many times does the `add` function run?

A: Twice every time the main function runs, and as many times as the user clicks submit. This question will hopefully help clarify that a function is meant to be run multiple times.

#### Q: What happens if the add function is moved below the main function? Will it still work?

A: We haven't covered asynchronous code yet, but the students should still understand that the main function doesn't run until the user clicks submit. The absolute order of line numbers is not important when talking about control flow and functions.

E.g., if the code was synchronous, but was a function called from within another function further above it would still work.

Note that we can avoid opening the **index.html** file so as not to confuse students with the DOM manipulation code. Feel free to answer questions, but the main point of the starter code is that the students can understand it in the context of function execution only and not in terms of asynchronous callbacks yet.

```text
var add = function(a,b){
    return a + b;
};
var result = add(1,2);
```

#### Q: What value is inside `result`?

#### Q: What happens when we omit the `return` keyword? \(leaving in the addition operation\)

#### Q: Can we change the name of `a` or `b` to something else?

#### Q: What happens when we give a variable to the function? What happens to the variable? `var num = 99; var result2 = add(num,6);`

#### Q: What happens if we call the function a second time below line 4? `var result3 = add(5,6);`

```text
var main = function(input){
    return "hello " + input;
};
```

#### Q: Can we name the function to something other than `main`?

#### Q: Can we change input to something else?

#### Q: What happens when we take out the `return` keyword?

#### Common FAQ

Some common misconceptions around functions:

Q: Students think that the function must be run on the line after it is defined.

A: A function can be called from anywhere. Control flow means that when the function is called it jumps to whatever line it was defined on.

Q: Students think that in order to run more code, they copy the function and use similar lines from the previous operation.

A: Refactoring or recognizing a pattern that repeats itself within the code is something that the students should have in mind to practice.

## [5.2: Errors](../../5-structuring-and-debugging-code/5.2-errors.md)

### Overview

A common misconception with coding is that all the time spent learning to code or doing coding is spent actually typing out the code. It is important to emphasize to students that the learning process is 80% about identifying and fixing errors. \(And also that the professional coding process is also 80% fixing errors\).

In this sense the idea of errors and the strategies for approaching them are as important or more important than any other subject covered in Basics.

### Discussion Questions

#### Q: What is the difference between a compile-time error and a run-time error?

A: _Be ready to code out both errors. Have the example code ready._

#### Q: What is the difference between a syntax error and a logical error?

A: A syntax error will result in red text in the dev tools console.

#### Q: What are the different use cases for `console.log`? If there is an error, what order should they be tried in?

A: 1. Control flow check. See if the control flow goes to a given line. 2. Value check. See what value is in a variable.

### Common FAQ

#### Q: Students will neglect to open the dev tools before doing anything else.

A: Opening the dev tools should be the first thing they do when opening the HTML file.

#### Q: Students will have an error but attempt to run their code.

A: Anytime an error occurs in the program, JavaScript stops execution immediately after the error. If an error occurs the student must drop everything and solve that error before moving on.

#### Q: Students won't run their code to check for errors often enough.

A: Related to above, if you don't catch errors one at a time it is impossible to unwind where a series of errors in caused.

## In-Class Material

#### [Day 2: Functions](../../in-class-exercises/day-2-functions.md)

## **Look Ahead / Wrap-up**

After functions are covered students can make basic calculations and format strings. We've introduced another wrinkle into naming things, which is to name functions as action \(verb\) that also expresses some data value. Clear representation is more important than ever.

It's still early days and the programs are still very simple. Next we add in another kind of control flow, conditions. This is the point at which the code can actually make decisions. When we add in this branching logic things become a lot more complex. In fact logic as a topic on it's own is huge, but we'll be able to apply some simple concepts that are very intuitive for our purposes.

