# Day 7: Arrays and Loops

## Introduction

Today we will practise arrays with occasional loops through the game of Mad Libs. Note that loops may not be necessary for every exercise. If you're unfamiliar with Mad Libs, please read the Wikipedia description [here](https://en.wikipedia.org/wiki/Mad_Libs).

For each exercise, make a copy of the [starter code](https://github.com/rocketacademy/basics-starter-code) as per instructions in [4.2: Our First Program](../4-getting-started-with-code/4.2-our-first-program.md#setup). Reminder to `npm install` to activate ESLint! Please switch driver and navigator each app.

{% hint style="warning" %}
When cloning, put each app in a separate folder, like the folder structure in [Required Hardware and Software](../course-logistics/required-hardware-and-software.md#folder-structure-for-coding-basics). This is to avoid Git repos inside Git repos, which can cause problems with Git.
{% endhint %}

## Base

### Mad Libs Adjectives

#### Example Mad Lib from Wikipedia

```text
"___________! he said ________ as he jumped into his convertible ______ and drove off with his _________ wife."
 exclamation           adverb                                     noun                         adjective
```

#### Example Mad Lib in Code

The following is the above example Mad Lib written in code, where the exclamation, adverb, and noun have been hard-coded and `randomAdj` refers to the random adjective our program will select to complete the Mad Lib. 

Note the below string uses optional JavaScript string literal syntax. More info on string literals in Module 4.2: Our First Program [here](https://basics.rocketacademy.co/4-getting-started-with-code/4.2-our-first-program#output-formatting).

```javascript
var madLib = `"Yabadabadoo!" he said joyfully as he jumped into his convertible Tree Car and drove off with his ${randomAdj} wife.`
```

#### Instructions

1. Create a Mad Lib with blanks to fill. Feel free to use the example Mad Lib from Wikipedia \(above\) or create your own.
2. If you are using the example Mad Lib, insert fixed words for exclamation, adverb and noun, and leave the adjective field blank. If you are using your own Mad Lib, leave 1 adjective field blank. In your code, this may look like the Example Mad Lib in Code above.
3. When the Basics Starter Code app loads, the user can input 1 or more adjectives to store in the app. You can decide whether to let the user input more than 1 word with each Submit. To input more than 1 word for each Submit, we can use JavaScript's string `split` method to split the input string into an array of substrings. See W3Schools docs [here](https://www.w3schools.com/jsref/jsref_split.asp) for details. Store the user-inputted adjectives in an array.
4. When the user inputs "create", change the game mode to create mode. In create mode, each Submit prompts the app to complete your Mad Lib with a random adjective from the user-inputted adjectives list and output the completed Mad Lib in the output box.
5. When the user inputs "input", change the game mode to input mode. In input mode, the user can continue to add adjectives to their adjectives list with each Submit. The user should be able to toggle infinitely between input and create modes to add adjectives and generate completed Mad Libs respectively.

## More Comfortable

### Mad Libs Multiple Word Types

Create modes to input words from different word types, e.g. exclamation, adverb, noun, and adjective. For each type, prompt the user what type of word they should be entering. If it's too tedious to support 4 word types, considering starting with 2 word types.

### Popular Mad Libs

Keep track of which words are selected. Create and allow the user to switch to a new game mode that always shows a completed Mad Lib on Submit using the set of words \(verb, adjective, etc.\) that the app has \(randomly\) selected most often so far.

### Unpopular Mad Libs

Create and allow the user to switch to a new game mode that always shows a completed Mad Lib on Submit with the set of words that the app has selected LEAST often so far.

### Sets of Mad Libs

Store an array of Mad Lib sentences in your app. For example, Mad Lib 1 might be:

> She asked {adverb} for the {noun} and when they were rude, she said {exclamation} and hung up the {adjective} phone.

Mad Lib 2 might be:

> It was a {adjective}, cold November day. I woke up to the {adjective} smell of {noun} roasting in the {noun} downstairs.

Update create mode to pick a random Mad Lib sentence and set of words and output the completed Mad Lib in the output box on Submit.

Feel free to see Google results [here](https://www.google.com/search?q=mad+lib+examples&tbm=isch) for potential Mad Lib inspiration. 

## Daily Feedback

Please [share feedback](https://forms.gle/gMd9ubfvX1x2GnHCA) on today's material. Thank you for making Coding Basics great!

