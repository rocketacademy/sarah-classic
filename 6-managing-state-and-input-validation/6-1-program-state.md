# 6.1: Program State

Let's implement a main function that remembers something that happened during a previous run of the function.

### add betting

Let's add betting on the dice roll.

To make it easy we'll begin the game with $100. Each play will bet $1. Each win will double your bet.

We need to talk about a different kind of data to make this work.

Let's start with a naive implementation:

```javascript
var main = function (input) {
  var bankRoll = 100;

  var bet = 1;

  bankRoll = bankRoll - 1;

  var randomDiceNumber = diceRoll();

  var myOutputValue = 'you lose. current bank roll: ' + bankRoll;

  if (randomDiceNumber == input) {
    win = bet * 2;

    bankRoll = bankRoll + win;

    myOutputValue = 'you win. current bank roll: ' + bankRoll;
  }

  return myOutputValue;
};
```

Leave the fixed random number from above in place and let's test the program.

Notice that no matter if you win or lose, the bank roll is always 100.

## global world state

Without mentioning it, our programs have so far dealt with data that only exists while `main` runs or while any other function runs.

Now we will want to expand the kinds of data that our program deals with and can manipulate.

## memory, holding values, current state

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

### main function scope

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

### execution order

Let's put some `console.log`s into the code to demonstrate this basic behavior.

Note that main function runs each time the submit button is clicked.

### global state

However, if we initialize the variable and then assign a value inside the function, because the variable was not **created** inside a function, we can hold on to the value.

You can see all that we did was move line 3 to line 1. This takes it outside of the function block and puts it into the "global scope" of the program.

```javascript
var bankRoll = 10;

var main = function (input) {
  var bet = 1;

  bankRoll = bankRoll - bet;

  var randomDiceNumber = diceRoll();

  var myOutputValue = 'you lose. current bank roll: ' + bankRoll;

  if (randomDiceNumber == input) {
    win = bet * 2;

    bankRoll = bankRoll + win;

    myOutputValue = 'you win. current bank roll: ' + bankRoll;
  }

  return myOutputValue;
};
```

## Game Modes

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

## Game with Betting and Playing Modes

```javascript
var mode = 'betting';

var main = function (input) {
  var myOUtputVar = '';

  if (input == 'betting') {
    mode = 'betting';
    myOutputValue = 'make a bet.';

    return myOutputValue;
  }

  if (input == 'play') {
    mode = 'play';
  }

  if (mode == 'betting') {
    myOutputValue = 'you bet ' + input;
    currentBet = input;
  } else if (mode == 'play') {
    var randomDiceNumber = diceRoll();

    myOutputValue = 'you lose. current bank roll: ' + bankRoll;

    if (randomDiceNumber == input) {
      win = currentBet * 2;

      bankRoll = bankRoll + win;

      myOutputValue = 'you win. current bank roll: ' + bankRoll;
    }
  }

  return myOutputValue;
}
```

Note how lines 22-31 is the entire betting game pasted into this conditional structure.

## refactoring, input control, subroutines with functions

As our programs become larger and more complicated we want to be able to **refactor** our prorams to be more concise, understandable ans testable.

We can use functions as subroutines and use parameters and return values to help us control the flow of data in our program.

From the example above we can extract the dice roll part and put it into it's own function:

```javascript
var mode = 'betting';

var diceGame = function (bet) {
  var randomDiceNumber = diceRoll();

  var result = 'you lose. current bank roll: ' + bankRoll;

  if (randomDiceNumber == input) {
    win = bet * 2;

    bankRoll = bankRoll + win;

    result = 'you win. current bank roll: ' + bankRoll;
  }

  return result;
};

var main = function (input) {
  var myOutputValue = '';

  if (input == 'betting') {
    mode = 'betting';
    myOutputValue = 'make a bet.';

    return myOutputValue;
  }

  if (input == 'play') {
    mode = 'play';
  }

  if (mode == 'betting') {
    myOutputValue = 'you bet ' + input;
    currentBet = input;
  } else if (mode == 'play') {
    myOutputValue = diceGame(bet);
  }

  return myOutputValue;
}
```

Notice the way that the function doesn't operate on _global_ data. We define data within the function itself, such as `bet`. This is to control the input and output data of the function.

Also note how much easier the logic reads because of the way line 37 looks.

