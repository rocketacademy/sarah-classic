# Day 5: Scissors Paper Stone Redux

## Code Review

On days when projects are due, we will review each others' code in groups of 2 or 3 during class. If there is a group of 3, the triplet will do individual code review together so that everyone gets to review someone else's code, then split into 2 groups for pairing.

### 0. Push Your Code

Refer to the [push section](../7-github/7.1-github-fork-and-pull-request.md#git-push) for the commands needed for this. 

### 1. Clone Partner's Code

You'll be paired up so that you can exchange the links for your repos via Slack. Remember that the forked repo is the one that is under your GitHub account, not Rocket Academy's. If you have forked the repo but haven't pushed your latest code to GitHub, take a moment now to `git push`. Let your partner know you're updating the repo. Run a `git clone <REPO_URL> <NEW_FOLDER_NAME>` to get a copy of your partner's code.

{% hint style="info" %}
Note: You need to rename the folder when you clone if you already have a folder named after the repo where you're making the clone.
{% endhint %}

### 2. Run Partner's Code

Open the code in the browser and test it. What does it do? If you're not sure what it does look inside `script.js` to see.

### 3. Read Partner's Code

Read the code and answer the following questions.

1. How does it work?
2. Does it have any obvious errors?
3. Does it implement something that you were trying to do?
4. Does it implement a feature that you haven't started yet? How does the code work?

### 4. Edit Partner's Code

It may be helpful to make changes to the code to help you understand it better. Write some `console.log` that would help you figure out what the code does. Break the code in a certain way to prove how it works or doesn't work.

### 5. Discuss

Once both partners are done with \#1-4, discuss what you saw.

## Improve Project Together

You'll be pair programming on one person's project at a time. 

**The driver will be the person who is \*not\* working on their own code.** 

Once done with one person's code, send the code to your pair \(it's their project\) via a [Slack code snippet](https://slack.com/intl/en-sg/slack-tips/share-code-snippets). Switch to work on the other person's code.

{% hint style="info" %}
Note: If you are working on your partner's code you can't push to their repo because GitHub repos are read-only to non-owners by default.
{% endhint %}

Work on the game in the following order:

### 1. Fix Errors

If there are any errors or bugs in a project, pair to fix those problems.

### 2. Add Features

#### A\) Super Game - Guess the Word

Your pair will turn the Scissors Paper Stone game into a super game. Add a mode for a new guess the secret word game. The user will type in "word game" to switch to this mode. The game itself will be the same as the game in the code example in [6.1](../6-conditional-logic/6.1-intro-to-logic.md#simple-conditional-example-secret-phrase)

#### B\) Dice Game

Add a third mode to the super game, a guess the dice roll game. The user will enter "dice game" to switch to this mode. \(The dice game is the same dice game as the original basic version in [6.1](../6-conditional-logic/6.1-intro-to-logic.md#dice-game)\).

### 3. Comfortable

Continue to add to the Scissors Paper Stone game. Complete the [version 1 more comfortable](../projects/project-1-scissors-paper-stone/project-1-scissors-paper-stone-part-1.md#more-comfortable) or [version 2 more comfortable](../projects/project-1-scissors-paper-stone/project-1-scissors-paper-stone-part-2.md#more-comfortable) features that haven't been implemented yet.

