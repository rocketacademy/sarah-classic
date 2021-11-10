---
description: ✂️📃💎😜
---

# Project 1: Scissors Paper Stone (Part 1)

## Introduction

For our first project we will make our own version of the classic [Scissors Paper Stone](https://en.wikipedia.org/wiki/Rock\_paper\_scissors) game. We have split this project into 2 parts to cater to the pace of RA's Basics course. See the [Course Schedule](broken-reference) for when we have assigned each part.

Part 1 works with the technologies we have learned so far in Basics, and Part 2 adds additional technologies that we learn in subsequent course days.

## Setup

1. Create a `project` directory in your `basics` code folder to host your projects if you haven't already.
2. [Fork](../../8-github/7.1-github-fork-and-pull-request.md) the [Coding Basics Scissors Paper Stone repository](https://github.com/rocketacademy/basics-scissors-paper-stone) into your own GitHub account.
3. Clone the newly-forked SPS repo from your own GitHub account into a new folder in your `project` directory. You will notice that the SPS repository should look similar to the starter code repository. We made separate repositories for each project so that student Pull Request submissions can be better organised by project.

## Base

### Basic Scissors Paper Stone

Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.

Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

{% hint style="info" %}
Unsure how to start? Try these steps:

1. Write some pseudo code.
   * What is the input going to be?
   * What should the output be?
   * How will the computer's option be randomly generated?
   * How many different cases are there?
2. Draw a simple flowchart to help you visualise the overall flow of the program.
3. Start small, test while you build and be ready to debug.
   * It's unwise to attempt to build the entire program in one go before testing.
   * Know that the final shape and form of your program will look different from when you are building it.
   * You can write new lines of code within main first, check that the code works as intended, and then "relocate" / refactor your code as a helper function.&#x20;
   * Utilise `console.log()` sensibly to check for the right [control flow](../../3-structuring-and-debugging-code/5.2-errors.md#control-flow-checking-is-our-code-running) and [values](../../3-structuring-and-debugging-code/5.2-errors.md#value-checking-are-the-values-correct).
   * Try to test as frequently as you can, and whenever you make a significant change. It builds confidence that things are working as they should and you will catch bugs as soon as they pop up.
{% endhint %}

### Input Validation

Sometimes the user types something other than "scissors", "paper", or "stone" during gameplay. Add _input validation_ to check if what the user types is a valid choice, and if not, kindly let the user know that there are only 3 input options, and ask them to try again.

## More Comfortable

### Formatting

Make the output of your game look nice. You can use string `'<br>'` to create new lines in the output. Your output might look something like this:

```
The computer chose scissors ✂️.
You chose paper 🗒.

You lose! Bummer.

Now you can type "scissors" "paper" or "stone" to play another round!
```

### Reverse Game

You decide to prank your friends and create an SPS game where the rules are reversed: scissors beat stone, stone beats paper, and paper beats scissors. Create a version where the rules are reversed. The user can choose to try their luck at reversed mode by adding the word "reversed" to their choice. For example: "reversed stone".

## Submit

1. [Push](../../8-github/7.1-github-fork-and-pull-request.md#git-push) the commits in your local repo to GitHub.
2. [Create a pull request](../../8-github/7.1-github-fork-and-pull-request.md#github-pull-request) to submit your assignment.
3. Please leave your name and _**section number **_in the _**title**_ of the pull request.
4. Please fill in the questionnaire in the pull request comments when you submit.

## Reference Solution

[View the reference solution ](https://github.com/rocketacademy/basics-scissors-paper-stone/tree/part1-inclMoreComfortable)for SPS-Part1 (up till More Comfortable). Please only refer to the reference solution after you have attempted the project. Note that there are many ways to implement the project and the reference solution is only 1 way.
