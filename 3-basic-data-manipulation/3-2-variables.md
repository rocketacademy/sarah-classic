# 3.2: Variables

{% embed url="https://youtu.be/mBZrHgAja78" caption="" %}

## What are Variables

An abstract piece of data in a program is called a variable.

```javascript
var pi = 3.14;
```

We name a variable and we associate a specific data value with it.

We use a variable to represent some data that our program will process.

```javascript
var radius = 4;
```

Using these 2 data values we can calculate the area of this circle:

```javascript
pi * radius * radius;
```

We can also use variables to capture that calculated value:

```javascript
var area = pi * radius * radius;
```

## **The Importance of Abstraction**

If we wanted the same result we could also write:

```javascript
var area = 3.14 * 4 * 4;
```

But this would not be as _meaningful_ as our previous example.

Our programs must not only _calculate_ values correctly, they must also _represent_ the kinds of operations we are making- in this case calculating the area of a circle.

The names of our variables give meaning to the data our code contains.

{% hint style="info" %}
### Using just the dev tools console, write code for each representation of the following

Use descriptive variable names that explain what you are calculating.

When you are done, paste the code into a slack message to yourself.

* the circumference of a circle
* conversion of celsius to Fahrenheit
* volume of a cube
* for a given rise and run, the percentage grade of a road
* milliliters to pints
{% endhint %}

