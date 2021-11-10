# Day 6: Loops

## Introduction

Today we will practise arrays and loops. For each exercise except Infinite Loop, make a copy of the [starter code](https://github.com/rocketacademy/basics-starter-code) as per instructions in [4.2: Our First Program](../2-basic-data-manipulation/4.2-our-first-program.md#setup).

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

### Multi-Round Multi-Dice Game

1. Alter the previous multi-dice game such that the user plays 4 rounds in the 2nd mode.
2. After the user enters their guess in Mode 2, the program enters a loop that runs 4 rounds.
3. Within each round the game will roll the number of dice the user specified and compare them with the single user guess.
4. If the user guessed correctly for any dice rolls in a round, they win that round.
5. The game will continue to output overall win-loss record, where each of the 4 rounds count as wins or losses.

### Two Player Multi-Round Multi-Dice Game

1. Change the game to support 2 players, starting with Player 1.
2. The gameplay follows the multi-round multi-dice game above. After each player's turn, that player will have won between 0 and 4 rounds, because each player plays 4 rounds per turn.
3. The game alternates between players indefinitely and outputs win-loss record for each player.

### Multi-Player Multi-Round Multi-Dice Game

Change the game to ask how many players are playing the game. Players will take turns playing the game as above.

## Reference Solution

[Here](https://github.com/rocketacademy/basics-starter-code/blob/day6/script.js) is a reference solution for Day 6 exercises. Please only view the reference solution for each exercise after you have attempted the exercise yourself. Note that there are many ways to implement these solutions and the reference solution is only 1 way.
