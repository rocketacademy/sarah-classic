---
description: "✂️\U0001F4C3\U0001F48E\U0001F61C"
---

# Project 1: Scissors Paper Stone \(Part 1\)

## Introduction

For our first project, we are going to make our own version of the classic [Scissors Paper Stone](https://en.wikipedia.org/wiki/Rock_paper_scissors) game.

At this point in the course our code can only make limited decisions, so we are limiting what the game can do for now.

## Setup

1. Create a `project` directory in your `basics` code folder to host your projects if you haven't already.
2. [Fork](../7-github/7.1-github-fork-and-pull-request.md) the [Coding Basics Scissors Paper Stone repository](https://github.com/rocketacademy/basics-scissors-paper-stone) into your own GitHub account.
3. Clone the newly-forked SPS repo from your own GitHub account into a new folder in your `project` directory. You will notice that the SPS repository should look similar to the starter code repository. We made separate repositories for each project so that student Pull Request submissions can be better organised by project.

## Base

### Basic Scissors Paper Stone

Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.

Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

### Input Validation

Sometimes the user types bad and types something other than "scissors", "paper", or "stone" during gameplay. Add input validation to kindly let the user know that there are only 3 input options, and ask them to try again.

## More Comfortable

### Formatting

Make the output of your game look nice. You can use string `'<br>'` to create new lines in the output. Your output might look something like this:

```text
The computer chose scissors ✂️.
You chose paper 🗒.

You lose! Bummer.

Now you can type "scissors" "paper" or "stone" to play another round!
```

### Reverse Game Mode

You decide to prank your friends and create an SPS game mode where the rules are reversed: scissors beat stone, stone beats paper, and paper beats scissors. Create a version where the rules are reversed. The user can choose to try their luck at reversed mode by adding the word "reversed" to their choice. FOr example: "reversed stone".

## Submit

[Push](../7-github/7.1-github-fork-and-pull-request.md#git-push) the commits in your local repo to GitHub. [Create a pull request](../7-github/7.1-github-fork-and-pull-request.md#github-pull-request) to submit your assignment. Please fill in the questionnaire in the pull request comments when you submit. Congrats on submitting your first project!

## Reference Solution

The reference solution implements the Base functionality. Please only refer to the reference solution after you have attempted the project. Note that there are many ways to implement the project and the reference solution is only 1 way.

[https://github.com/rocketacademy/basics-scissors-paper-stone/pull/24/files](https://github.com/rocketacademy/basics-scissors-paper-stone/pull/24/files)

