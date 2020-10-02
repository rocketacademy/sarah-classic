# Day 9: Chat Bot

Given these arrays of words:

```javascript
var verbs = ['climb','read','cook','dance'];
var pluralNouns = ['apples','bananas','tables','pilots'];
var exclamations = ['Wow!','Amazing!','Cool.','No way!'];
```

Create a chat bot that can have the following conversation.

```text
Bot: Hey how are you?
---
User: Good.
---
Bot: Wow! Me too!
Bot: You know, I just read in the paper that scientists discovered that apples can cook.
Bot: What do you think about that?
---
User: Interesting
---
Bot: I know right??
Bot: I thought so too.
Bot: You know, I just read [...](bot repeats itself)
```

Note that the bot outputs everything in the grey box. The user inputs things in the input box. You don't need to display any of the user's inputs in the grey box.

Use these arrays to randomly construct the things that the chat bot is saying.

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
Bot: What's the most imporant thing you've learned at your age?
---
User: (answer)
---
Bot: Cool!
Bot: But for someone so elderly I thought you might also want to know that nowadays, tables can climb.
Bot: What do you think of that one!?
```

You are adding these 2 functionalities: 

**1\)** When the user gives their name, set some behavior that is dependent on the number of years they give. \(over 60 is old, under 20 is young, etc.\)

**2\)** The bot repeats itself with 2 different modes of response. In this example it's:  
  
  **a\)** `{name} I bet {something about age} don't know that ...`  
  **b\)** `But for someone {age} I thought you might also want to know that nowadays`

## Daily Feedback

Please [share feedback](https://forms.gle/NK3mez8er7pPo7tu5) on today's material. Thank you for making SWE101 great!

