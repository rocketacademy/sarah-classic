# Day 7: Arrays and Loops

## Introduction

Today we will practise arrays with occasional loops through the game of Mad Libs. Note that loops may not be necessary for every exercise.

## Mad Libs Game

Mad Libs is a word game where players fill in the blanks with random words, such that the final sentence is usually funny. If you're unfamiliar with Mad Libs, please read the Wikipedia description [here](https://en.wikipedia.org/wiki/Mad_Libs).

#### Example "Mad Lib" Sentence from Wikipedia

```text
"___________! he said ________ as he jumped into his convertible ______ and drove off with his _________ wife."
 exclamation           adverb                                     noun                         adjective
```

## Getting Started

For the 1st exercise, make a copy of the [starter code](https://github.com/rocketacademy/basics-starter-code) as per instructions in [4.2: Our First Program](../4-getting-started-with-code/4.2-our-first-program.md#setup). For subsequent exercises, feel free to comment out your previous code and create a new `main` function for the current exercise. Please switch driver and navigator each app.

{% hint style="warning" %}
When cloning, put each app in a separate folder, like the folder structure in [Required Hardware and Software](../course-logistics/required-hardware-and-software.md#folder-structure-for-coding-basics). This is to avoid Git repos inside Git repos, which can cause problems with Git.
{% endhint %}

## Base

### Mad Libs Adjectives

#### Example Mad Lib in Code

The following is the above example Mad Lib written in code, where the exclamation, adverb, and noun have been hard-coded and `randomAdj` refers to the random adjective our program will select to complete the Mad Lib.

Note the below string uses optional JavaScript string literal syntax. More info on string literals in Module 4.2: Our First Program [here](https://basics.rocketacademy.co/4-getting-started-with-code/4.2-our-first-program#output-formatting).

```javascript
var madLib = `"Yabadabadoo!" he said gleefully as he jumped into his convertible Tree Car and drove off with his ${randomAdj} wife.`;
```

#### Instructions

Please read all instructions before getting started.

1. Create a Mad Lib with blanks to fill. Feel free to use the example Mad Lib from Wikipedia \(above\) or create your own.
2. If you are using the example Mad Lib, insert fixed words for exclamation, adverb and noun, and leave the adjective field blank. If you are using your own Mad Lib, leave 1 adjective field blank. In your code, this may look like the Example Mad Lib in Code above.
3. When the Basics Starter Code app loads, the user can input 1 adjective at a time to store in the app. Store the user-inputted adjectives in an array.
4. When the user inputs "_create_" it prompts the app to complete your Mad Lib with a random adjective from the user-inputted adjectives list and output the completed Mad Lib in the output box.

## More Comfortable

### Input and Create Mode

When the Basics Starter Code app loads it starts in "input", or normal mode. In input mode, the user can add adjectives to their adjectives list with each Submit.

When the user inputs "create", change the game mode to create mode. In create mode, each Submit prompts the app to complete your Mad Lib.

### Input Multiple Words

When the Basics Starter Code app loads, the user can input 1 or more adjectives to store in the app with each Submit. To input more than 1 word for each Submit, the user would give each word separated by a space, e.g., "_green nice silly_". We can use JavaScript's string `split` method to split the input string into an array of substrings. See W3Schools docs [here](https://www.w3schools.com/jsref/jsref_split.asp) for details.

### Mad Libs Multiple Word Types

Create modes to input words from different word types, e.g. exclamation, adverb, noun, and adjective. For each type, prompt the user what type of word they should be entering. If it's too tedious to support 4 word types, considering starting with 2 word types.

### Popular Mad Libs

Keep track of which words are selected. Create and allow the user to switch to a new game mode that always shows a completed Mad Lib on Submit using the set of words \(verb, adjective, etc.\) that the app has \(randomly\) selected most often so far.

### Sets of Mad Libs

Store an array of Mad Lib sentences in your app. For example, Mad Lib 1 might be:

> She asked {adverb} for the {noun} and when they were rude, she said {exclamation} and hung up the {adjective} phone.

Mad Lib 2 might be:

> It was a {adjective}, cold November day. I woke up to the {adjective} smell of {noun} roasting in the {noun} downstairs.

Update create mode to pick a random Mad Lib sentence and set of words and output the completed Mad Lib in the output box on Submit.

Feel free to see Google results [here](https://www.google.com/search?q=mad+lib+examples&tbm=isch) for potential Mad Lib inspiration.

## Reference Solution

[Here](https://github.com/rocketacademy/basics-starter-code/blob/day7/script.js) is a reference solution for Day 7 exercises. Please only view the reference solution for each exercise after you have attempted the exercise yourself. Note that there are many ways to implement these solutions and the reference solution is only 1 way.

