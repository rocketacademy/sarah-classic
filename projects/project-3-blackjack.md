# Project 3: Blackjack

## Introduction

Implement a simplified version of Blackjack. If you're not familiar with Blackjack, refer to [this video](https://www.youtube.com/watch?v=eyoh-Ku9TCI) for game rules. Our simplified rules are the following.

1. There will be only two players. One human and one computer.
2. The computer will always be the dealer. The dealer has to hit if their hand is below 17.
3. The player who is closer to 21 wins the hand. Aces can be 1 or 11.

## Setup

Begin by forking the [Coding Basics Blackjack repo](https://github.com/rocketacademy/basics-blackjack). Once forked, clone your fork of the repo and work on that copy.

## Base

### Gameplay Description

The `main` function runs on each player's turn. The sequence of actions in the game might be the following.

1. Deck is shuffled.
2. User clicks Submit to deal cards.
3. The cards are analysed for game winning conditions, e.g. Blackjack.
4. The cards are displayed to the user.
5. The user decides whether to hit or stand, using the submit button to submit their choice.
6. The user's cards are analysed for winning or losing conditions.
7. The computer decides to hit or stand automatically based on game rules.
8. The game either ends or continues.

{% hint style="info" %}
Note that for the `main` function to perform different logic on user input, for example when a player decides to hit or stand, we may wish to consider using a new game mode.
{% endhint %}

### General Tips

1. Creating helper functions can be a powerful way to refactor your code and keep it neat.
2. Don't be afraid to throw away code, especially if you already know how you would write it better.
3. Commit your code often, whenever you have a small working version. For example, each action listed above would be a commit. Make concise and precise commit messages so that you can reference your old changes later.

### How to Prioritise Work

Given the above \*final\* action sequence to play a full game, how do we break these down into sub-features that we can work on \(and verify they are working\) one at a time? We want to work on features in small parts, but not have to redo any work as we expand the capability of the game, so we want to plan ahead to make sure we can start small and scaffold in the later features at the same time.

If you already have an effective strategy for creating your game, you can skip ahead. If you're not sure how to approach the game, try applying the following strategies to get started. The following are strategies for breaking down larger projects into smaller tasks to keep up progress, momentum, and motivation on the project. Please read to the end before starting.

#### First Version: Compare Initial Hands to Determine Winner

1. Aim for a playable game. A minimal version of Blackjack could just compare the ranks of the player's and dealer's cards. For now, we can leave out features such as Aces being 1 or 11, and the player and dealer choosing to hit or stand. Write pseudocode to guide your logic.
2. Compare the initially-drawn cards to determine a winner. Code with the understanding that your code will expand later to encompass other Blackjack functionality.
3. Test your code.

#### Second Version: Add Player Hit or Stand

1. The player hitting or standing is different from the dealer hitting or standing. The rules state that the dealer hits or stands after all players are done, so let's work on the players hitting or standing first.
2. The player hitting or standing is a new mode in the game that allows the player to enter their choice. Add the logic for when the player busts.
3. Refactor your logic to wait until the player is done to evaluate the game-winning condition.
4. Test your code.

#### Third Version: Add Dealer Hit or Stand

1. The rules state that the dealer hits after the player is done. After the player confirms they are done, add the logic for the dealer adding cards to their hand. This should happen before the winning condition.
2. Test your code.

#### Fourth Version: Add Variable Ace Values

1. Add logic to determine whether Aces should have value of 1 or 11 for a given hand.
2. Test your code.

## More Comfortable

### Better Output Formatting

Make the game output look cool. Can you represent cards with graphics? Ask the player their name?

### Betting

The player starts with 100 points. Each round the player wagers a number of points before their hand is dealt. Keep track of the player's points throughout the game.

### Multi-Player

Enable multiple players to play against the dealer, where players can take turns. The game hides and shows relevant hand according to the turn.

### Splits

Add hand-splitting functionality to the game. If the player has two of the same kind of card, they can choose to split and get dealt 2 new cards. Full splitting rules [here](https://en.wikipedia.org/wiki/Aces_and_eights_%28blackjack%29#Splitting). Dealer is not allowed to split.

## Submit

[Push](../7-github/7.1-github-fork-and-pull-request.md#git-push) the commits in your local repo to GitHub.

[Create a pull request](../7-github/7.1-github-fork-and-pull-request.md#github-pull-request) to submit your assignment.

Please leave your name and section number in the _**title**_ of the pull request.

Please fill in the questionnaire in the pull request comments when you submit.

## Reference Solution

The reference solution implements the Base functionality. Please only refer to the reference solution after you have attempted the project. Note that there are many ways to implement the project and the reference solution is only 1 way.

[https://github.com/rocketacademy/basics-blackjack/pull/3/files](https://github.com/rocketacademy/basics-blackjack/pull/3/files)

{% hint style="danger" %}
**Rocket Academy does not endorse gambling.** We chose Blackjack as a project because of its complex rules that help facilitate coding instruction.
{% endhint %}

