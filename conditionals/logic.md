# Logic

So far what we have coded are basically calculators or, if the program deals with words, programs that fill in the blanks.

The next level of complexity is to create progams that, given some possible inputs, give output based on some logical decision.

### string comparison

Let's write a program that changes the output value of "hello world" if you type in a particular phrase.

```js
var main = function (input) {
  var myOutputValue = 'hello world';

  return myOutputValue;
};
```

#### if statement

An if statement is a control flow `block` that runs if a condition is `true`. We'll talk more about what specifically `true` means later, but you can see that what's happening is very intuitive.

```js
var main = function (input) {
  var myOutputValue = 'hello world';

  if (input == 'palatable papaya') {
    myOutputValue = 'you wrote the secret phrase!';
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

We're using the **boolean operator** `==` to test to see if `input` is **equal** to "palatable papaya".

#### try it yourself


## comments

Now that things are getting more complicated, we might want to leave notes to ourselves and others that say what our code does.

Comments let you write things in the code file that are just notes.

```js
// this won't actually run
```


#### randomness / dice

### randomness

Javascript language can produce random numbers using a build-in set of functions called `Math` (case-sensetive).

```js
var myRandomValue = Math.random();
```

Calling `Math.random()` returns a random number value. However we have a dice game, so there is more code we have to write to get the value we want.

#### `Math.random()` returns a number from 0-1.
We have to do some math on this number to get what we want.

We'll also be using another math functionality: `Math.floor()`.

We will use the code refered to on this [page.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

We can make a function that produces any random integer:
```js
var getRandomInteger = function (max) {
  // produces a float between 1 and max + .999999 etc.
  var randomFloat = (Math.random() * max) + 1;

  // take off the decimal
  var resultInteger = Math.floor(randomFloat);

  return resultInteger;
};
```

But what we are creating is a dice rolling game, so we can just make a dice function.


We can make a function that produces any random integer:
```js
var diceRoll = function () {
  // produces a float between 0 and 7
  var randomFloat = Math.random() * 7;

  // take off the decimal
  var resultInteger = Math.floor(randomFloat);

  return resultInteger;
};
```

### dice game

#### dice roll guess

Let's implement the rules to our game.

If the dice roll the same number as the user entered, they win.

```js
var main = function (input) {
  var randomDiceNumber = diceRoll();

  var myOutputValue = 'you lose';

  if (randomDiceNumber == input) {
    myOutputValue = 'you win';
  }

  return myOutputValue;
};
```

#### dice roll range

Let's change the game so that if the guess is within 1 the user still wins the game.

In order to encode this we need some other conditional structures- boolean operators.

#### logical expression translation

Before we talk about the syntax of these structures, let's talk about what kind of control flow we are trying to accomplish.

An english language specification for what behavior we want to see might be:

```
If the guess is correct the user wins.

If the guess is off by one, the user wins.
```

We can further break down the statement "off by one" to mean:

```
If the user guess plus one is equal to the random number, the user wins.
If the user guess minus one is equal to the number, the user wins.
```

So altogether we have:

```
If the guess is equal to the random number the user wins.
If the user guess plus one is equal to the random number, the user wins.
If the user guess minus one is equal to the random number, the user wins.
```

Notice how we are thinking about reformulating the sentences **describing** the behavior into a format that more closely resembles code:

```
If the guess is equal to the random number the user wins.
```

translates to:

```js
if (randomDiceNumber == input) {
  myOutputValue = 'you win';
}
```

### behavior into code

Note that one of the main difficulties of this course will be this step, which may be tangential to code **syntax**: translating the program's desired behavior into explicit (plain english) logical statements.

After enough practice it may be unneccesary to explicitly state the program logic. However, expert programmers still find it important to complete this part of the coding process. It is not something used only for beginners.

### logical operators

Now we have this specification:

```
If the guess is equal to the random number the user wins.
If the user guess plus one is equal to the random number, the user wins.
If the user guess minus one is equal to the random number, the user wins.
```

We could translate this to a series of `if` blocks:

```js
if (randomDiceNumber == input) {
  myOutputValue = 'you win';
}

if (randomDiceNumber + 1 == input) {
  myOutputValue = 'you win';
}

if (randomDiceNumber - 1 == input) {
  myOutputValue = 'you win';
}
```


To code this we'll introduce another logical control flow syntax- boolean operators. This allows us to create more complex logical statments and state this logic in a different way.

#### logical OR - any of these statements

Logical or allows us to combine together a bunch of individual boolean expressions.

In english it would look like:


```
If any of the following are true:

the guess is equal to the random number
the user guess plus one is equal to the random number
the user guess minus one is equal to the random number

then the user wins.
```

Or restated:
```
if:

the guess is equal to the random number

OR

the user guess plus one is equal to the random number

OR

the user guess minus one is equal to the random number

then the user wins.
```

#### syntax
Logical or is represented by `||`

So the final syntax looks like:

```js
if (randomDiceNumber == input || randomDiceNumber + 1 == input || randomDiceNumber - 1 == input) {
  myOutputValue = 'you win';
}
```

We'll find a use for the other logical operator AND (`&&`) in the next section.

#### input output control

Now that we've introduced the idea of randomness, we also need to talk about controlling that randomness.

We can think of the random dice roll as a kind of input to our program. Even though the user did not directly enter the number, it is a kind of input that determines actions within the program.

No matter how small or large the input to our program we need to be thinking and strategizing about how to control randomness in our programming workflow, so that we give ourselves the ability to write the most correct programs.

In other words, we don't want to have to continue to enter and click the button until we reach a win state. (what if we coded a 99 side dice? we'd be waiting forever)

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

#### Further Dice Conditions

Add a dice.

Correct within 2 for any of 2 dice
Correct within 2 for all 2 dice
Correct within 2 but not snake eyes.
Correct within 2 or snake eyes.


### boolean values

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

Boolean values are a 3rd kind of data we'll deal with. They **represent** a value that is true or false. Just like we can hold the rersult of a math operation, we can hold the result of a logical boolean operation.

## condition debugging

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


For a given statement like this one:

```js
if (randomDiceNumber == input || randomDiceNumber + 1 == input || randomDiceNumber - 1 == input) {
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

Also remember that if your label is wrong or if your statements in the `console.log` are different from your actual code, you now have an error in your debugging code as well, making your error twice as hard to find :)

#### refactor: value ranges -> less than more than

Given this code and pseudo code:

```
if:

the guess is equal to the random number

OR

the user guess plus one is equal to the random number

OR

the user guess minus one is equal to the random number

then the user wins.
```


```js
randomDiceNumber == input || randomDiceNumber + 1 == input || randomDiceNumber - 1 == input
```

Another way to state the same logic as before would be:

```
if:

the guess is within 1 of the dice number

then the user wins.
```

```
if:

the number minus 1 is equal or greater than guess

AND

the number plus one is equal or lesser than guess

then the user wins.
```

Translates to:

```js
randomDiceNumber - 1 >= guess && randomDiceNumber + 1 <= input
```

This logic states the same exact thing as our original logic, but it allows us to state a range (rather than +/- one)

```js
guess - 3 >= randomDiceNumber && input + 3 <= randomDiceNumber
```

We would have had to state each number value in the old example.

