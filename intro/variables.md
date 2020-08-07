# variables

An abstract piece of data in a javascript program is called a variable.

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

**abstraction**

If we wanted the same result we can also write:

```javascript
var area = 3.14 * 4 * 4;
```

But this is not as _meaningful_ as our previous example.

Our programs must not only calculate values correctly, they must also represent the kinds of operations we are making- in this case calculating the area of a circle.

The name of our variables are giving meaning to what data our code contains.

