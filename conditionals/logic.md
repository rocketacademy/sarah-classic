# Logic

So far what we have coded are basically calculators or, if the program deals with words, programs that fill in the blanks.

The next level of complexity is to create progams that, given some possible inputs, give output based on some logical decision.

### string comparison

Let's write a program that changes the output value of "hello world" if you type in a particular phrase.

```js
var main = function(input){

  var myOutputValue = "hello world";

  return myOutputValue;
};
```

#### if statement

An if statement is a control flow `block` that runs if a condition is `true`. We'll talk more about what specifically `true` means later, but you can see that what's happening is very intuitive.

```js
var main = function(input){

  var myOutputValue = "hello world";

  if( input == "paletable papaya" ){
    myOutputValue = "you wrote the secret phrase!";
  }

  return myOutputValue;
};
```

On line 5 we put our `if` statement. This is testing to see if `input` parameter is **equal** to the string value phrase we want to look for.

If it is equal the code we wrote between the curly braces runs.

If it is **not equal** it doesn't run.

This is the 2nd main way we use curly braces to denote `blocks` - specific sections of code that run or not given some **control flow**. We'll cover one other control flow syntax later using curly braces, **loops**.

Try your program both ways. Enter the secret phrase and click the button to see the different output. Enter anything else and click the button to see the base case.

#### equality

We're using the **boolean operator** `==` to test to see if `input` is **equal** to "paletable papaya".

#### try it yourself

## comments

Now that things are getting more complicated, we might want to leave notes to ourselves and others that say what our code does.

Comments let you write things in the code file that are just notes.

```js
// this won't actually run
```

## math evaluations

Let's change our game to a number guessing game.

There is a secret number.

1st version: If the user guesses the number they win a prize.

```js
var main = function(input) {

  var myOutputValue = "you lose";

  if( input == 3 ){
    myOutputValue = "you win";
  }

  return myOutputValue;
};
```

2nd version: If the user guesses any number over 3

```js
var main = function(input) {

  var myOutputValue = "you lose";

  if( input > 3 ){
    myOutputValue = "you win";
  }

  return myOutputValue;
};
```

3rd version: If the user guesses any number under 10

```js
var main = function(input) {

  var myOutputValue = "you lose";

  if( input < 10 ){
    myOutputValue = "you win";
  }

  return myOutputValue;
};
```

### boolean values

Every boolean operator, just like additiona nd other math operators, produces a new value.

```js
// this is the result of number 1 math operator number 2
var myVal = 3 + 2;
```

```js
// this is the result of number 1 boolean operator number 2
var myVal = 3 == 2;
```

what's the value inside of `myVal` in this case?

Boolean values are a 3rd kind of data we'll deal with. They **represent** a value that is true or false. Just like we can hold the rersult of a math operation, we can hold the result of a logical boolean operation.

### global world state

Number Guessing Game: the user only gets 3 tries (need global world state)

Without mentioning it, our programs have so far dealt with data that only exists while `main` runs or while any other function runs.

Now we will want to expand the kinds of data that our program deals with and can manipulate.

### memory, holding values, current state

We want to keep track **for the life of our program**, how many guesses were made.

What we want is a value that gets updated when `main` runs and then is **also** available the next time `main` runs.

We'll also define **life of our program** as the time from when it loads in the browser to the next time we close the tab or hit the refresh buton (load the page again).

First let's prove the basic statement that when we initialize a value in the console we can manipulate it and get the new value out:

```js
var number = 5;
```

```js
number = number * 2;
```

```js
number
```

Remember that for a `main` function like this:
```js
var main = function(input) {

  var myOutputValue = kilometersToMiles(input);

  return myOutputValue;
};
```

`myOutputValue` is different and the value is only set for that one time when we click submit.

Note that when you try to check the value of `myOutputValue` in the console it doesn't exist.

```js
myOutputValue
```

However, if we initialize the variable and then assign a value inside the function, because the variable was not **created** inside a function, we can hold on to the value.

Let's create a program that keeps printing out a long list of all the words that have been entered.

```js
var allWords = '';

var main = function(input) {

  allWords = allWords + " " + input;

  var myOutputValue = allWords;

  return myOutputValue;
};
```

### sum / average

Let's create a program that's the sum of all numbers that have been entered.

```js
var sum = 0;

var main = function(input) {

  sum = sum + input

  var myOutputValue = sum;

  return myOutputValue;
};
```


### + vs +

This code above doesn't work does it. In fact it works the same as the code above that puts all the words together.

The reason is that javascript can't tell the difference between the `+` that operates on a string type, and `+` that operates on a number type.

Try this out in the console:

```js
"4" + 4
```

Notice that if you do:

```js
"4" * 4
```

the math operation happens as expected. This is because there's no other operator like `*`.

When we make the addition statement with a string javascript thinks what you want is the **string** `+` operator. THere's nothing we can do to change this behavior- it's built in to javascript. But we can explicitly transform javascript that value into a number.

In the console it would look like dealing with two number values.
```js
4 + 4
```

We ask javascript to try to change the string value into a number:

```js
Number("4")
```

so this statment is valid:

```js
Number("4") + 4
```

So the final version of our code should look like this:

```js
var sum = 0;

var main = function(input) {

  sum = sum + Number(input);

  var myOutputValue = sum;

  return myOutputValue;
};
```

### randomness

## guessing game - number ranges / logical operators

### project - choose your own adventure

## dice game

## rock paper scissors


### if else

### if / else if

## logical expression translation

## condition debugging





