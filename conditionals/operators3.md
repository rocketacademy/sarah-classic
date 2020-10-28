# Boolean Comparison - Less Than / More Than

## Dice Game Part III: Easy Dice

Let's make our dice game much easier by making the margin of error **n** larger- if `n` is 2, and the user guesses 4 and the dice rolls 4 the user still wins.

Our current pseudo code and JavaScript looks like this:

```text
if:

the guess is equal to the random number

OR

the user guess plus one is equal to the random number

OR

the user guess minus one is equal to the random number

then the user wins.
```

```javascript
randomDiceNumber == input ||
  randomDiceNumber + 1 == input ||
  randomDiceNumber - 1 == input;
```

We want to be able to write logic where the user is within 2-

Another way to state the same logic as before would be:

```text
if:

the guess is within 2 of the dice number

then the user wins.
```

```text
if:

the number minus 2 is equal or greater than guess

AND

the number plus 2 is equal or lesser than guess

then the user wins.
```

Translates to:

```js
randomDiceNumber - 2 >= guess && randomDiceNumber + 2 <= input;
```

This logic states the same exact thing as our original logic, but it allows us to state a range \(rather than +/- one\)

```js
guess - 3 >= randomDiceNumber && input + 3 <= randomDiceNumber;
```

We would have had to state each number value in the old example.
