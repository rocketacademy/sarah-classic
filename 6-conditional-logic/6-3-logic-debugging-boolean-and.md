# 6.3: Logic Debugging, Boolean And

## input / output control

Now that we've introduced the idea of randomness, we also need to talk about controlling that randomness.

We can think of the random dice roll as a kind of input to our program. Even though the user did not directly enter the number, it is a kind of input that determines actions within the program.

No matter how small or large the input to our program we need to be thinking and strategizing about how to control randomness in our programming workflow, so that we give ourselves the ability to write the most correct programs.

In other words, we don't want to have to continue to enter and click the button until we reach a win state. \(what if we coded a 99 side dice? we'd be waiting forever\)

This game is very simple but as soon as things become more complicated we need to have a strategy for testing all the possible outcomes of the program- in this case it's to see `you win` when the number is guessed correctly.

We'll implement the strategy for getting to the winning condition in a simple way- getting rid of the randomness. We will cheat and fix the random number by changing my dice function like so:

```js
var diceRoll = function () {
  return 6;

  // produces a float between 0 and 7
  var randomFloat = Math.random() * 7;

  // take off the decimal
  var resultInteger = Math.floor(randomFloat);

  return resultInteger;
};
```

All we did was add line 2 for testing purposes. We'll take it out later, but for now it just circumvented the random input of the program.

Note that the return keyowrd also ends the execution of the function. `diceRoll` never runs beyond line 2.

We just have to remember to take it back out later!

## boolean values

Every boolean operator, just like addition and other math operators, produces a new value.

```js
// this is the result of number 1 math operator number 2
var myVal = 3 + 2;
```

```js
// this is the result of number 1 boolean operator number 2
var myVal = 3 == 2;
```

what's the value inside of `myVal` in this case?

We've seen numbers and strings. Boolean values are a 3rd kind of data we'll deal with. They **represent** a value that is true or false. Just like we can hold the rersult of a math operation, we can hold the result of a logical boolean operation.

```js
var userWin = true;
```

## Dice Version 2

Let's add another dice to the game.

In this first simple version of the game, the dice must roll to the same number in order for the player to win.

### AND operator

Use `&&` if both boolean statements are true.

#### Pseudo Code

```text
if:

the guess is equal to the first random number

AND

the guess is equal to the second random number

then the user wins.
```

#### JavaScript

```js
var main = function (input) {
  var randomDiceNumber1 = diceRoll();
  var randomDiceNumber2 = diceRoll();

  var myOutputValue = 'you lose';

  if (randomDiceNumber1 == input && randomDiceNumber2 == input) {
    myOutputValue = 'you win';
  }

  return myOutputValue;
};
```

## Dice Version 3

Let's add another rule: the user can't roll snakeeyes- two ones.

We'll add this rule that they can't win if the dice is snakeeyes.

### NOT operator

Use `!` to reverse a boolean statement.

#### Pseudo Code

```text
if:

the guess is equal to the first random number

AND

the guess is equal to the second random number

AND

the dice are NOT snake eyes

then the user wins.
```

####

## Condition Debugging

You've done your pseudo-code. You've written your JavaScript code. You've controlled your logic so it can be tested. Your code could still have errors in it!

How do you find where those errors are? Let's see some strategies for finding and diagnosing conditional errors, and some common conditional errors.

### deconstructing and checking your conditions

You are now constructing logical conditions that have several sub parts.

If you are not seeing the desired behavior what do you do?

Just like for any program you write you must deconstruct your code to check each part. You must do this in a methodical and correct way.

Errors in a conditional statement could be:

#### boolean expression is not reached

Use of `&&` instead of `||`.

#### boolean expression has a syntax error

Did you put `=` instead of `==`?

#### boolean expression is incorrectly stated

Does the logic say what you meant it to say?

#### Deconstruct a boolean statement with console.log

For a given statement like this one:

```js
if (
  randomDiceNumber == input ||
  randomDiceNumber + 1 == input ||
  randomDiceNumber - 1 == input
) {
  myOutputValue = 'you win';
}
```

We can simply look at each value and boolean expression value:

```js
console.log('random dice number:');
console.log(randomDiceNumber);
console.log('input');
console.log(input);
console.log('random dice equals input:');
console.log(randomDiceNumber == input);
console.log('random dice plus 1 equals input:');
console.log(randomDiceNumber + 1 == input);
console.log('random dice minus 1 equals input:');
console.log(randomDiceNumber - 1 == input);
```

Remember that it is very important to label your `console.log`s.

Also remember that if your label is wrong or if your statements in the `console.log` are different from your actual code, you now have an error in your debugging code as well, making your error twice as hard to find :\)

## Exercises

{% hint style="info" %}

### 1\) Duplicate and run the above code

### 2\) App

Create new versions of the dice game for each of these winning conditions.

_\(Note that you should manage your time so that you have time for next set of exercises as well! Leave time to move on to the other section.\)_

- User wins if guess is within 1 for any of 2 dice.
- User wins if guess is within 1 for all 2 dice.
- User wins if guess is within 1 but the user does not roll snake eyes.
- User wins if guess is within 1 or if the user rolls snake eyes.

{% endhint %}
