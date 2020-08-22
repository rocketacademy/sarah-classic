# 6.2: Pseudo Code, Boolean Or

{% embed url="https://youtu.be/3QgxbnIOYnw" caption="" %}

Let's change the game so that if the guess is within 1 the user still wins the game.

In order to encode this we need some other conditional structures- _boolean operators_.

## Logical Expression Translation: Pseudo Code

Before we talk about the syntax of these structures, let's talk about what kind of control flow we are trying to accomplish.

An english language specification for what behaviour we want to see might be:

```text
If the guess is correct the user wins.

If the guess is off by one, the user wins.
```

We can further break down the statement "off by one" to mean:

```text
If the user guess plus one is equal to the random number, the user wins.
If the user guess minus one is equal to the number, the user wins.
```

So altogether we have:

```text
If the guess is equal to the random number the user wins.
If the user guess plus one is equal to the random number, the user wins.
If the user guess minus one is equal to the random number, the user wins.
```

Notice how we are thinking about reformulating the sentences **describing** the behavior into a format that more closely resembles code:

```text
If the guess is equal to the random number the user wins.
```

translates to:

```js
if (randomDiceNumber == input) {
  myOutputValue = 'you win';
}
```

### Behaviour Into Code

Note that one of the main difficulties of this course will be this step, which may be tangential to code **syntax**: translating the program's desired behavior into explicit \(plain english\) logical statements.

After enough practice it may be unneccesary to explicitly state the program logic. However, expert programmers still find it important to complete this part of the coding process. It is not something used only for beginners.

## Logical Operators

Now we have this specification:

```text
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

### Logical OR: Any of These Statements

Logical or allows us to combine together a bunch of individual boolean expressions.

In english it would look like:

```text
If any of the following are true:

the guess is equal to the random number
the user guess plus one is equal to the random number
the user guess minus one is equal to the random number

then the user wins.
```

Or restated:

```text
if:

the guess is equal to the random number

OR

the user guess plus one is equal to the random number

OR

the user guess minus one is equal to the random number

then the user wins.
```

### Syntax

Logical OR is represented by `||`

So the final syntax looks like:

```js
if (randomDiceNumber == input || randomDiceNumber + 1 == input || randomDiceNumber - 1 == input) {
  myOutputValue = 'you win';
}
```

We'll find a use for the other logical operator AND \(`&&`\) in the next section.

## Exercises

{% hint style="info" %}

### **1\) Duplicate and run the code above.**

### **2\) Apps**

For each app `clone` a new copy of the starter code using git.

#### **Secret Words**

Change the original secret word program so that the user could enter more than one secret word- they can enter "neat noodles", "awesome ayam", "delicious dumplings" or the original word to see the secret message.

#### **Easier Dice Game**

Change the dice game so that it's even easier. If the user guess is within 2 of the dice roll, they still win.

#### **Even Easier Dice Game**

The user can guess by putting in one of two values: "odd" or "even". They win if the dice roll is odd or even.

### More Comfortable

#### **Combo Game**

Change your dice game so that if the user types in "palatable papaya" instead of a dice guess, they also win.

#### **Even Easier Dice Game Refactor**

There is a way to mathematically verify that a number is even using the `%` operator - the modulus operator. Google the solution to tell if a number is even in JavaScript, and what the modulus operator does and refactor the logic in the game to use it.
{% endhint %}
