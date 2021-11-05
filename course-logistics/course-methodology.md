# 🧑🏫 Course Methodology

## Class Organisation

Each cohort will be split into sections of no more than 20 students. Each section will be led by a section leader from RA, who will be the primary point of contact for that section during Coding Basics, and assisted by an Assistant Section Leader. Sections are assigned randomly and fixed for the duration of the course. Students will meet with their respective sections for classes to maximise interaction and learning. Students will be able to interact with students from other sections via Slack.

## Course Components

Coding Basics applies a flipped classroom model that consists of 2 components: self-learning and live classes.

### Self-Learning

The goal of self-learning is for students to learn concepts **before** class, such that class time can be spent discussing those concepts. **Self-learning is mandatory**, and will consist of videos and exercises listed under the Pre-Class header.

### **Live Classes**

The objective of live classes is to enable students to gain a better understanding of the concepts learnt during self-learning through instructor facilitated discussion and pair-programming exercises.

**Live classes are mandatory.** They will be held over Zoom.

There will be 1 pre-course briefing and 12 classes in total. Each section will have their own Zoom room to meet for live classes.

Live classes will generally follow this outline:

1. 30 minutes for students to explain and review concepts with the section
2. 85 minutes of pair programming on in-class exercises with a designated peer
3. 5 minutes for students to ask any questions that they might have about the day's class, and for the instructor to preview the next class

### Pair Programming

Pair programming is a common software engineering activity that involves 2 engineers working on the same computer, on the same problem together. Typically, 1 engineer acts as the "driver", controlling the keyboard and writing the code. The other engineer acts as the "navigator", helping to guide the overall strategy and look up documentation (on a separate computer).

Pair programming is commonly used for the following purposes:

1. To share knowledge across teams or between juniors and seniors, where the navigator is typically more knowledgeable about that part of the system than the driver.
2. To ensure an important piece of software gets done correctly. Sometimes, for difficult software engineering problems with large future repercussions, it is more worth it to spend 2 engineers' time to get it right, than to spend 1 engineer's time and risk getting it wrong.

During Coding Basics, we will use pair programming to solidify our understanding of concepts by coding and explaining in front of each other. The majority of class time will be spent pair programming in designated pairs that will change every live class.

### Project Presentations

Students present projects in class on the last day of each project. Presentations should cover the following.

1. Demo
2. Biggest challenges faced
3. What they might do differently next time

In order to keep each presentation relatively brief, the presentation should be focused around the _features_ of the game. The presentation is not a code review, as that would take up too much time.

## Slack

Slack is the app we use to communicate within a section. It provides real-time but asynchronous messaging that should feel casual and fun. **The aim is for a good portion of the course **_**not composed of this website, videos or live meetings**_** happens in your section Slack channel.**

### Slack House Rules

The following are a set of guidelines to follow when using Slack at RA. By setting strong culture of messaging on this platform for questions and discussion we hope to further enhance the RA Basics experience.

### Ask Questions in the Channel

During RA's courses you will have questions about the material. To ensure your questions get answered soonest and so others can help and learn, please ask questions in the batch-wide or section-wide channel (including about installing required software). _Therefore, please refrain from DMing (direct messaging) instructors with questions about course material._

### Provide Context for Questions

To get help effectively, we need to provide context. One of the biggest differences between junior and senior engineers is the amount of relevant context they provide with their questions.

Questions **without context** usually sound like: "_It doesn't work. Could you help?_" A question with **relevant** context might be more like: "_Program A is giving me Error X. I didn't expect X to happen because of Logic B. When I googled X, it told me that this might be related to Y, but I don't see Y anywhere in the system._"&#x20;

