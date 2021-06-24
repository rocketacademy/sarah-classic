# Project 2: Beat That!

## Introduction

Create a version of the Beat That dice game, where players create the largest number they can by concatenating random dice roll digits. Read the rules for Beat That [here](https://www.activityvillage.co.uk/beat-that).

## Setup

Begin by forking the [Coding Basics Beat That repo](https://github.com/rocketacademy/basics-beat-that). Once forked, clone your fork of the repo and work on that copy.

## Base

### Requirements

1. There are 2 players and players take turns.
2. When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
3. The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.
4. After both players have rolled and chosen dice order, the player with the higher combined number wins.

### Example

Player 1 rolls 2 dice with dice rolls 3 for Dice 1 and 6 for Dice 2.

```text
Welcome Player 1.
You rolled 3 for Dice 1 and 6 for Dice 2.
Choose the order of the dice.
```

Player 1 can pick either Dice 1 or Dice 2 as the first numeral of the combined number.

```text
Player 1, you chose Dice 2 first.
Your number is 63.
It is now Player 2's turn.
```

Player 1 picked Dice 2 as the 1st numeral and Dice 1 as the 2nd, thus generating the combined number 63. Player 2 then rolls 2 dice and tries to generate a number greater than 63.

## More Comfortable

### Score

Keep score for each player. The score is the running sum of all numbers that player has generated so far. This means there is no permanent winner, only a temporary leader.

### Leaderboard

When outputting game results in the output box, also output a leaderboard that lists the 2 players and their scores in decreasing order.

### Lowest Combined Number Mode

Add a game mode such that the player with the lowest combined number is the winner.

### Auto-Generate Combined Number

Update the game to auto-generate the highest \(or lowest\) combined number from dice rolls. For example, for dice rolls `[6, 3]` in Lowest Combined Number mode, the game would auto-generate the combined number `36`.

### Variable Number of Dice

1. Create a new version of Beat That that rolls two or more dice per player.
2. At the beginning of each round, ask the players how many dice they would like to play with. Both players will roll the same number of dice each round.
3. Store each player's dice rolls in an array. When each player rolls dice, use a loop to place `n` dice roll values in that player's array, where `n` is the number of dice the players specified at the beginning of the round. Output each player's dice roll values.
4. Auto-generate the optimal combined number based on each player's dice rolls to determine the winner of that round.

### Variable Number of Players

Allow more than 2 players at a time to play Beat That. At the beginning of the game, ask how many players would like to play. For a variable number of players, feel free to output the leaderboard in any order, because implementing the leaderboard in decreasing order requires advanced logic.

### Knockout Mode

Create a mode where if there are more than 2 players, the game can match players against each other 1 at a time until there is 1 final winner. For example, if there are 4 players, the game might first match players 1 and 2. If player 1 wins, the game might then match players 1 and 3. The winner of that match would then play player 4, and the winner of that final round would be the ultimate winner.

## Submit

1. [Push](../7-github/7.1-github-fork-and-pull-request.md#git-push) the commits in your local repo to GitHub.
2. [Create a pull request](../7-github/7.1-github-fork-and-pull-request.md#github-pull-request) to submit your assignment.
3. Please leave your name and _**section number**_ in the _**title**_ of the pull request.
4. Please fill in the questionnaire in the pull request comments when you submit.

## Reference Solution

Please only refer to the reference solution after you have attempted the project. Note that there are many ways to implement the project and the reference solution is only 1 way.

1. [Base](https://github.com/rocketacademy/basics-beat-that/pull/10/files)
2. [Auto-Generate Combined Number](https://github.com/rocketacademy/basics-beat-that/blob/moreComfortable-autoGenerateCombinedNum/script.js) \(includes Score, Leaderboard, and Lowest Combined Number Mode\)
3. [Variable Number of Dice](https://github.com/rocketacademy/basics-beat-that/blob/moreComfortable-variableNumDice/script.js)
4. [Variable Number of Players](https://github.com/rocketacademy/basics-beat-that/blob/moreComfortable-variableNumPlayers/script.js)
5. [Knockout mode](https://github.com/rocketacademy/basics-beat-that/blob/moreComfortable-knockout/script.js)

