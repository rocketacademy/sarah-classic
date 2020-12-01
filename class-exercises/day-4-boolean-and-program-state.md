# Day 4: Boolean And, GitHub, Program State

For each app, make a copy of the starter code, as per the [setup](https://swe101.rocketacademy.co/4-getting-started-with-code/4-2-our-first-program#setup) with `git clone`.

Reminder to `npm install` to activate ESLint!

{% hint style="warning" %}
When cloning, put each app in a separate folder, like the folder structure in [Required Hardware and Software](../course-logistics/required-hardware-and-software.md#folder-structure-for-swe101). This is to avoid Git repos inside Git repos, which can cause problems with Git.
{% endhint %}

For some apps you may need to google things. Remember that as pairs, you are also googling together.

Please switch driver and navigator each app.

## Boolean And

### Lucky 11

Create a dice game where in order to win, dice 1 must be 5 and dice 2 must be 6.

## GitHub Fork and Pull Request, Program State

We will follow the "fork and pull request" workflow for the following app. This is to practice this workflow for the current Scissors Paper Stone project, so everyone knows how to set up and submit their assignment. This is the same workflow that developers use when submitting changes to open source \(publicly developed\) code.

1. Make a fork of the [`swe101-github-practice` repo](https://github.com/rocketacademy/swe101-github-practice) into your own GitHub account.
2. Clone the `swe101-github-practice` repo from your own account
3. Complete the following Secret Word app
4. Once done, submit the app by committing your code, pushing changes to your repo, and submitting a pull request.

### Secret Word

There are 3 possible secret words. "banana", "chisel" and "faucet". In order to win the game the user must guess correctly twice.

For each guess make sure to output all the game's information such as what the correct secret word was, how many guesses they have until they win.

### Secret Word V2

Change the game so that in order to win the user must guess twice \*in a row\*. Make sure that the random word does not repeat for the next guess.

### Secret Word V3

Change the game so that in order to win the user must guess a random number of times in a row \(from 2-4\). When the user wins, the number of times they need to guess correctly changes.

Use input control to test your logic.

## More Comfortable

### Dice Within

Make a dice game that becomes easier or harder. The game selects a random number from 1 to 3 that the user can guess within.

Example: the app randomly chooses 3. The user can guess within 3 to win the game. They guess 2 and the dice rolls 5. The guess is within 3 so they win the game.

Each time the user wins the difficulty of the game changes. \(The randomly selected "within" number changes\).

### Dice Within V2

Add a second dice to the game.

### Dice 4D

Create a game that creates a 4D number when the user has guessed correctly twice.

Once they have guessed correctly four times, play a 4D lucky draw.

Use input control / early return to make sure that your game logic actually works and you can win the 4D game.

## Daily Feedback

Please [share feedback](https://forms.gle/8P4TURiYNPDmyAmH9) on today's material. Thank you for making SWE101 great!

