# 8.3: Input Validation

Right now when the user enters a dice number guess the app doesn't restrict them from entering `"bananas"` or 38373 or any other value besides one to six.

In this case, there won't be any errors with the code, or any behaviors we don't want. But we may want to give the user feedback that their input was invalid for the program.

\(There will be a lot of other cases where a wrong type of input _will_ cause syntax errors or unexpected behavior\).

First let's see how we can detect if the user typed in a number, then we'll detect if they type in the range we want \(1-6\).

## Number vs. String

Remember that we've covered 3 basic data types in JavaScript- _booleans_, _numbers_, and _strings_.

When running the `main` function \(clicking the submit button\), the `input` parameter will always be a _string_ data type. The `input` string may sometimes **contain** number **characters** - e.g. "5" or "9383733" or combination of letter characters with number characters e.g., `"SWE101"`.

How do we know if the characters in the `input` string are **only** numbers?

We can try to convert from a string type into number type. If the value has only number characters in it, JavaScript will convert it for you.

```js
var input = '444';
Number(input);
```

## NaN

{% embed url="https://youtu.be/P24Rp6HmMkM" %}

When we try to convert a value that isn't only numbers we get `NaN`.

```js
var input = 'papayas';
Number(input);
```

This value also occurs when we attempt a math operation that doesn't result in a number.

```js
2 * 'chocolate'
```

```js
'dogs' / 32
```

```js
0 / 0
```

Note that `NaN` _is_ a value unto itself, like `0` or `1`. We can take that value and hold it in a variable:

```js
var count = NaN;
```

```js
var count = 'papayas' * 12;
```

```js
var input = 'papayas';
var inputCount = Number(input);
```

## NaN Number Logic

We can now use this behavior to write logic that says:

> If we try to convert a value to a number and we get the result NaN, then the value is not a number.

\(Note that there is no way to check the positive case, that converting a string to a number went as planned\).

## isNaN

{% embed url="https://youtu.be/6RMjO0FbyQc" %}

Our logic says that we must check to see if the value we get out of the conversion is `NaN`.

A quirk of JavaScript means that we **can't** do this:

```js
// this will say FALSE, which is incorrect
Number('bananas') == NaN
```

We need a separate function that returns a boolean value, `isNaN`. This function is built into javascript.

```js
var input = 'hello';

var result = Number(input);

console.log(isNaN(result));
```

All together with a conditional it would look like:

```js
if ( isNaN( Number(input) ) == true ) {
  myOutputValue = 'sorry please enter a number.';
} else {
...
```

## Dice Game

### Conditional Range

{% embed url="https://youtu.be/mjkj-OfCLKc" %}

Let's check the input to make sure it is between 1 and 6.

We could write a long conditional like so:

```js
if( input == '1' || input == '2' || .... etc
```

Or we could express this condition with `<` and `>`.

```js
// if number is greater or equal to 1 OR less than or equal to 6
if (input >= 1 || input <= 6) {
  // number is between 1 and 6
}
```

Note that the behavior of the code is **exactly** the same, perhaps simply easier to understand and easier to write, and **much** easier to write in the case that you have something like a 20 sided dice.

There are a couple of different ways to express this same condition. You can also use `<` and `>` like we did below to express the opposite.

### Final Game Code

The full dice game would look like this:

```js
var diceRoll = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's anumber from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var main = function (input) {
  var myoutputvalue = '';

  // before anything check if the input is a number
  if (isNaN(Number(input)) == true) {
    myOutputValue = 'sorry please enter a number.';
  } else {
    // it's not between 1 and 6
    if (input < 1 || input > 6) {
      myoutputvalue = 'sorry please enter a number from 1 - 6';
    } else {
      // the input is 1-6, go ahead with the dice game

      var randomdicenumber = diceroll();

      if (randomdicenumber == input) {
        myoutputvalue = 'you win';
      } else {
        myoutputvalue = 'you lose';
      }
    }
  }

  return myoutputvalue;
};
```
