# 9.1: Arrays

{% embed url="https://youtu.be/CI09j\_aHLE0" %}

We've been able to build rather complex programs using some basic control flow syntax.

Now we're going to add in a new type of data- dynamic length data **arrays**. Then we'll talk about the manipulation of this kind of data using the control structure **loops**.

Just like each of the new concepts that we've added, the mechanics are simple, but what we will be able to build can increase 

in complexity by a large amount.

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

When creating the logic for our programs, a central decision we must make is how to represent our data using the syntax structures we have at our disposal. When talking about the JavaScript array type, there are two sub-types of values we can **represent** using the array:

### Static Collections

We can represent data values of the same kind collected together. These are values that will never change.

#### Hold a list of the names of every day in the week.

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

**Hold a list of all letters in the alphabet.**

```javascript
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
```

### Static Length Collections

We can represent data values of the same kind collected together. These are values where the _amount_ of data will never change.

**Record a temperature for each day of the week.**

```javascript
var dailyAverageTemperatureLastWeek = [30, 32, 29, 34, 36, 38, 32];
```

### Dynamic Length Data

We can represent data that our program needs to alter as it runs. The program is responsible for keeping track of these data values, and making the array grow larger or smaller. 

**Record a list of all guesses a user makes in the game.**

```javascript
var winningDiceGuesses = [3, 4, 2, 1, 4];
```

#### List of the sales recorded up to the current day \(whichever current date this program runs\).

```javascript
var salesThisMonth = [34, 23, 12, 78, 56];
```

## Array Data Properties

When talking about arrays, we need to understand what unique properties they have that will allow us to represent new kinds of data.

Data in arrays can imply a few different things about the properties of that data:

### Position

Accessing an array is done through **indexes**- the position of each item in the array.

```text
  0   1   2
['a','b','c']
```

In the case above the 3rd bucket, or location, or **index** of this letter array is `2`

> \(Confusingly, the _number_ of the first item in an array is always 0 \(zero\).

```javascript
var letters = ['a', 'b', 'c'];
```

```javascript
var value = letters[2];
```

Square bracket syntax gives us the value at that location of the array `letters`.

**Position** implies that for any array `0` will always be the first, left-most location in the array and the last item is the right-most position in the array.

{% hint style="info" %}
What happens when you try to access an array element that doesn't exist? 

```javascript
letters[234534534534];
```
{% endhint %}



### Order

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

### Data Manipulation in Place

Create an array with values inside:

```javascript
var temperatures = [23, 43];
```

Manipulate the values inside the array- Reassign the values in the array after it's been created:

```javascript
temperatures[0] = 9999999;
```

#### User Input Accesses Array Values

```javascript
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var main = function (input) {
  var myOutputValue = 'your letter: ' + letters[input];

  return myOutputValue;
};
```

### Adding and Subtracting From an Array

#### `push()`and `pop()`

**Push**: _add new values to an array after it's been created._

```javascript
var temperatures = [23, 43];
```

```javascript
temperatures.push(33333333);
```

Push is a function that takes as an argument the value you want to be put in the array. Notice that the new value is added to the end of the array.

**Pop**: _take the last value out of the array._

```javascript
var temperatures = [23, 43];
```

```javascript
var lastValue = temperatures.pop();
```

_Note that the last value in the array is inside of `lastValue` **and** that value has been removed from the array._

## User Input Adds to Array

Let's implement a dice game that keeps track of every guess the user makes.

```javascript
var guesses = [];

var main = function (input) {

    guesses.push(input);
    
    var randomDiceNumber = diceRoll();
    
    var myOutputValue = 'you lose. Your guesses: ' + guesses;
    
    if (randomDiceNumber == input) {
        myOutputValue = 'you win. Your guesses: ' + guesses;
    }
    
    return myOutputValue;
};
```



## Exercises

{% hint style="info" %}
**1\) Implement the above code.**
{% endhint %}