Contextual questions help the answerer by filling in the details needed to fully understand the question. In the field of programming (not just for students) it is well known that simply formulating the question often leads directly to the answer. [This is called rubber-duck programming.](https://en.wikipedia.org/wiki/Rubber\_duck\_debugging)

#### How to ask contextual questions

Try to answer the following when asking questions. What is the problem? Include any relevant error messages in text or screenshots. What is your hypothesis? [Include relevant code snippets, formatted as code in Slack.](course-methodology.md#slack-code-snippets) What have you tried? Include any relevant output or Google results. This will not only assist the person helping you, it will actually make you a better coder.

### Format Code in Slack

When sharing code in Slack, it's best to use Slack's built-in code formatting, which creates code blocks with monospaced text for easier reading. For single-line code like variables or files/folders in regular text, we can use a single backtick (\`) at the start and end of the code to format it.

### Slack Code Snippets

![Click the lightning icon](../.gitbook/assets/slack-snip-1.png)

Click the lightning icon to get message options. Type ahead in the box to get the Snippet option.

![The Slack Snippet creation interface](../.gitbook/assets/slack-snip-2.png)

Make sure that your code will be formatted by selecting the JavaScript type. Note how in a snippet the line numbers are displayed. This makes it easier to discuss the code you put in Slack.

### Use Threads

Slack has the ability to nest contextual messages. When you want to reply to a message's topic, use a thread so that messages stay contextual and others can continue to send messages without interrupting a discussion of a specific topic.

## Exercise, Project Strategy

Please read through all sections of exercises and projects before starting. Later parts of exercises and projects may require different code architecture than earlier parts. Failure to take into consideration all aspects of the project might result in a lengthy refactor.

### Base, More Comfortable

To accommodate different learning speeds and prior experience, exercises and projects may have different sections to differentiate what must be completed to minimally understand concepts, and what are extra exercises or features to help solidify one's understanding.

#### Base

Everything in the Base section must be completed to minimally understand relevant concepts. When short on time, we can complete the Base section then move onto the next exercise or project.

#### More Comfortable

The More Comfortable section is for students that wish to push their boundaries. Students can complete Coding Basics without touching More Comfortable, but students that complete More Comfortable exercises will gain more experience and may be more valuable in the job market.

## Code Review

On days when projects are due, we will review each others' code in groups of 2 or 3 during class. If there is a group of 3, the triplet will do individual code review together so that everyone gets to review someone else's code, then split into 2 groups for pairing.

### Individual Review

#### 1) Clone Partner's Code

You'll be paired up so that you can exchange the links for your repos via Slack. Remember that the forked repo is the one that is under your GitHub account, not Rocket Academy's. If you have forked the repo but haven't pushed your latest code to GitHub, take a moment now to `git push`. Let your partner know you're updating the repo. Run a `git clone <REPO_URL> <NEW_FOLDER_NAME>` to get a copy of your partner's code.

{% hint style="info" %}
Note: You need to rename the folder when you clone if you already have a folder named after the repo where you're making the clone.
{% endhint %}

#### 2) Run Partner's Code

Open the code in the browser and test it. What does it do? If you're not sure what it does look inside `script.js` to see.

#### 3) Read Partner's Code

Read the code and answer the following questions.

1. How does it work?
2. Does it have any obvious errors?
3. Does it implement something that you were trying to do?
4. Does it implement a feature that you haven't started yet? How does the code work?

#### 4) Play with Partner's Code

It may be helpful to make changes to the code to help you understand it better. Write some `console.log` that would help you figure out what the code does. Break the code in a certain way to prove how it works or doesn't work.

#### 5) Discuss

Once both partners are done with #1-4, discuss what you saw.

### Peer Review

You'll be pair programming on one person's project at a time. The goal is to get working versions for each person. **The driver will be the person who is \*not\* working on their own code. **

Once done with one person's code, send the code to your pair (it's their project) via a [Slack code snippet](https://slack.com/intl/en-sg/slack-tips/share-code-snippets). Switch to work on the other person's code.

{% hint style="info" %}
Note: If you are working on your partner's code you can't push to their repo because GitHub repos are read-only to non-owners by default.
{% endhint %}

If you both have working versions, implement a new feature in one of the projects together.
