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

### Chat Bot Asks For User's Name

Add a new chat bot question that asks for the user's name and responds with a sentence containing the user's name. After greeting the user, the chat bot proceeds with the question from previous exercises.

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

### Chat Bot Asks For User's Age

Update the chat bot to ask for the user's age after their name. The chat bot's response will differ based on the user's age. For example, we can respond with different outputs if the user is under 20, between 20-60, and above 60.

#### Sample Chat Bot Conversation

```text
Bot: Hey! I'm Dennis. What's your name?
---
User: Kai.
---
Bot: Hey Kai! What a cool name. How old are you?
---
User: 63
---
Bot: What a wise age. I've got some questions for you! Hit Submit and I'll ask.
```

### Chat Bot Response Setting

Update our chat bot answer set array to be an object whose keys are answer set IDs and values are answer sets. Also add a `nextQuestion` key to each answer set object, whose value is always an answer set ID, enabling us to chain question sequences in a more logical manner.

#### Sample Answer Set Collection

```javascript
var chatBotData = {
  hasBeenCoding: {
    question: 'Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)',
    answers: {
      yes: `Wow! Me too! I've been working on the Blackjack project. Makes my day!`,
      no: 'Oh ok, just normally happy ;)',
      maybe: 'It seems thinking about coding also brings happiness!',
    },
    nextQuestion: 'timeOfDay',
  },
  timeOfDay: {
    question: 'Do you enjoy coding most during the day, night, or both? (day/night/both)',
    answers: {
      day: 'Ah yes, when the sun is high in the sky, I can feel its energy too.',
      night: 'Under the calm and gentle moon, I also find my focus.',
      both: "Indeed, I could code 24/7 if I didn't have to sleep!",
    },
    nextQuestion: 'weather',
  },
  // ... other questions here
};
```

## More Comfortable

### Dynamic Chat Bot

Determine the next question based on the user response.

#### Sample Answer Set Collection

```javascript
var chatBotData = {
  hasBeenCoding: {
    question: 'Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)',
    answers: {
      yes: {
        answer: `Wow! Me too! I've been working on the Blackjack project. Makes my day!`,
        nextQuestion: 'timeOfDay'
      }
      // ... other answers here
    }
  },
  timeOfDay: {
    question: 'Do you enjoy coding most during the day, night, or both? (day/night/both)',
    // ... answers here
  },
  // ... other questions here
};
```

### Barnum Questions

Implement questions that the bot can ask and answer universally. Have the bot ask these questions randomly interspersed with the other questions.

Read more on the Barnum Effect here: [https://en.wikipedia.org/wiki/Barnum\_effect](https://en.wikipedia.org/wiki/Barnum_effect)

## Daily Feedback

Please [share feedback](https://forms.gle/8P4TURiYNPDmyAmH9) on today's material. Thank you for making SWE101 great!

