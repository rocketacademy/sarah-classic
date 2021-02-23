# Day 9: Moar Cards

## Introduction

Today we will practise objects. For each exercise, make a copy of the [starter code](https://github.com/rocketacademy/swe101-starter-code) as per instructions in [4.2: Our First Program](../4-getting-started-with-code/4.2-our-first-program.md#setup). Reminder to `npm install` to activate ESLint! Please switch driver and navigator each app. 

{% hint style="warning" %}
When cloning, put each app in a separate folder, like the folder structure in [Required Hardware and Software](../course-logistics/required-hardware-and-software.md#folder-structure-for-swe101). This is to avoid Git repos inside Git repos, which can cause problems with Git.
{% endhint %}

Feel free to copy the card shuffling function from [10.1: JavaScript Objects](../10-javascript-objects/10.1-javascript-objects.md#card-shuffling) and the deck generation function from [10.2: Card Deck Generation](../10-javascript-objects/10.2-card-deck-generation-with-loops.md). 

## Base

### Display Single Card

When the user clicks submit draw a single card from the deck and show it to them.

### Low Card

Implement the High Card game from [10.1: Objects](../10-javascript-objects/10.1-javascript-objects.md#high-card) with one difference: the winner is the person with the lowest card.

### Low Card with Queen Winner

Alter the Low Card game such that if any player draws a Queen, they win.

### Low Card Hands

At the beginning of the game the player can say how many cards they want. The lowest of the player's cards is compared against the computer card.

### Low Card Output

Implement a nice looking output for Low Card. Use a helper function to display each card nicely with emoji. \(♠️, etc.\).

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

Update Low Card with the following twist. At the beginning of the game, pick \(but do not draw\) a random card in the deck to be the Wild Card. If either player draws the Wild Card, that player automatically wins.

### Low Card with Player-Chosen Wild Card

Same rules as Low Card with Wild Card, except at the beginning of the game the player names a single card as input to be the Wild Card.

### **Low Card with Bets**

Allow the player to wager points on each round. Add a new mode for the beginning of each round where the player selects the number of points to wager. They win the wagered points if they win, and lose the points if they lose or draw. The player begins with 100 points.

### Low Card 2-Player Mode

2 human players play against each other. The computer draws 3 cards for each player at the start of the game. The players take turns playing 1 card from their hand at a time. For each card played per player, the lowest card wins. The player that wins the best of 3 wins overall. The grey box will tell the players to switch so they don't see each other's cards.

### Low Card 2-Player Mode with Pairs

Update the previous game logic such that if any player gets a pair in their hand, they win.

## Daily Feedback

Please [share feedback](https://forms.gle/gMd9ubfvX1x2GnHCA) on today's material. Thank you for making SWE101 great!

