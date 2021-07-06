# Day 1: Basic File and Data Manipulation

## Introduction

Today's in-class exercise has 2 sections.

1. [File manipulation with command line and Git](day-1-basic-file-and-data-manipulation.md#file-manipulation-with-command-line-and-git)
2. [Data manipulation with operations and variables](day-1-basic-file-and-data-manipulation.md#data-manipulation-with-operations-and-variables)

## File Manipulation with Command Line and Git

You may wish to refer to the [command line cheatsheet](../2-organising-and-managing-code-files/2.1-command-line.md#cheat-sheet) and [Git cheatsheet](../2-organising-and-managing-code-files/2.2-git.md#cheat-sheet), and use [window snapping](../course-logistics/required-hardware-and-software.md#window-snapping-software) to position 3 windows on your screen simultaneously: VSCode, the relevant cheatsheet, and these instructions.

### Create a Haiku

We will create poetry, save and edit it using the command line and Git.

1. Open the command line and create a folder for our poetry.
2. Inside the folder, create a text file in the command line and open it in VSCode.
3. Write a [haiku](https://en.wikipedia.org/wiki/Haiku) about trees in the text file and save the file. A haiku is a Japanese poem that follows the convention of 5 syllables, 7 syllables, and 5 syllables on each of 3 lines respectively.
   1. If writing poetry is difficult, feel free to make up something :\) The content isn't particularly important for this exercise.
4. Create a Git repo in the folder, and add and commit the poetry file.
5. Edit our poem to reference leaves. Make a commit for our changes.
6. Add a 2nd poem about winter in another file. Commit this file to the repo.
7. Make a change to the winter file: add "papaya" to the last line. We aren't going to keep this change.
8. Add a title to our poem about trees. Add the title above the text in the file, and change the filename to reflect the title. Note here that we can change more than one file, and only stage the trees file for committing. In this way we can say which files go into a given commit. Don't stage or commit the winter poem.
9. Delete our poem about winter from the repo by deleting the file and committing the change.

{% hint style="info" %}
**Hint:** When typing in the command line we can press the `tab` key and the command line will try to auto-complete the current command, file, or folder name. This can help reduce unnecessary typing and typos.
{% endhint %}

## Data Manipulation with Operations and Variables

For each app, make a copy of the starter code, as in the [setup](https://basics.rocketacademy.co/4-getting-started-with-code/4-2-our-first-program#setup) with `git clone`. For some apps you may need to google for information. Remember that as pairs, you are also googling together. Please switch driver and navigator each app.

### **Minutes in Weeks**

The user will enter a number of weeks. Output the number of minutes in those weeks in the output box. Format the output nicely. Like: `In 3 weeks there are 30240 minutes! Wow!`

### **Fahrenheit to Celsius**

The user enters a temperature in Fahrenheit. Output the conversion to Celsius in the output box. Format the output nicely.

### **Road Trip Cost**

A new Ferrari consumes 9km/litre. Petrol costs $2.20/litre. The user will enter a trip length in kilometres and the app will give a cost estimate.

### **Ice Cream Buffet**

There's all-you-can-eat ice cream at the buffet. The buffet receives ice cream in 400ml containers. To save money the buffet only provides 70ml cups for customers to get ice cream.

The user will enter a number of trips to the ice cream station \(picking up **1 cup per trip**\) and the app will calculate how many **containers** of ice cream you would consume. It is ok to show the number of containers in decimal format.

### **Time to Type Sonnets**

The user will enter their words-per-minute typing speed. The app will calculate how long it will take them to type all of Shakespeare's sonnets in hours. For simplicity, assume 17,677 words in all of Shakespeare's sonnets.

## Reference Solution

[Here](https://github.com/rocketacademy/basics-starter-code/blob/day1/script.js) is a reference solution for the Data Manipulation exercises above. Please only view the reference solution for each exercise after you have attempted the exercise yourself. Note that there are many ways to implement these solutions and the reference solution is only 1 way.

