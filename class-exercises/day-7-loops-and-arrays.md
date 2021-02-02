# Day 7: Loops and Arrays

## Introduction

Today we will practise arrays with loops. For each exercise, make a copy of the [starter code](https://github.com/rocketacademy/swe101-starter-code) as per instructions in [4.2: Our First Program](../4-getting-started-with-code/4.2-our-first-program.md#setup). Reminder to `npm install` to activate ESLint! Please switch driver and navigator each app.

{% hint style="warning" %}
When cloning, put each app in a separate folder, like the folder structure in [Required Hardware and Software](../course-logistics/required-hardware-and-software.md#folder-structure-for-swe101). This is to avoid Git repos inside Git repos, which can cause problems with Git.
{% endhint %}

## Base

### Mad Libs Adjectives

If you're unfamiliar with the game Mad Libs, take a look here: [https://en.wikipedia.org/wiki/Mad\_Libs](https://en.wikipedia.org/wiki/Mad_Libs)

Come up with your Mad Lib. If you don't want to create anything, you can use the default one from the Wikipedia page:

```text
"___________! he said ________ as he jumped into his convertible ______ and drove off with his _________ wife."
 exclamation           adverb                                     noun                         adjective
```

Hard code the exclamation, adverb and noun, but leave 1 adjective blank. In the Wikipedia sentence, the adjective is at the end of the sentence.

At the beginning of the app, ask the user to input a series of adjectives. We can choose to have the user input 1 adjective per input or multiple. Store these in an array.

When the user types "create" in the input, change the mode to complete your Mad Lib by randomly selecting an adjective from the array. Output the completed Mad Lib in the grey box.

## More Comfortable

### Mad Libs All Word Types

Create a mode\(s\) to input words from each type, e.g. exclamation, adverb, noun, and adjective. For each type, prompt the user what type of word they should be entering.

### Popular Mad Libs

Keep track of which words are selected. Create a mode of the game that shows a Mad Lib using the set of words \(verb, adjective, etc.\) that are \(randomly\) selected the most often by the app.

Add another mode that also shows the set of least selected words.

### Sets of Mad Libs

Store an array of Mad Lib sentences in your app. For example, Mad Lib 1 might be:

> She asked {adverb} for the {noun} and when they were rude, she said {exclamation} and hung up the {adjective} phone.

Mad Lib 2 might be:

> It was a {adjective}, cold November day. I woke up to the {adjective} smell of {noun} roasting in the {noun} downstairs.

When the user chooses to create a random Mad Lib sentence, have the app choose a random sentence and set of words.

For more inspiration you can look here: [https://www.google.com/search?q=mad+lib+examples&tbm=isch](https://www.google.com/search?q=mad+lib+examples&tbm=isch)

## Daily Feedback

Please [share feedback](https://forms.gle/EphjPbsUTNXGqN946) on today's material. Thank you for making SWE101 great!

