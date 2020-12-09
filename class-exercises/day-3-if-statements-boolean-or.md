# Day 3: If Statements, Boolean Or

## Introduction

Today we will practise if statements and logical OR operators. For each exercise, make a copy of the [starter code](https://github.com/rocketacademy/swe101-starter-code) as per instructions in [4.2: Our First Program](../4-getting-started-with-code/4.2-our-first-program.md#setup). Remember to `npm install` to activate ESLint! For some exercises you may need to google for information. Please switch driver and navigator each exercise.

{% hint style="warning" %}
When cloning the starter code, put each exercise in a separate folder, like the folder structure in [Required Hardware and Software](../course-logistics/required-hardware-and-software.md#folder-structure-for-swe101). This is to avoid Git repos inside Git repos, which can cause problems with Git.
{% endhint %}

## Base \(If Statements\)

### 4D

[4D](http://www.singaporepools.com.sg/en/rules/Pages/4d-game-rules-general.html) is a popular betting game in Singapore run by Singapore Pools. We will simulate the odds of winning this game without money. Rocket Academy does not endorse gambling.

The user will input their 4D guess. For each submission, the program will generate a random winning number between 0 and 9999 inclusive. If the user's guess matches the winning number, let the user know they have won!

For the purposes of RA's 4D, we can ignore leading 0s, i.e. a guess of "0000" is the same as "0". To test your winning logic, consider using [code control logic from Module 6.3](../6-conditional-logic/6.3-boolean-and-not.md#code-control).

### Hawker Food Randomness

Hawker food is a convenient and affordable food option in Singapore. The uncle at your favourite hawker stall has decided to challenge himself and serve a random hawker dish every day. The dishes in his repertoire are: "chicken rice", "roti prata", "nasi lemak", "hokkien mee", "bak kut teh", and "laksa".

Use random numbers to help Uncle decide which dish to cook. You may find nested if statements helpful \(i.e. if statements within if statements\), but they are not strictly necessary. The customer gets a free meal if she can guess which dish Uncle is cooking today. The customer can only input dish names.

## Base \(Boolean Or\)

### Hawker Food Categorisation

Uncle has learned programming and wants to programmatically tell his customers whether the dish they choose has a "rice", "noodle", or "other" base. Write a program that takes a dish name as input, and outputs whether the dish has a "rice", "noodle", or "other" base. Please use the `||` operator.

For example, if a user enters "laksa", the program should output "noodle". If a user enters "roti prata", the program could output "other".

### Easier 4D

Create an easier version of 4D. The user will input a single digit, and the computer generates 4 random digits between 0 and 9. If the user-inputted digit matches any of the randomly-generated digits, the user wins. In addition to the win/loss result, output the user guess and all randomly-generated digits so the user can see how close they were.

## More Comfortable

### Hawker Food Omakase

Uncle has decided to serve an omakase option, and output a menu based on customer input. 

1. Customers can input either "rice" or "noodle", and Uncle will choose either 2 random rice or 2 random noodle dishes for them.
2. Roti prata is neither rice nor noodle, but Uncle can randomly choose to include it as one of the two dishes if he feels like it.
3. Uncle charges more for omakase and uses premium descriptions for his dishes. Feel free to get creative. To create a new line in the output box you can use the string `'<br>'`, which generates a new line in HTML.
4. Output at the end if sambal is included. Not all dishes come with sambal, for example roti prata and bak kut teh don't come with sambal.

#### Sample Output

The user inputs "rice" and the app chooses 2 random rice dishes, nasi lemak and bak kut teh. Roti prata does not make an appearance. Sambal is included because nasi lemak typically comes with sambal.

```text
Uncle has prepared a selection of dishes for you!

To begin, Nasi Lemak, a fragrant coconut rice. Accompanied by Korean style fried chicken wing, organic ikan bilis and free range egg.

This will be followed by Bak Kut Teh, a simmered pork rib broth with fatty pork rib. Accompanied by braised peanuts, you tiao crullers and freshly blanched chai sim.

Chile sambal will be included.
```

### 4D Leading Zeros

Create a 4D game that includes numbers like 0102 and 0001.

### Easy 4D

Modify your 4D game to make it easier to win. The user wins if they guess within 1000 \(above or below\) of the winning number.

_You can experiment with operators such as less than \(`<`\) and greater than \(`>`\)._

### 4D Factors

If the number the user guessed is a factor of the random number, they win.

_Consider using the `%` \(called "modulus" or "mod"\) operator, where `A % B` will return the remainder when A is divided by B._

### 4D with Multiple of 3

Extend your game from earlier with new rules. A user wins twice as much if the number they guess is a multiple of 3. 0 is included as a multiple of 3.

_Hint: For this and following problems, you may want to consider nested if-statements, where "nested" means 1 or more statements within another._

### 4D with 2nd/3rd Digit Multiple of 3

Extend your 4D game even further. A user wins a bonus prize if the 2nd digit _or_ the 3rd digit of the number they guess is a multiple of 3.

## Daily Feedback

Please [share feedback](https://forms.gle/8P4TURiYNPDmyAmH9) on today's material. Thank you for making SWE101 great!

