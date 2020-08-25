# 9.2: Loops

{% embed url="https://youtu.be/wn3G\_OO32kg" %}

We've defined an array and looked inside of it and added values, but we don't yet have anything that can deal with the entire array. Or specifically that can deal with **each** item in the array, when the array is an arbitrary length.

For that we are going to add the last control structure we'll use, **loops**.

In the context of games we'll see a few uses of loops that don't have to do with arrays, but from the point of view of software that manipulates input data, the concept of the loop is very much tied to the concept of the array.

A loop defines a **block** of code \(with curly braces\) that will run a set number of times.

A loop relies on a **condition** to tell it to keep running or not.

We'll look at loops in isolation first, then we'll see that they match up perfectly with how an array works.

## while

This is a loop that runs 10 times.

```javascript
var counter = 0;

while (counter < 10) {
  console.log('hello');

  counter = counter + 1;
}
```

### outputting program

Let's create a program that outputs things in a loop based on some input.

```javascript
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

### outputting program with logic

{% embed url="https://youtu.be/ozrUPHZWfIw" %}

Let's create a program that outputs things in a loop based on some input. If we put a conditional inside the loop we can have it output two types of things.

```javascript
var main = function (input) {
  var myOutputValue = '';

  var counter = 0;

  while (counter < input) {
    if( counter < 5 ){
      myOutputValue = myOutputValue + 'yes';
    }else{
      myOutputValue = myOutputValue + 'no';
    }
    counter = counter + 1;
  }

  return myOutputValue;
};
```

{% embed url="https://youtu.be/5qeXMmGRhZY" %}

### outputting program with dimensions

{% embed url="https://youtu.be/wxUafGMsOw4" %}

Let's create a program that outputs things in a loop based on some input. If we put another loop inside the loop we can represent other _lines_ of output.

Note we are using `<br>` to create a new line.

```javascript
var main = function (input) {
  var myOutputValue = '';

  var lineCounter = 0;

  while (lineCounter < input) {
    var columnCounter = 0;
  
    while (columnCounter < input) {
      myOutputValue = myOutputValue + 'x';

      columnCounter = columnCounter + 1;
    }

    // start a new line
    myOutputValue = myOutputValue + '<br>';
  
    lineCounter = lineCounter + 1;
  }

  return myOutputValue;
};
```

## Exercises

{% hint style="info" %}
**1\) Implement the above code.**
{% endhint %}



