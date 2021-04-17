# Day 2: Functions

## Introduction

Today we will write functions to perform data transformations, similar to examples in [5.1: Functions](../5-structuring-and-debugging-code/5.1-functions.md#exercises). For each exercise, make a copy of the [starter code](https://github.com/rocketacademy/basics-starter-code) as per instructions in [4.2: Our First Program](../4-getting-started-with-code/4.2-our-first-program.md#setup). For some exercises you may need to google for information. Please switch driver and navigator each exercise.

{% hint style="warning" %}
When cloning the starter code, put each exercise in a separate folder, like the folder structure in [Required Hardware and Software](../course-logistics/required-hardware-and-software.md#folder-structure-for-coding-basics). This is to avoid Git repos inside Git repos, which can cause problems with Git.
{% endhint %}

## Base

### Cost of Air Con

Create an app where the user enters a number of hours they use aircon, and the app tells them the cost. An aircon machine uses 2 kilowatts of electricity. Electricity costs $0.20 per kilowatt-hour.

### Screen Time

Create an app that takes a number of hours per day spent on your favourite app, and renders how many days you will spend in your lifetime on this app. Assume an average life expectancy of 82 years.

On [Android 10](https://wellbeing.google/tools/), [iOS 12](https://support.apple.com/en-us/HT208982), and later versions, we can see how many hours per day we spend on each app. Find the number of hours you spend per day on the app you use most. If you're not able to find this, you can google for common statistics.

For example, if I spend 2 hours per day on WhatsApp and I live an average lifetime, how many days will I spend in my lifetime on WhatsApp?

### Cost of Cellular Data

Create an app for the $19.99 50GB post-paid plan. The user will enter how many GB they use per month, and the app will tell them how much they are paying per GB. Assume that if the user exceeds 50GB, they need to purchase an additional 50GB plan. You may find the built-in function `Math.ceil` helpful for this \(can google how to use it\).

For example if the user only used 1GB this month, the app would calculate $19.99 per GB. If the user used 2GB this month, the app would calculate $9.98 per GB. If the user used 51GB this month, the app would calculate $0.78 per GB.

### Ice Machine

Create an app that calculates how many hours a hotel needs to run their ice machine to make enough ice for a given event. The user will input the number of guests for the event. Each guest needs 2 drinks. Each drink has 4 ice cubes. Each cube weights 1.5 grams. There are 454 grams per pound. The hotel's ice machine produces 5 pounds of ice per hour.

### Beer Order

Create an app for a bar to calculate how many kegs they need. The user will enter the average number of customers per day, and the app will estimate how many half-barrel-size kegs the bar needs per quarter. Assume an average customer drinks 2 pints per visit. There are 124 pints of beer in a half-barrel keg.

## More Comfortable

### Mortgage Calculator

Create a mortgage calculator for a bank. This bank is just starting so their loan terms are simple and the same for everyone. The user will enter the loan amount. The interest is 3% APR. The loan duration is 10 years.

Output several values including:

1. How much the customer will pay back in total, including the principal.
2. How much the customer will pay just in interest.
3. How much the customer's monthly payment will be.

## Reference Solution

[Here](https://github.com/rocketacademy/basics-starter-code/blob/day2/script.js) is a reference solution for Day 2 exercises. Please only view the reference solution for each exercise after you have attempted the exercise yourself. Note that there are many ways to implement these solutions and the reference solution is only 1 way.

