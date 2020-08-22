# 9.1: Arrays

We've been able to build rather complex programs using some basic control flow syntax.

Now we're going to add in a new type of data- dynamic length data **arrays**. Then we'll talk about the manipulation of this kind of data using the control structure **loops**.

Just like each of the new concepts that we've added, the mechanics are simple, but what we will be able to build can increase in complexity by a large amount.

## Data Collections

So far each kind of data value we have dealt with could be contained inside a single variable:

* `myOutputValue`
* `input`
* `randomDiceNumber`

We are going to expand our capacity to deal with data to talk about **variable-length data collections**.

That is to say the idea that we can represent a series of values of a **type** of data.

## Arrays

An array is a value that hold other individual values.

We use an array to represent the idea of a collection of single values of the same kind.

There are two sub-types of values we can represent in an array:

#### Collections

Data values of the same kind collected together:

```javascript
var daysOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
```

```javascript
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
```

```javascript
var dailyAverageTemperatureLastWeek = [30, 32, 29, 34, 36, 38, 32];
```

#### dynamic length data

This is a type of data collected together but this data collection does not have a set length.

```javascript
var winningDiceGuesses = [3, 4, 2, 1, 4];
```

```javascript
var salesThisMonth = [34, 23, 12, 78, 56];
```

## Array Data Properties

Data in arrays can imply a few different things about the properties of that data:

### position

Acessing an array is done through **indexes**- the position of each item in the array.

Confusingly, the _number_ of the first item in an array is always 0 \(zero\).

```text
  0   1   2
['a','b','c']
```

In the case above the 3rd bucket, or location, or **index** of this letter array is `2`:

```javascript
var letters = ['a', 'b', 'c'];
var value = letters[2];
```

Square bracket syntax gives us the value at that location of the array `letters`.

Position implies that for any array `0` will always be the first, left-most location in the array and the last item is the right-most position in the array.

### order

```javascript
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
```

The array above signifies that "a" is before "b". \(and also that index 0 is before index 1\)

## Array Data Manipulation

Let's talk about how to put data into an array, how to get it out, and some of the implications of those actions.

```javascript
var letters = ['a', 'b', 'c'];
var value = letters[2];
```

Notice that this code above doesn't manipulate the values in the array. It puts the value in the third index into a new variable, but is not destructive to the array.

If we want to manipulate the values in an array there are a few methods:

## manipulation in place

Create an array with values inside:

```javascript
var temperatures = [23, 43];
```

Manipulate the values inside the array:

reassign the values in the array after it's been created.

```javascript
temperatures[0] = 9999999;
```

### push and pop

Push: Add new values to an array after it's been created.

```javascript
var temperatures = [23, 43];
```

```javascript
temperatures.push(33333333);
```

Push is a function that takes as an argument the value you want to be put in the array. Notice that the new value is added to the end of the array.

Pop: take the last value out of the array.

```javascript
var temperatures = [23, 43];
```

```javascript
var lastValue = temperatures.pop();
```

Note that the last value in the array is inside of `lastValue` **and** that value has been removed from the array.

## user input accesses array values

Let's implement a shell game with this idea.

```javascript
var getRandomInteger = function (max) {
  // produces a float between 0 and max + .999999 etc.
  var randomFloat = (Math.random() * max);

  // take off the decimal
  var resultInteger = Math.floor(randomFloat);

  return resultInteger;
};

var shells = ['empty', 'empty', 'empty'];

var randomBallLocation = getRandomInteger(3);

shells[randomBallLocation] = 'win';

var main = function (input) {
  var myOutputValue = 'sorry wrong guess';

  if (shells[input] == 'win') {
    myOutputValue = 'you found the shell, you win!';
  }

  return myOutputValue;
};
```

## user input adds to array

Let's implement a dice game that keeps track of every guess the user makes.

\`\`\`javascript var guesses = \[\];

var main = function \(input\) { guesses.push\(input\);

var randomDiceNumber = diceRoll\(\);

var myOutputValue = 'you lose. Your guesses: ' + guesses;

if \(randomDiceNumber == input\) { myOutputValue = 'you win. Your guesses: ' + guesses; }

return myOutputValue; };

