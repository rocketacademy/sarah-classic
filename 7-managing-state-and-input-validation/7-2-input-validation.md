# 7.2: Input Validation

When you bet in our dice betting game and, instead of a number, you type `papaya!` what will happen?

For a real program, it must deal with all possible values that the user enters.

In this particular case, if the user enters something that's not a number we get an output of `NaN`.

### NaN

This value occurs when we attempt a math operation that doesn't result in a number.

```text
2 * 'chocolate'
```

```text
'dogs' / 32
```

```text
0/0
```

The way to prevent this is to check `input` as soon as we can and make sure that it's a number.

Remember that just like in these examples, the `input` parameter is **always** a string data type.

```javascript
var input = '444';
Number(input);
```

```javascript
var input = 'hello';
Number(input);
```

### isNaN

Next we need to write a piece of code that tests to see the result of `Number()`.

Unfortunately we need another function for that, `isNaN`.

```javascript
var input = 'hello';

var result = Number(input);

console.log(isNaN(result));
```

All together with a conditional it would look like:

```javascript
if (mode == 'bet') {
  if (isNaN(Number(input)) == true) {
    myOutputValue = 'sorry please enter a number.';
  } else {
    myOutputValue = 'you bet ' + input;
    currentBet = input;
  }
}
```

We want to message the user when something goes wrong and also to deal when it's a normal case, so we use an `if` `else` structure.

Note that for brevity's sake we won't implement input checking in most of our examples, but that it should be an integral part of a real program.

