# Day 3: If Statements, Boolean Or

For each app, make a copy of the starter code, as per the [setup](https://swe101.rocketacademy.co/4-getting-started-with-code/4-2-our-first-program#setup) with `git clone`.

 Reminder to `npm install` to activate ESLint!

{% hint style="warning" %}
When cloning, put each app in a separate folder, like the folder structure in [Required Hardware and Software](../course-logistics/required-hardware-and-software.md#folder-structure-for-swe101). This is to avoid Git repos inside Git repos, which can cause problems with Git.
{% endhint %}

For some apps you may need to google things. Remember that as pairs, you are also googling together. Please switch driver and navigator each app.

## If Statements

### 4D

[4D](http://www.singaporepools.com.sg/en/rules/Pages/4d-game-rules-general.html) is a popular betting game in Singapore run by Singapore Pools. We will simulate the odds of winning this game without money. Rocket Academy does not endorse gambling.

The user will input their 4D guess. For each submission, the program will generate a random winning number between 0000 and 9999 inclusive. If the user's guess matches the winning number, let the user know that they have won!

### Hawker Food Randomness

Hawker food is a convenient and affordable food option in Singapore. The uncle at your favourite hawker stall has decided to challenge himself and serve a random hawker dish every day. The dishes in his repertoire are: "chicken rice", "roti prata", "nasi lemak", "hokkien mee", "bak kut teh", and "laksa".

Use random numbers to help Uncle decide which dish to cook. The customer gets a free meal if she can guess which dish Uncle is cooking today. The customer can only input dish names.

## Boolean Or

### Hawker Food Categorisation

Uncle has learned programming and wants to programmatically tell his customers whether the dish they choose has a "rice", "noodle", or "other" base. Write a program that takes a dish name as input, and outputs whether they have a "rice", "noodle", or "other" base. Please use the `||` operator.

For example, if a user enters "laksa", the program should output "noodle". If a user enters "roti prata", the program could output "other".

### 20D

Create an easier version of 4D. This one picks 4 random numbers between 0 and 20. If the user guesses any of these numbers they win. Make sure to output to the user all of the picked numbers so they can see the results.

## More Comfortable

### Omakase

The uncle has decided to create an omakase option.

The user will say what kind of meal they want and the uncle will pick 2 options for them. The user can say "rice" or "noodle". "Roti prata" is neither rice or noodle, but the Uncle can randomly choose to include it as one of the two dishes if he feels like it. 

The uncle is charging more for his fancy menu, so when telling the user what they are getting, format the output in a nice way. To create a new line in the grey box you can use the string  `'<br>'`. Come up with your own fancier description of each dish.

Say at the end if sambal is included. \(Not all dishes come with it- "roti prata" and "bak kut teh" don't come with sambal\).

For example if the user puts in "rice":

The app will choose two random rice options. In this example we will use "bak kut teh" and "nasi lemak".

Output will be:

```text
Uncle has prepared a selection of dishes for you!

To begin, Nasi Lemak, a fragrant cocount rice.

Acompanied by Korean style fried chicken wing, organic ikan bilis and free range egg.

This will be followed by Bak Kut Teh, a simmered pork rib broth with fatty pork rib.

Acompanied by braised peanuts, you tiao crullers and freshly blanched chai sim.

Chile sambal will be included.

Wine pairing with your meal is an extra charge.
```

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

Please [share feedback](https://forms.gle/gWW8MbbRhaYdKiR38) on today's material. Thank you for making SWE101 great!

