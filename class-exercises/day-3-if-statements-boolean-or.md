# Day 3: If Statements, Boolean Or

## Introduction

Today we will practise if statements and logical OR operators. For each exercise, make a copy of the [starter code](https://github.com/rocketacademy/swe101-starter-code) as per instructions in [4.2: Our First Program](../4-getting-started-with-code/4.2-our-first-program.md#setup). Remember to `npm install` to activate ESLint! Please switch driver and navigator each exercise.

{% hint style="warning" %}
When cloning the starter code, put each exercise in a separate folder, like the folder structure in [Required Hardware and Software](../course-logistics/required-hardware-and-software.md#folder-structure-for-swe101). This is to avoid Git repos inside Git repos, which can cause problems with Git.
{% endhint %}

## Base

### 4D

[4D](http://www.singaporepools.com.sg/en/rules/Pages/4d-game-rules-general.html) is a popular betting game in Singapore run by Singapore Pools. We will create a simplified version of 4D without money to simulate the odds of winning. Rocket Academy does not endorse gambling.

The player will input their 4D guess. For each submission, the program will generate a random winning number between 0 and 9999 inclusive. If the player's guess matches the winning number, let the player know they have won!

{% hint style="info" %}
To test your winning logic, consider using [code control logic from Module 6.3](../6-conditional-logic/6.3-boolean-and-not.md#code-control), where we temporarily return a fixed number at the start of our random number generator function.
{% endhint %}

### Hawker Food Categorisation

Hawker food is a convenient and affordable food option in Singapore. To help educate non-Singaporeans about hawker food, create an app that takes a hawker dish name as input, and tells users whether the dish has a "rice", "noodle", or "other" base. Some sample dishes are: "chicken rice", "roti prata", "nasi lemak", "hokkien mee", "bak kut teh", and "laksa". For example, if a user enters "laksa", the program should output "noodle". If a user enters "roti prata", the program could output "other". Please use the `||` operator.

## Comfortable

### 4D with Single-Digit Comparison

Create a version of 4D where the player wins if their guess matches any of the 4 digits. The player will input a single digit, and the computer generates 4 random digits between 0 and 9. If the player-inputted digit matches any of the randomly-generated digits, the player wins. In addition to the win/loss result, output the player guess and all randomly-generated digits so the player can see how close they were.

### Hawker Food Randomness

The uncle at your favourite hawker stall has decided to challenge himself and serve a random hawker dish to each customer. The dishes in his repertoire are: "chicken rice", "roti prata", "nasi lemak", "hokkien mee", "bak kut teh", and "laksa". Customers that correctly guess Uncle's dish receive a free meal.

Create an app that uses random numbers to help Uncle decide which dish to cook. The customer can only input dish names. If the customer correctly guesses Uncle's dish, let her know that she gets a free meal!

## More Comfortable

### 4D with Winning Range

Create a version of 4D where the player wins if they guess within 1000 \(above or below\) of the winning 4-digit number. Consider using comparison operators such as less than \(`<`\) and greater than \(`>`\).

### Hawker Food Omakase

Uncle has decided to serve an omakase option, and output a menu based on customer input.

1. Customers can input either "rice" or "noodle", and Uncle will choose either 2 random rice or 2 random noodle dishes for them.
2. Roti prata is neither rice nor noodle, but Uncle can randomly choose to include it as one of the two dishes if he feels like it.
3. Uncle charges more for omakase and uses premium descriptions for his dishes. Feel free to get creative. To create a new line in the output box you can use the string `'\n'`, which generates a new line in a string.
4. Output at the end if sambal is included. Not all dishes come with sambal, for example roti prata and bak kut teh don't come with sambal.

#### Sample Output

The customer inputs "rice" and the app chooses 2 random rice dishes, nasi lemak and bak kut teh. Roti prata is randomly not chosen. Sambal is included because nasi lemak typically comes with sambal.

```text
Uncle has prepared a selection of dishes for you!

To begin, Nasi Lemak, a fragrant coconut rice. Accompanied by Korean-style fried chicken wing, organic ikan bilis and free-range egg.

This will be followed by Bak Kut Teh, a simmered pork rib broth with fatty pork rib. Accompanied by braised peanuts, you tiao crullers and freshly-blanched chai sim.

Chilli sambal will be included.
```

## Daily Feedback

Please [share feedback](https://forms.gle/EphjPbsUTNXGqN946) on today's material. Thank you for making SWE101 great!
