# Day 9: Moar Cards

## Introduction

Today we will practise JavaScript Objects. For the 1st exercise, make a copy of the [starter code](https://github.com/rocketacademy/basics-starter-code) as per instructions in [4.2: Our First Program](../4-getting-started-with-code/4.2-our-first-program.md#setup). For subsequent exercises, feel free to comment out your previous exercise code and create a new `main` function for the new exercise. Reminder to `npm install` to activate ESLint! Please switch driver and navigator each app.

{% hint style="warning" %}
When cloning, put each app in a separate folder, like the folder structure in [Required Hardware and Software](../course-logistics/required-hardware-and-software.md#folder-structure-for-coding-basics). This is to avoid Git repos inside Git repos, which can cause problems with Git.
{% endhint %}

## Base

Feel free to copy the card deck generation function from [10.2: Card Deck Generation](../10-javascript-objects/10.2-card-deck-generation-with-loops.md#card-deck-generation-code) and the card shuffling functions from [10.1: JavaScript Objects](../10-javascript-objects/10.1-javascript-objects.md#card-shuffling) into your `script.js` file.

### Display Single Card

Build an app using the Basics Starter Code and the deck functions from Modules 10.1 and 10.2 such that when the user clicks Submit, draw a single card from a shuffled deck and show it to them.

### Low Card

Implement the High Card game from [10.1: Objects](../10-javascript-objects/10.1-javascript-objects.md#high-card) with 1 difference: the winner is the person with the lowest card. Feel free to start with the code from Module 10.1 and modify it if that's easier. You may wish 

### Low Card with Queen Winner

Alter the Low Card game such that if any player draws a Queen, they win.

### Low Card Hands

The player can input how many cards they want. The lowest of the player's cards is compared against the computer card. Show the player all the cards that she drew. Rules from above exercises continue to apply.

### Low Card Suit Output

Implement a nice-looking output for Low Card. Use a helper function to display each card nicely with emoji \(♠️, ♥️, etc.\). Try to avoid repeating code if possible.

Example:

```text
Player 1 drew:
1 of ♦️.

Player 2 drew:
6 of ♣️.

6 of ♣️ beats 1 of ♦!
Player 2 wins!
```

## More Comfortable

### **Low Card with Wild Card**

Update our latest Low Card implementation with the following twist. At the beginning of the game, pick \(but do not draw\) a random card in the deck to be the Wild Card. If either player draws the Wild Card, that player automatically wins.

### Low Card with Player-Chosen Wild Card

Same rules as Low Card with Wild Card, except at the beginning of the game the player names a single card as input to be the Wild Card. The Wild Card can be identified with a card name and suit.

### **Low Card with Bets**

Allow the player to wager points on each round. Add a new mode for the beginning of each round where the player selects the number of points to wager. They win the wagered points if they win, and lose the points if they lose or draw. The player begins with 100 points. After each round, output the player's remaining points.

### Low Card 2-Player Mode

2 human players play against each other. The computer draws 3 cards for each player at the start of the game. The players take turns playing 1 card from their hand at a time. For each card played per player, the lowest card wins. The player that wins the best of 3 wins overall. The grey box will tell the players to switch so they don't see each other's cards.

### Low Card 2-Player Mode with Pairs

Update the previous game logic such that if any player gets a pair in their hand, they win.

## Reference Solutions

[Here](https://github.com/rocketacademy/basics-starter-code/blob/day9/script.js) is a reference solution for Day 9 exercises. Please only view the reference solution for each exercise after you have attempted the exercise yourself. Note that there are many ways to implement these solutions and the reference solution is only 1 way.

## Daily Feedback

Please [share feedback](https://forms.gle/gMd9ubfvX1x2GnHCA) on today's material. Thank you for making Coding Basics great!

