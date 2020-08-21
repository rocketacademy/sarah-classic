---
description: "✂️\U0001F4C3\U0001F48E\U0001F61C"
---

# Project 1: Scissors Paper Stone

For our first project, we are going to make our own version of the classic [Scissors Paper Stone](https://en.wikipedia.org/wiki/Rock_paper_scissors) game.

## Setup

1. Create a `project` directory in your SWE101 code folder to host your projects if you haven't already.
2. [Fork](../6-conditional-logic/6.4-github-fork.md) the [SWE101 Scissors Paper Stone repository](https://github.com/rocketacademy/swe101-scissors-paper-stone) into your own GitHub account.
3. Clone the newly-forked SPS repo from your own GitHub account into a new folder in your `project` directory. You will notice that the SPS repository should look similar to the starter code repository. We made separate repositories for each project so that student Pull Request submissions can be better organised by project.

## Basic Scissors Paper Stone

To start, let's recreate a basic version of Scissors Paper Stone where the user will input one of "scissors", "paper", or "stone", the program will internally also randomly choose scissors, paper, or stone, and the program will output whether the user won, the program won, or it's a draw.

For clarity on rules, scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

## Win-Loss Record

Add [state](../7-managing-state-and-input-validation/7-1-program-lifecycle-and-global-state.md) to your program such that it keeps track of the number of times the user has won and the number of times the computer has won. Output this win-loss record in a format you like in the program output. You can also output the number of draws and/or each party's winning percentage if you'd like.

## User Name

To make this game more personal, add a feature to collect the user's name as the first input after the page loads. We can prompt the user to enter their name first by adding to the page's HTML. Once the user submits their name, the program can return output to prompt the user to start playing Scissors Paper Stone by entering one of the 3 objects. Use the user's name to personalise win-loss record and other relevant output.

## Input Validation

Sometimes the user types bad and types something other than "scissors", "paper", or "stone" during gameplay. Add input validation to kindly let the user know that there are only 3 input options, and ask them to try again.

## \(Optional\) Korean Scissors Paper Stone

If you're looking to try something more complex, consider this or similar project extensions.

The following is adapted from [Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors#Adapted_rules):

> In Korea, a two-player upgraded version exists by the name [muk-jji-ppa](https://en.wikipedia.org/wiki/Muk-jji-ppa). After showing their hands, the player with the winning throw shouts "muk-jji-ppa!" upon which both players throw again. If they throw differently \(for example, rock and paper, or paper and scissors\), whoever wins this second round shouts "muk-jji-ppa!" and thus the play continues until both players throw the same item \(for example, rock and rock\), at which point whoever was the last winner becomes the actual winner.

Update your program state such that it can keep track of the most recent winner, and update the program logic to declare the most recent winner the ultimate winner when there is a draw.

## Submit

[Push](../6-conditional-logic/6.4-github-fork.md#git-push) the commits in your local repo to GitHub. [Create a Pull Request](../6-conditional-logic/6.4-github-fork.md#github-pull-request) to submit your assignment. Please fill in the questionnaire in the Pull Request comments when you submit.

Congrats on submitting your first project!

