---
description: "✂️\U0001F4C3\U0001F48E\U0001F929"
---

# Project 1: Scissors Paper Stone \(Part 2\)

## Introduction

Part 2 assumes we have learned about global variables, and the More Comfortable section assumes we know how to use globals as game modes. We'll now update our SPS Part 1 to support game state.

If you completed the [Base features of SPS Part 1](project-1-scissors-paper-stone-part-1.md#base) but didn't finish the More Comfortable section, please complete Base for SPS Part 2 before going back to complete More Comfortable for both parts.

## Setup

1. Add onto the pull request you already opened for the last version. In fact, _**you don't have to do anything else for this.**_ When you push your commits, they will automatically be added to your pull request.
2. Copy the pull request survey you filled out for the first part of the project and answer the questions for this part of the project. You can just copy and paste your answers into the same pull request description box.

## Base

### Win-Loss Record

Add [state](../../8-managing-state-and-input-validation/8.1-program-lifecycle-and-state.md) to your program such that it keeps track of the number of times the user has won and the number of times the computer has won. Output this win-loss record in a format you like in the program output. You can also output the number of draws and/or each party's winning percentage if you'd like.

### User Name

To make this game more personal, add a feature to collect the user's name as the first input after the page loads. We can prompt the user to enter their name first by adding to the page's HTML. Once the user submits their name, the program can return output to prompt the user to start playing Scissors Paper Stone by entering one of the 3 objects. Use the user's name to personalise win-loss record and other relevant output.

### Formatting

Make the output of your game look nice. You can use string `'<br>'` to create new lines in the output. Add the user name and the win/loss record. If the player's win/loss record suggests they are doing well, format a message for them \(and another message if they are not doing well\).

Your output might look something like this:

```text
The computer chose scissors ✂️.
You chose paper 🗒.

You lose! Bummer.

So far Kai, you've been winning 5/7 turns. Pretty good!
```

## More Comfortable

### Reverse Game Mode

You decide to prank your friends and create an SPS game mode where the rules are reversed: scissors beat stone, stone beats paper, and paper beats scissors. Create _**a game mode**_ where if a user types in "reverse", it reverses the SPS rules. Once done, push your code and update your pull request in GitHub.

### Korean Scissors Paper Stone

The following is adapted from [Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors#Adapted_rules):

> In Korea, a two-player upgraded version exists by the name [muk-jji-ppa](https://en.wikipedia.org/wiki/Muk-jji-ppa). After showing their hands, the player with the winning throw shouts "muk-jji-ppa!" upon which both players throw again. If they throw differently \(for example, rock and paper, or paper and scissors\), whoever wins this second round shouts "muk-jji-ppa!" and thus the play continues until both players throw the same item \(for example, rock and rock\), at which point whoever was the last winner becomes the actual winner.

Update your program state such that it can keep track of the most recent winner, and update the program logic to declare the most recent winner the ultimate winner when there is a draw.

### Versions

Allow the player to select if they want to play normal or Korean versions of the game.

### Computer vs. Computer

Add a mode that lets the computer choose for you on each turn.

### Further Variations

Implement other variations to the game as described here: [https://en.wikipedia.org/wiki/Rock\_paper\_scissors\#Variations](https://en.wikipedia.org/wiki/Rock_paper_scissors#Variations) the user can select which variation they would like to play.

## Submit

[Push](../../7-github/7.1-github-fork-and-pull-request.md#git-push) the commits in your local repo to GitHub.

1. Any subsequent commits you push will be added to your previous pull request automatically.
2. Please leave your name and _**section number**_ in the _**title**_ of the pull request.
3. Please make a copy of the questionnaire and create a _**new pull request comment**_.
4. Fill in the survey questions.

## Reference Solution

The reference solution implements the Base functionality for both SPS Parts 1 and 2. Please only refer to the reference solution after you have attempted the project. Note that there are many ways to implement the project and the reference solution is only 1 way.

[https://github.com/rocketacademy/basics-scissors-paper-stone/pull/24/files](https://github.com/rocketacademy/basics-scissors-paper-stone/pull/24/files)

[View the reference solution ](https://github.com/rocketacademy/basics-scissors-paper-stone/tree/part2-inclMoreComfortable)for SPS-Part2 \(up till More Comfortable\). Please only refer to the reference solution after you have attempted the project. Note that there are many ways to implement the project and the reference solution is only 1 way.

