# 7.1: Program State

## Global World State

Without mentioning it, our programs have so far dealt with data that only exists while `main` runs or while any other function runs.

Now we will want to expand the kinds of data that our program deals with and can manipulate.

## Memory, Holding Values

We want to keep track **for the life of our program** what the bank roll is.

We need a syntax for a value \(bank roll\) that gets updated when `main` runs and then is **also** available the next time `main` runs.

We'll also define **life of our program** as the time from when it loads in the browser to the next time we close the tab or hit the refresh buton \(load the page again\).

First let's prove the basic behavior that when we initialize a value in the console we can manipulate it and get the new value out:

```javascript
var number = 5;
```

```javascript
number = number * 2;
```

```javascript
number
```

If we refresh the page that value is no longer available. The life of our program has ended and started again.

### Main Function Scope

Remember that for a `main` function like this:

```javascript
var main = function (input) {
  var myOutputValue = kilometersToMiles(input);

  return myOutputValue;
};
```

`myOutputValue` is different and the value is only set for that one time when we click submit.

Note that when you try to check the value of `myOutputValue` in the console it doesn't exist.

```javascript
myOutputValue
```

This is a generic truth about values that are initialized inside a function. They are available for the life of that function, then they dissapear.

Note that main function runs each time the submit button is clicked.

### global state

```javascript
var papayaCounter = 0;

var main = function (input) {
  var myOutputValue = 'You have ' + papayaCount + ' papayas';
  return myOutputValue;
};
```

## dice betting

Let's add betting on the dice roll.

```javascript
var bankRoll = 10;

var main = function (input) {

  var randomDiceNumber = diceRoll();

  var myOutputValue = 'you lose. current bank roll: ' + bankRoll;

  if (randomDiceNumber == input) {

    bankRoll = bankRoll + 1;

    myOutputValue = 'you win. current bank roll: ' + bankRoll;
  }

  return myOutputValue;
};
```

# Game Modes

We can use global state to expand the functionality of our games- they can keep track of a game mode to accept different operations and inputs.

```javascript
var mode = 'green';

var main = function (input) {
  if (input == 'greenmode') {
    mode = 'green';
  } else if (input == 'bluemode') {
    mode = 'blue';
  }

  var myOutputValue = 'A fool sees not the same tree that a wise man sees. -William Blake';

  if (mode == 'blue') {
    myOutputValue = 'The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau';
  }

  return myOutputValue;
};
```

Note that we get the same output until we command the program to change modes.

Note that the value we set the `mode` to in the beggining is the default one it starts in.

## Game Playing Modes - Enter Your Name

```javascript
var bankRoll = 10;
var currentGameMode = 'waiting for user name';
var userName = '';

var main = function (input) {

  var myOutputValue = '';

  if (currentGameMode == 'waiting for user name') {
    // set the name
    userName = input;

    // now that we have the name, switch the mode
    currentGameMode = 'dice game';

    myOutputValue = 'Hello ' + userName;

  } else if (currentGameMode == 'dice game') {
    // dice game logic
    var randomDiceRoll = diceRoll();
    myOutputValue = userName + ' you lost! you guessed: ' + input + 'you rolled: ' + randomDiceRoll + ' current bank roll: ' + bankRoll;

    if (userGuess == randomDiceRoll) {
      bankRoll = bankRoll + 1;
      myOutputValue = userName + ' you won! you guessed: ' + input + 'you rolled: ' + randomDiceRoll + ' your current bank roll: ' + bankRoll;
    }
  }

  return myOutputValue;
};

var diceRoll = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};
```

## Refactoring for Modes

As our programs become larger and more complicated we want to be able to **refactor** our prorams to be more concise, understandable ans testable.

We can use functions as subroutines and use parameters and return values to help us control the flow of data in our program.

From the example above we can extract the dice roll part and put it into it's own function:

```javascript
var bankRoll = 10;
var currentGameMode = 'waiting for user name';
var userName = '';

var main = function (input) {

  var myOutputValue = '';

  if (currentGameMode == 'waiting for user name') {
    // set the name
    userName = input;

    // now that we have the name, switch the mode
    currentGameMode = 'dice game';

    myOutputValue = 'Hello ' + userName;

  } else if (currentGameMode == 'dice game') {
    myOutputValue = diceGame(userName, input);
  }

  return myOutputValue;
};

var diceGame = function (userName, userGuess) {
  var message = '';

  // dice game logic
  var randomDiceRoll = diceRoll();
  message = userName + ' you lost! you guessed: ' + userGuess + 'you rolled: ' + randomDiceRoll + ' current bank roll: ' + bankRoll;

  if (userGuess == randomDiceRoll) {
    bankRoll = bankRoll + 1;
    message = userName + ' you won! you guessed: ' + userGuess + 'you rolled: ' + randomDiceRoll + ' your current bank roll: ' + bankRoll;
  }

  return message;
};

var diceRoll = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};
```
