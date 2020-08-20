# Day 3: If Statements and Boolean Or

For each app, make a copy of the starter code, as per the [setup](https://swe101.rocketacademy.co/4-getting-started-with-code/4-2-our-first-program#setup) with `git clone`. When cloning, specify the target directory for each app as a new folder, following the folder structure in [Pro Tips](../course-logistics/pro-tips.md#organising-folders-for-swe101). This is to avoid Git repos inside Git repos, which can cause problems with Git.

For some apps you may need to google things. Remember that as pairs, you are also googling together. Please switch driver and navigator each app.

## If Statements

### 4D

[4D](http://www.singaporepools.com.sg/en/rules/Pages/4d-game-rules-general.html) is a popular betting game in Singapore run by Singapore Pools. We will simulate the odds of winning this game without money. Rocket Academy does not endorse gambling.

The user will input their 4D guess. For each submission, the program will generate a random winning number between 0000 and 9999 inclusive. If the user's guess matches the winning number, let the user know that they have won!

As an extension, consider modifying your 4D game to make it easier to win. You can experiment with operators such as less than \(`<`\), greater than \(`>`\), or not equals \(`!=`\).

### 4D with Multiple of 3

Extend your 4D game from earlier with new rules. A user wins twice as much if the number they guess is a multiple of 3. 0 is included as a multiple of 3. Consider using the `%` \(called "modulus" or "mod"\) operator, where `A % B` will return the remainder when A is divided by B.

Hint: For this and following problems, you may want to consider nested if-statements, where "nested" means 1 or more statements within another.

## Boolean Or

### Hawker Food Randomness

The uncle at your favourite hawker stall has decided to challenge himself and serve a random hawker dish every day. The dishes in his repertoire are: "chicken rice", "hokkien mee", "char kway teow", "roti prata", "nasi lemak", "carrot cake", "bak kut teh", and "laksa".

Use random numbers to help Uncle decide which dish to cook. The customer gets a free meal if she can guess which dish Uncle is cooking today. The customer can only input dish names.

### Hawker Food Categorisation

Uncle has learned programming and wants to programmatically tell his customers whether the dish they choose has a "rice", "noodle", or "other" base. Write a program that takes a dish name as input, and outputs whether they have a "rice", "noodle", or "other" base.

For example, if a user enters "laksa", the program should output "noodle". If a user enters "bak kut teh", the program could output "other".

## More Comfortable

### 4D with 2nd/3rd Digit Multiple of 3

Extend your 4D game even further. A user wins a bonus prize if the 2nd digit _or_ the 3rd digit of the number they guess is a multiple of 3.

### Hawker Food Randomness And Categorisation

Uncle likes children and wants to educate children about food. He will give a free meal to children that can correctly guess the dish of the day \(from the 8 above\) and name the base of that dish. Children that only guess the dish of the day but not the correct base are told that they guessed the right dish. Children that guess both correctly are told that they get a free meal!

Children will input their guesses in the format of "&lt;dish&gt; &lt;base&gt;", for example, "char kway teow rice". We can determine whether a dish or a base is inside an input string with the JavaScript String [`includes`](https://www.w3schools.com/jsref/jsref_includes.asp) function. For example, `if (input.includes("char kway teow"))` will tell me if the string "char kway teow" is part of my input string.

