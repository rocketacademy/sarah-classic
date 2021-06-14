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

When outputting game results in the output box, also output a leaderboard that lists the players and their scores \(in any order\).

### Auto-Choose

Update the game to auto-generate the highest combined number from dice rolls. For example, for dice rolls `[2, 3, 1, 6]`, the game would auto-generate the combined number `6321`.

### Lowest Combined Number Mode

Add a game mode such that the player with the lowest combined number is the winner.

### Variable Number of Players

Allow more than 2 players to play Beat That in a single game. At the beginning of the game, ask how many players would like to play.

### Variable Number of Dice

#### Requirements

1. Create a new version of Beat That that rolls two or more dice per player.
2. At the beginning of the game, the game asks the user how many dice they want to play with.
3. Each player's dice rolls can be stored in an array.
4. When a player rolls dice, use a loop to place `n` dice roll values in that player's array, where `n` is the number of dice the user specifies at the beginning of the game. Output the dice roll values.
5. To specify the order of the dice rolls to generate the combined number, the user will input the a sequence of digits that correspond to the indexes of the player's dice roll array. For example, if a player's dice roll array contains `[2, 3, 1, 6]` and the player inputs `3102` to generate the combined number, this means the 1st digit in the combined number is at index 3, the 2nd digit is at index 1, the 3rd digit is at index 0, and the 4th digit is at index 2. This would generate the combined number `6321`.

#### Hints

1. To convert the player's input into a combined number, we can convert the player's input into a series of indexes. JavaScript's [String `split` method](https://www.w3schools.com/jsref/jsref_split.asp) may be helpful. For example, `input.split('')` creates an array where each element is a character in `input`. If `input` were `"3102"`, then `input.split('')` would return `['3', '1', '0', '2']`. We could then use JavaScript's [Array `map` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to convert this array of strings into an array of numbers. For example, `['3', '1', '0', '2'].map(Number)` would return `[3, 1, 0, 2]`.
2. Once we have the array of indexes, we could then loop over the array of indexes to construct the combined number. Consider the following code.

```javascript
const indexesArray = input.split('').map(Number);
const combinedNum = 0;
for (var i = 0; i < indexesArray.length; i += 1) {
  // Multiply combinedNum by 10 to shift all existing digits to the left by 1 digit.
  // Then add the current digit from diceRollArray to combinedNum.
  // Repeat this for however many digits there are in indexesArray.
  // indexesArray and diceRollArray should be the same length.
  combinedNum = combinedNum * 10 + diceRollArray[indexesArray[i]];
} 
```

### Knockout Mode

Create a mode where if there are more than 2 players, the game can match players against each other 1 at a time until there is 1 final winner. For example, if there are 4 players, the game might first match players 1 and 2. If player 1 wins, the game might then match players 1 and 3. The winner of that match would then play player 4, and the winner of that final round would be the ultimate winner.

## Submit

1. [Push](../7-github/7.1-github-fork-and-pull-request.md#git-push) the commits in your local repo to GitHub.
2. [Create a pull request](../7-github/7.1-github-fork-and-pull-request.md#github-pull-request) to submit your assignment.
3. Please leave your name and section number in the _**title**_ of the pull request.
4. Please fill in the questionnaire in the pull request comments when you submit.

## Reference Solution

The reference solution implements the Base functionality. Please only refer to the reference solution after you have attempted the project. Note that there are many ways to implement the project and the reference solution is only 1 way.

[https://github.com/rocketacademy/basics-beat-that/pull/10/files](https://github.com/rocketacademy/basics-beat-that/pull/10/files)

