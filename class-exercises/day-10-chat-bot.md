# Day 10: Chat Bot

## Introduction

Today we will practise more complex code logic with nested objects and arrays. For each exercise, make a copy of the [starter code](https://github.com/rocketacademy/swe101-starter-code) as per instructions in [4.2: Our First Program](../4-getting-started-with-code/4.2-our-first-program.md#setup). Reminder to `npm install` to activate ESLint! Please switch driver and navigator each app. 

{% hint style="warning" %}
When cloning, put each app in a separate folder, like the folder structure in [Required Hardware and Software](../course-logistics/required-hardware-and-software.md#folder-structure-for-swe101). This is to avoid Git repos inside Git repos, which can cause problems with Git.
{% endhint %}

We will make a chat bot that asks questions when the submit button is clicked. The user can respond by typing and submitting input and the bot can respond further. Please read all exercises before beginning to see how the chat bot can become more complex.

### Sample Chat Bot Conversation

The following is a sample conversation between Bot and User.

```text
Bot: Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)
---
User: Yes.
---
Bot: Wow! Me too! I've been working on the Blackjack project. Makes my day!
```

### Store Chat Bot Responses in Object

We will use JavaScript Objects to encode the chat bot's potential responses.

```javascript
var answer = {
  yes: `Wow! Me too! I've been working on the Blackjack project. Makes my day!`,
  no: 'Oh ok, just normally happy ;)',
  maybe: 'It seems thinking about coding also brings happiness!',
};
```

### Retrieve Chat Bot Responses with User Input

We can retrieve the relevant chat bot response by using user input to access the relevant response from the answers object.

```javascript
// value of input is 'yes'
var answerText = answer[input];
```

## Base

### Single Chat Bot Answer Set

Implement the chat bot described above, that asks a yes/no/maybe question and can respond to a user's response of "yes", "no", or "maybe".

### Multiple Chat Bot Answer Sets

Extend the capabilities of the chat bot by storing question and answer text in the same object, like the following.

#### Sample Answer Set

```javascript
var chatBotAnswerSet = {
  question: 'Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)',
  answers: {
    yes: `Wow! Me too! I've been working on the Blackjack project. Makes my day!`,
    no: 'Oh ok, just normally happy ;)',
    maybe: 'It seems thinking about coding also brings happiness!',
  },
};
```

To have our chat bot support more than 1 question, put the above `chatBotAnswerSet` object into an array of chat bot answer sets. The bot will pick which question to ask and answer next. The following exercises will add new answer sets to our answer set array.

#### Sample Array of Answer Sets

```javascript
var chatBotAnswerSets = [
  {
    question: 'Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)',
    answers: {
      yes: `Wow! Me too! I've been working on the Blackjack project. Makes my day!`,
      no: 'Oh ok, just normally happy ;)',
      maybe: 'It seems thinking about coding also brings happiness!',
    },
  },
  // More answer sets here
];
```

### Chat Bot Asks For Your Name

Add a new chat bot question that asks for the user's name and responds with the user's name.

#### Sample Chat Bot Conversation

```text
Bot: Hey! I'm Dennis. What's your name?
---
User: Kai.
---
Bot: Hey Kai! What a cool name.
(chat bot continues)
```

Use the user's name in the bot's subsequent output. You may want to store the user name in a global variable.

#### Sample Subsequent Bot Output

```text
Bot: You know Kai, I just read in the paper that scientists discovered that apples can cook.
```

### Chat Bot Asks Your Age

```text
Bot: Hey! I'm Dennis. What's your name?
---
User: Kai.
---
Bot: Hey Kai! What a cool name. How old are you?
---
User: 63
---
Bot: Wow that's old.
Bot: Kai, I bet people at your advanced age don't know that pilots never know how to cook.
Bot: What's the most important thing you've learned at your age?
---
User: (answer)
---
Bot: Cool!
Bot: But for someone so elderly I thought you might also want to know that nowadays, tables can climb.
Bot: What do you think of that one!?
```

You are adding these 2 functionalities:

**1\)** When the user gives their age, set some behaviour that is dependent on the number of years they give. \(over 60 is old, under 20 is young, etc.\)

**2\)** The bot repeats itself with 2 different modes of response. In this example it's:

**a\)** `{name} I bet {something about age} don't know that ...`  
**b\)** `But for someone {age} I thought you might also want to know that nowadays`

### Chat Bot Response Setting

Instead of an array, use an object to hold all the questions. And use another key to set the order the questions are asked in.

```javascript
var chatBotData = {
  first: {
    question: 'Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)',
    answers: {
      yes: `Wow! Me too! I've been working on the Blackjack project. Makes my day!`,
      no: 'Oh ok, just normally happy ;)',
      maybe: 'It seems thinking about coding also brings happiness!',
    },
    nextQuestion: 'nice',
  },
  nice: {
    question: 'Say by the way do you have $20 I could borrow? (yes/no/maybe)',
    answers: {
      yes: 'Ok thanks so much. Pay you back soon.',
      no: 'Ah, never mind.',
      maybe: "Yea, but it's actually for my mother. Shes not feeling great.",
    },
    nextQuestion: 'weather',
  },
  // [...] other questions down here
};
```

## More Comfortable

### Dynamic Chat Bot

Change the next question based on the user response.

```javascript
var chatBotData = {
  first: {
    question: 'Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)',
    answers: {
      yes: {
        yes: `Wow! Me too! I've been working on the Blackjack project. Makes my day!`,
        nextQuestion : 'nice'
      }
      // [...] other answers down here

    }
  },
  nice: {
    question: 'Say by the way do you have $20 I could borrow? (yes/no/maybe)',
  // [...] other questions down here
};
```

### Chat Bot Asks Your Age

```text
Bot: Hey! I'm Dennis. What's your name?
---
User: Kai.
---
Bot: Hey Kai! What a cool name. How old are you?
---
User: 63
---
Bot: Wow! Me too! My back really hurts today too.
Bot: Say did you eat breakfast today? (yes/no/maybe)
```

You are adding these 2 functionalities:

**1\)** When the user gives their age, set some behaviour that is dependent on the number of years they give. \(over 60 is old, under 20 is young, etc.\)

**2\)** The bot repeats itself with 2 different modes of response. In this example it's:

**a\)** `{name} I bet {something about age} don't know that ...`  
**b\)** `But for someone {age} I thought you might also want to know that nowadays`

```javascript
var chatBotData = {
  first: {
    question: 'How old are you?',
    answers: [
      {
         range: [58,66],
         answer: 'Wow! Me too! My back really hurts today too.',
         nextQuestion: 'nice'
      }
      // [...] other answers down here
    ]
  },
  nice: {
    question: 'Say did you eat breakfast today? (yes/no/maybe)',
  // [...] other questions down here
};
```

### Barnum Questions

Implement questions that the bot can ask and answer universally. Have the bot ask these questions randomly interspersed with the other questions.

See: the Barnum Effect: [https://en.wikipedia.org/wiki/Barnum\_effect](https://en.wikipedia.org/wiki/Barnum_effect)

## Daily Feedback

Please [share feedback](https://forms.gle/8P4TURiYNPDmyAmH9) on today's material. Thank you for making SWE101 great!

