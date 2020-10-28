# Day 9: Moar Cards

![](../.gitbook/assets/images-ccad.jpeg)

Begin by cloning a new copy of the [starter code.](https://github.com/rocketacademy/swe101-starter-code) Reminder to `npm install` to activate ESLint!

Copy the deck array and the card shuffle function from the [objects page](https://swe101.rocketacademy.co/10-javascript-objects/10-1-objects).

## Display a single card

When the user clicks submit draw a single card from the deck and show it to them.

## Low Card

Implement the High Card game from [10.1: Objects](../10-javascript-objects/10.1-objects.md#high-card) with one difference. The winner is the person with the lowest card.

## Low Card with Queen Winner

Alter the Low Card game. If any of the players draw a Queen, they win.

## Hands

At the beginning of the game the player can say how many cards they want. The highest card the player has is what's compared against the computer card.

## Output

Implement a nice looking output for the card game. Use a helper function to display each card nicely with emoji. \(♠️, etc.\).

Example:

```text
Player 1 drew:
1 of ♦️.

Player 2 drew:
6 of ♣️.

6 of ♣️ beats 1 of ♦!
Player 2 wins!
```

## **Wild**

Same rules as Low Card, with the following twist. At the beginning of the game, pick a random card in the deck to be the Wild Card. If either player draws the Wild Card, that player automatically wins the game.

## Wild - Player's Choice

Same rules as Wild, except at the beginning of the game the player names a single card as input to be the Wild Card.

## **Bets**

Allow the player to wager a number of points on each game. \(A new mode will be needed for the beginning of the game where the player selects the number of points to wager\). They lose the points if they lose or a draw, and double them if they win. The player begins with 100 points.

## Two-Player

Add another mode so that the game can be played by 2 players taking turns playing a card from their hand. The grey box will tell the players to switch so they don't see each other's cards.

## More Comfortable

### Pairs

If any player gets a pair in the cards they draw, they win.

## Daily Feedback

Please [share feedback](https://forms.gle/NK3mez8er7pPo7tu5) on today's material. Thank you for making SWE101 great!
