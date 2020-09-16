# Project 4: Blackjack Part 1

![](../.gitbook/assets/images-bj.jpeg)

In this first part of the Blackjack project you'll build the gameplay logic.

Begin the app by **forking** this repo: [https://github.com/rocketacademy/swe101-blackjack](https://github.com/rocketacademy/swe101-blackjack)

## Gameplay

If you haven't played Blackjack before, refer to [this video](https://www.youtube.com/watch?v=eyoh-Ku9TCI) to see what the rules of the game are.

For the purposes of the project we will simplify the rules and the gameplay.

There will be only two players. One human and one computer.

The computer will always be the dealer. The dealer has to hit if their hand is below 17.

The player who is closer to 21 wins the hand. Aces can be 1 or 11.

## How to Start

We know that the gameplay turns will be represented by the `main` function.

**The sequence of actions would be:**

* Deck is shuffled.
* User clicks submit button to deal cards.
* The cards are analyzed for any game winning conditions. \(Blackjack\)
* The cards are displayed to the user.
* Then begins a new action, where the user has to decide something: do they hit or stand.
* The computer also decides to hit or stand.

_For the user choice to hit or stand, we know that when a new action of the user has different logic means that the game must have a mode to deal with this._

When the user makes a decision the cards are analyzed for any winning conditions.

They are also analyzed for losing conditions, since it's possible for any player to lose now.

Either the game ends or continues.

## More Comfortable

### Splits

Add hand splitting functionality to the game. Splitting rules [here](https://en.wikipedia.org/wiki/Aces_and_eights_%28blackjack%29#Splitting). Dealer is not allowed to split.

If the player has two of the same kind of card, they can choose to split and get dealt 2 new cards.

## Reference Solution

Please only refer to the reference solution after you have attempted the project. Thank you!

Note that there are many ways to implement the project and the reference solution is only 1 way.

[https://github.com/rocketacademy/swe101-blackjack/pull/3/files](https://github.com/rocketacademy/swe101-blackjack/pull/3/files)

