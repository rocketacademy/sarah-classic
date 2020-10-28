# Day 10: Chat Bot

## Day 10: Chat Bot

**Let's make a chat bot that can ask the user a single question when the submit button is clicked.**

The user can respond to the question by typing in the input and the bot can respond.

Read the entire set of exercises before you begin so you can see how the chat bot will become more complex.

Use an object to encode the kinds of things the chat bot will respond with:

```text
Bot: Hey, wow you look good today! Did you lose weight? (yes/no/maybe)
---
User: Yes.
---
Bot: Wow! Me too!
Bot: I've been trying this new raw meat diet. Works wonders.
```

The answer to one question will be encoded in an object:

```javascript
var answer = {
  yes: 'Wow! Me too! Ive been trying this new raw meat diet. Works wonders.',
  no: 'Oh ok, just normally good lookin ;)',
  maybe: 'This zoom meeting makes you look thin.',
};
```

You can access the data directly by using the user response as an attribute in the object.

```javascript
var answerText = answer[input]; // value of input is: 'yes'
```

### Complex Chat Bot Data

Extend the capabilities of the chat bot by putting the text of the question with the answer:

```javascript
var chatBotData = {
  question: 'Hey, wow you look good today! Did you lose weight? (yes/no/maybe)',
  answers: {
    yes: 'Wow! Me too! Ive been trying this new raw meat diet. Works wonders.',
    no: 'Oh ok, just normally good lookin ;)',
    maybe: 'This zoom meeting makes you look thin.',
  },
};
```

### Chat Bot Answer Sets

Put the chatBotData object into an array of similar question and answer objects. The bot will pick which question to ask and answer next.

### Chat Bot Asks For Your Name

```text
Bot: Hey! I'm Dennis. What's your name?
---
User: Kai.
---
Bot: Hey Kai! What a cool name.
(chat bot continues)
```

Use the user's name in the bot's output.

```text
Bot: You know Kai, I just read in the paper that scientists discovered that apples can cook.
```

## &lt;&lt;&lt;&lt;&lt;&lt;&lt; Updated upstream

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

> > > > > > > Stashed changes

### Chat Bot Response Setting

Instead of an array, use an object to hold all the questions. And use another key to set the order the questions are asked in.

```javascript
var chatBotData = {
  first: {
    question:
      'Hey, wow you look good today! Did you lose weight? (yes/no/maybe)',
    answers: {
      yes:
        'Wow! Me too! Ive been trying this new raw meat diet. Works wonders.',
      no: 'Oh ok, just normally good lookin ;)',
      maybe: 'This zoom meeting makes you look thin.',
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

### More Comfortable

#### Dynamic Chat Bot

Change the next question based on the user response.

```javascript
var chatBotData = {
  first: {
    question: 'Hey, wow you look good today! Did you lose weight? (yes/no/maybe)',
    answers: {
      yes: {
        yes: 'Wow! Me too! Ive been trying this new raw meat diet. Works wonders.',
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

#### Chat Bot Asks Your Age

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

#### Barnum Questions

Implement questions that the bot can ask and answer universally. Have the bot ask these questions randomly interspersed with the other questions.

See: the Barnum Effect: [https://en.wikipedia.org/wiki/Barnum\_effect](https://en.wikipedia.org/wiki/Barnum_effect)

### Daily Feedback

Please [share feedback](https://forms.gle/NK3mez8er7pPo7tu5) on today's material. Thank you for making SWE101 great!

