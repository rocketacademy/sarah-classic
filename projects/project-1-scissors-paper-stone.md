---
description: "✂️\U0001F4C3\U0001F48E\U0001F61C"
---

# Project 1: Scissors Paper Stone

## Introduction

For our first project, we are going to make our own version of the classic [Scissors Paper Stone](https://en.wikipedia.org/wiki/Rock_paper_scissors) game.

## Setup

1. Create a `project` directory in your SWE101 code folder to host your projects if you haven't already.
2. [Fork](../7-github/7.1-github-fork-and-pull-request.md) the [SWE101 Scissors Paper Stone repository](https://github.com/rocketacademy/swe101-scissors-paper-stone) into your own GitHub account.
3. Clone the newly-forked SPS repo from your own GitHub account into a new folder in your `project` directory. You will notice that the SPS repository should look similar to the starter code repository. We made separate repositories for each project so that student Pull Request submissions can be better organised by project.

## Base

### Basic Scissors Paper Stone

Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.

Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

### Win-Loss Record

Add [state](../8-managing-state-and-input-validation/8.1-program-lifecycle-and-state.md) to your program such that it keeps track of the number of times the user has won and the number of times the computer has won. Output this win-loss record in a format you like in the program output. You can also output the number of draws and/or each party's winning percentage if you'd like.

### User Name

To make this game more personal, add a feature to collect the user's name as the first input after the page loads. We can prompt the user to enter their name first by adding to the page's HTML. Once the user submits their name, the program can return output to prompt the user to start playing Scissors Paper Stone by entering one of the 3 objects. Use the user's name to personalise win-loss record and other relevant output.

### Input Validation

Sometimes the user types bad and types something other than "scissors", "paper", or "stone" during gameplay. Add input validation to kindly let the user know that there are only 3 input options, and ask them to try again.

### Formatting

Make the output of your game look nice. You can use string `'<br>'` to create new lines in the output. Your output might look something like this:

```text
The computer chose scissors ✂️.
You chose paper 🗒.

You lose! Bummer.

So far Kai, you've been winning 5/7 turns. Pretty good!
```

## More Comfortable

### Reverse Game Mode

You decide to prank your friends and create an SPS game mode where the rules are reversed: scissors beat stone, stone beats paper, and paper beats scissors. Create a game mode where if a user types in "reverse", it reverses the SPS rules. Once done, push your code and update your pull request in GitHub.

### Korean Scissors Paper Stone

The following is adapted from [Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors#Adapted_rules):

> In Korea, a two-player upgraded version exists by the name [muk-jji-ppa](https://en.wikipedia.org/wiki/Muk-jji-ppa). After showing their hands, the player with the winning throw shouts "muk-jji-ppa!" upon which both players throw again. If they throw differently \(for example, rock and paper, or paper and scissors\), whoever wins this second round shouts "muk-jji-ppa!" and thus the play continues until both players throw the same item \(for example, rock and rock\), at which point whoever was the last winner becomes the actual winner.

Update your program state such that it can keep track of the most recent winner, and update the program logic to declare the most recent winner the ultimate winner when there is a draw.

### Versions

Allow the player to select if they want to play normal or Korean versions of the game.

### Computer vs. Computer

Add a mode that lets the computer choose for you on each turn.

### Further Variations

Implement other variations to the game as described here: [https://en.wikipedia.org/wiki/Rock_paper_scissors\#Variations](https://en.wikipedia.org/wiki/Rock_paper_scissors#Variations) the user can select which variation they would like to play.

## Submit

[Push](../7-github/7.1-github-fork-and-pull-request.md#git-push) the commits in your local repo to GitHub. [Create a pull request](../7-github/7.1-github-fork-and-pull-request.md#github-pull-request) to submit your assignment. Please fill in the questionnaire in the pull request comments when you submit. Congrats on submitting your first project!

## Reference Solution

The reference solution implements the Base functionality. Please only refer to the reference solution after you have attempted the project. Note that there are many ways to implement the project and the reference solution is only 1 way.

[https://github.com/rocketacademy/swe101-scissors-paper-stone/pull/24/files](https://github.com/rocketacademy/swe101-scissors-paper-stone/pull/24/files)
