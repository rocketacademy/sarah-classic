## loops

We've defined an array and looked inside of it and added values, but we don't yet have anything that can deal with the entire array. Or specifically that can deal with **each** item in the array, when the array is an arbitrary length.

For that we are going to add the last control structure we'll use, **loops**.

In the context of games we'll see a few uses of loops that don't have to do with arrays, but from the point of view of software that manipulates imput data, the concept of the loop is very much tied to the concept of the array.

A loop defines a **block** of code (with curly braces) that will run a set number of times.

A loop relies on a condition to tell it to keep running or not.

We'll look at loops in isolation first, then we'll see that they match up perfectly with how an array works.

### while

This is a loop that runs 10 times.

```js
var counter = 0;

while ( counter < 10 ) {

  console.log('hello');

  counter = counter + 1;
}
```

### outputting program

Let's create a program that outputs things in a loop based on some input.

```js
var main = function (input) {
  var myOutputValue = '';

  var counter = 0;

  while (counter < input) {
    myOutputValue = myOutputValue + 'yes';

    counter = counter + 1;
  }

  return myOutputValue;
};
```

## loops + arrays

Now let's talk about arrays and loops together.

Specifically we want our programs to be able to deal with a set of data, `guesses` or some other value, which, at any given point of the program, could have a different number of items inside.

We can use loops to visit each item in the array and run some code for that item.

The trick is that we can make an eqivalence between the `counter` we had in the loop and the `index` we had for the array, by using the `length` of the array.

This is a value given to us for any array:

```js
var letters = ['a','b','c'];
```

```js
letters.length
```

We use `length` to know how many times to run the loop.

We use `counter` to access the location of each item in the array.

```js
var index = 0;
var letters = ['a','b','c'];
var letterLength = letters.length;

while (index < letterLength) {
  var currentLoopLetter = letters[index];

  console.log(currentLoopLetter);

  index = index + 1;
}
```

Let's make a simple program that demonstrates the use of loops and arrays.

Our app is an address book that keeps names and doesnt add a new one if its already in the book.


```js
var names = [];

var main = function (input) {
  // look at all the names and make sure it's not in there yet
  var index = 0;
  var namesLength = names.length;

  var found = false;

  while (index < namesLength) {
    var currentName = names[index];

    if (currentName == input) {
      found = true;
    }

    index = index + 1;
  }

  // we didn't find the name, put it in
  if (found == false) {
    names.push(input);
  }

  var myOutputValue = 'All your names: ' + names;

  return myOutputValue;
};
```

### hangman - word guessing game

Let's create a game of hangman, where a player guesses the secret word.

```js
var secretWordArray = ['c', 'a', 't'];

var lettersFound = [];

var main = function (input) {
  // look inside of array to see if input matches.

  var index = 0;

  var foundLetter = false;

  while (index < secretWordArray) {
    if (secretWordArray[index] == input) {
      foundLetter = true;
    }

    index = index + 1;
  }

  if (foundLetter == true) {
    lettersFound.push(input);
  }

  var myOutputValue = 'Letters so far: ' + lettersFound;

  if (lettersFound.length == secretWordArray.length) {
    myOutputValue = myOutputValue + ' - you win!';
  }

  return myOutputValue;
};
```
