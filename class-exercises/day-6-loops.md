# Day 6: Loops

## Introduction

Today we will practise arrays and loops. For each exercise except Infinite Loop, make a copy of the [starter code](https://github.com/rocketacademy/basics-starter-code) as per instructions in [4.2: Our First Program](../4-getting-started-with-code/4.2-our-first-program.md#setup). Reminder to `npm install` to activate ESLint! Please switch driver and navigator each app.

{% hint style="warning" %}
When cloning, put each app in a separate folder, like the folder structure in [Required Hardware and Software](../course-logistics/required-hardware-and-software.md#folder-structure-for-coding-basics). This is to avoid Git repos inside Git repos, which can cause problems with Git.
{% endhint %}

## Base

### Simple Loop with Variations

1. Create a loop in the `main` function. Make the loop run 6 times, adding `"hello"` to `myOutputValue` with each loop iteration.
2. What happens if `counter` starts as a number other than zero?
3. What happens if, inside the loop, you alter the `counter` by adding a number other than one?
4. What happens if you change the condition inside the loop from `counter < 6` to `counter <= 6`?

### Loop within Loop

1. Create nested loops in the `main` function, where the outer loop runs 3 times and the inner loop runs 3 times per outer loop. Concatenate `"hello"` to `myOutputValue` in the inner loop. How many times do we see `"hello"`?
2. Add `"<br>"` to `myOutputValue` in the outer loop so that the program makes a new line for each outer loop.
3. What happens if `outerCounter` starts as a number other than zero?
4. What happens if `innerCounter` starts as a number other than zero?
5. What happens if, inside the loop, you alter `outerCounter` by adding a number other than one?
6. What happens if, inside the loop, you alter `innerCounter` by adding a number other than one?
7. What happens if you change the outer loop condition from `outerCounter < 3` to `outerCounter <= 3`?
8. What happens if you change the inner loop condition from `innerCounter < 3` to `innerCounter <= 3`?
9. Update loop conditions to use `input` to control how many times the loops run.
10. Update our code such that the inner loop runs twice the number of times as the outer loop. How many more times do we see `"hello"`?

### Infinite Loop

Make a loop that never stops running. Be prepared to stop / kill this Chrome tab, because it will freeze. We should be able to observe this tab's performance in Windows Task Manager or MacOS Activity Monitor.

### Multi-Dice Game

1. Create a dice-guessing game with a variable number of dice rolls determined by the user.
2. The game will have 2 modes.
3. In the 1st mode, the user will enter the number of dice they wish to roll.
4. In the 2nd mode, the user will enter a guess that will apply to all dice rolls. For example, if the user has chosen to roll 2 dice in Mode 1 and guesses 4 in Mode 2, that guess of 4 will apply to both Dice 1 and Dice 2.
5. After the user guesses, the program will run a loop where the number of iterations is the number of dice rolls from Mode 1. Each loop iteration will roll a dice and verify if the user has won.
6. If the user guesses correctly for any of the dice rolls, the user wins.
7. The game keeps track of and outputs the overall win-loss record.

## More Comfortable

### Easier \(For The Player\) Multi-Dice Game

1. Create a dice game with a variable _n_ number of dice. The user will be able to roll that _n_ number of dice in 4 different rounds.
2. The game will have 2 modes.
3. In the first mode, the user will enter the number of dice they want to roll.
4. In the second mode, the user will enter a guess.
5. The program will run a loop that will run 4 rounds.
6. _**Within**_ each round the game will run an inner loop that will roll the set of _n_ dice the user specified.
7. If the user guessed correctly for any of those _n_ dice, they win that round.
8. The game will add to the output the record of that round, and the game will output the result for all rounds.

### Two Player

1. Change the game so that 2 players can play.
2. The game will begin with Player One's turn.
3. The game play will proceed as in the dice game above. The user will receive a score from 0 to 4, the total of all rounds played. \(4 rounds per turn\).
4. Then the game will switch to the other player's turn.

### Multi-Player

Change the game so that it asks how many players are in the game at the beginning. Each player will take turns playing the game as above.

## Reference Solution

[Here](https://github.com/rocketacademy/basics-starter-code/blob/day6/script.js) is a reference solution for Day 6 exercises. Please only view the reference solution for each exercise after you have attempted the exercise yourself. Note that there are many ways to implement these solutions and the reference solution is only 1 way.

## Daily Feedback

Please [share feedback](https://forms.gle/gMd9ubfvX1x2GnHCA) on today's material. Thank you for making Coding Basics great!

