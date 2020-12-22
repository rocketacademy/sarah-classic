# Day 6: Loops

For each app \(except Infinite Loop\), make a copy of the starter code, as per the [setup](https://swe101.rocketacademy.co/4-getting-started-with-code/4-2-our-first-program#setup) with `git clone`.

Reminder to `npm install` to activate ESLint!

{% hint style="warning" %}
When cloning, put each app in a separate folder, like the folder structure in [Required Hardware and Software](../course-logistics/required-hardware-and-software.md#folder-structure-for-swe101). This is to avoid Git repos inside Git repos, which can cause problems with Git.
{% endhint %}

For some apps you may need to google things. Remember that as pairs, you are also googling together. Please switch driver and navigator each app.

## Simple Loop with Variations

Create a simple loop in the `main` function. Make the loop run 6 times, adding `"hello"` to `myOutputValue` every time the loop runs.

What happens if `counter` starts as a number other than zero?

What happens if, inside the loop, you alter the `counter` by adding a number other than one?

What happens if you change the condition inside the loop from `counter < 6` to `counter <= 6`.

## Loop within Loop

Create a simple loop in the `main` function. Make the loop run 9 times. 3 times in one loop, 3 times in the inner loop. The inner loop will add `"hello"` to `myOutputValue`.

Add `<br>` to the outer loop so that the program makes a new line for each outer loop.

What happens if `counter` starts as a number other than zero?

What happens if `innerCounter` starts as a number other than zero?

What happens if, inside the loop, you alter the `counter` by adding a number other than one?

What happens if, inside the loop, you alter the `innerCounter` by adding a number other than one?

What happens if you change the condition inside the loop from `counter < 3` to `counter <= 3`.

What happens if you change the condition inside the loop from `innerCounter < 3` to `innerCounter <= 3`?

Use `input` to control how many times the loop runs.

Change it so that the inner loop runs 2x times the outer loop.

## Infiinite Loop

Make a loop that never stops running. Be prepared to stop / kill this chrome tab, because it will freeze. You should also be able to see this tab on the Activity Monitor / Task Manager.

## Multi-Dice Game

Create a dice game with a variable number of dice rolls.

The game will have 2 modes.

In the first mode, the user will enter the number of times they wish to roll 1 dice.

In the second mode, the user will enter a guess that will apply to all dice rolls.

The program will run a loop that, for each iteration of the loop, represents a single dice roll.

Each dice roll will see if the user has won for that dice roll and the game will keep track of the overall win-loss record. The program will output the overall win-loss record.

## Easier \(For The Player\) Multi-Dice Game

Create a dice game with a variable _n_ number of dice. The user will be able to roll that _n_ number of dice in 4 different rounds.

The game will have 2 modes.

In the first mode, the user will enter the number of dice they want to roll.

In the second mode, the user will enter a guess.

The program will run a loop that will run 4 rounds.

_**Within**_ each round the game will run an inner loop that will roll the set of _n_ dice the user specified.

If the user guessed correctly for any of those _n_ dice, they win that round.

The game will add to the output the record of that round, and the game will output the result for all rounds.

## Two Player

Change the game so that 2 players can play.

The game will begin with Player One's turn.

The game play will proceed as in the dice game above. The user will receive a score of 0-4, the total of all rounds played. \(4 rounds per turn\).

Then the game will switch to the other player's turn.

## Multi Player

Change the game so that it asks how many players are in the game at the beginning. Each player will take turns playing the game as above.

## Daily Feedback

Please [share feedback](https://forms.gle/8P4TURiYNPDmyAmH9) on today's material. Thank you for making SWE101 great!

