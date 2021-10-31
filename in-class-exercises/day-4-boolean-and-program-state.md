# Day 4: GitHub, Program State

## Introduction

Today we will practise the GitHub fork and pull request workflow, and program state. For each exercise, make a copy of the [starter code](https://github.com/rocketacademy/basics-starter-code) as per instructions in [4.2: Our First Program](../4-getting-started-with-code/4.2-our-first-program.md#setup). Please switch driver and navigator each exercise.

{% hint style="warning" %}
When cloning the starter code, put each exercise in a separate folder, like the folder structure in [Required Hardware and Software](../course-logistics/required-hardware-and-software/#folder-structure-for-basics). This is to avoid Git repos inside Git repos, which can cause problems with Git.
{% endhint %}

## Base

### GitHub Fork and Pull Request

Follow the ["fork and pull request" workflow](../7-github/7.1-github-fork-and-pull-request.md#cheatsheet) for the following Secret Word app. This is to practise this workflow for the current Scissors Paper Stone project, so everyone knows how to set up and submit their assignment. This is the same workflow that developers use when submitting changes to open source (publicly-developed) projects.

1. Fork the [`basics-github-practice` repo](https://github.com/rocketacademy/basics-github-practice) into your own GitHub account
2. Clone the `basics-github-practice` repo from your own account
3. Complete the following Secret Word app
4. Once done, submit the app by committing your code, pushing changes to your repo, and submitting a pull request.

### Secret Word

Create a game where a player must correctly guess secret words to win.

There is 1 secret word for each guess, and the computer randomly chooses that secret word from a set of 3 words: "banana", "chisel" and "faucet".

To win the game the player must guess correctly twice in total, e.g. the player still wins if she guesses wrongly 1 or more times between her 2 correct guesses. For each guess, output all information such as the guessed word, the secret word, and how many correct guesses the player still needs until she wins.

{% hint style="info" %}
Please complete the Github Fork and Pull Request exercise before updating Secret Word in the Comfortable section below.
{% endhint %}

## Comfortable

### Secret Word Twice in a Row

Update Secret Word with an additional rule: The player must guess correctly twice in a row to win.

### Secret Word X in a Row

Update Secret Word game such that the number of times the player needs to guess correctly in a row changes between rounds.

We define "round" as all gameplay until a player wins. The number of times the player needs to guess correctly is a number from 2 to 4, randomly chosen at the start of the round. When the player wins, the computer updates the number of times the player needs to guess correctly in a row for the upcoming round. Consider using [input control from Module 6.3](../6-conditional-logic/6.3-boolean-and-not.md#code-control) to test your logic.

## More Comfortable

### Dice Within

Create a new version of our Coding Basics dice game (where the player guesses the dice roll) that randomly becomes easier or harder. At the beginning of the game and each time the player wins, the computer selects a random number from 1 to 3, which we call the "within number". If any of the player's guesses fall within the dice roll plus or minus the within number, the player wins.

For example: the app randomly chooses 3 as the within number. The player can guess within 3 of the dice roll to win the game. The player guesses 2 and the dice roll is 5. The guess is within 3 of the dice roll so the player wins the game. At this point, the computer adjusts the difficulty of the game by choosing a new within number.

### Dice Within with 2 Dice

Update our dice game to include an additional dice. With each player guess, the computer rolls 2 dice. If the player guess is within either of the 2 dice rolls plus or minus the within number, the player wins.

### Dice 4D

Update our dice game to allow the player to play a round of 4D every 2 times the player wins the dice roll guess. Use [input control from Module 6.3](../6-conditional-logic/6.3-boolean-and-not.md#code-control) to verify our 4D game logic, that it is possible to win this 4D game.

### Secret Word Twice in a Row 2

Update Secret Word with the following additional rules.

1. The player must guess correctly twice in a row to win
2. Secret words cannot be repeated 2 guesses in a row. E.g. the secret word cannot be "banana" for 2 player guesses in a row. If the secret word for the 1st guess were "banana", the secret word for the 2nd guess would have to be either "chisel" or "faucet".

## Reference Solution

[Here](https://github.com/rocketacademy/basics-starter-code/blob/day4/script.js) is a reference solution for Day 4 exercises. Please only view the reference solution for each exercise after you have attempted the exercise yourself. Note that there are many ways to implement these solutions and the reference solution is only 1 way.
