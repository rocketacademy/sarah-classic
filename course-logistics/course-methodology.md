# ✍🏽 Course Methodology

## Class Organisation

Each cohort will be split into sections of no more than 10 students. Each section will be led by a section leader from RA, who will be the primary point of contact for that section during SWE101. Sections are assigned randomly and fixed for the duration of the course. Students will meet with their respective sections for classes to maximise interaction and learning. Students will be able to interact with students from other sections via Slack.

## Course Components

SWE101 applies a flipped classroom model that consists of 2 components: self-learning and live classes.

### Self-Learning

The goal of self-learning is for students to learn concepts **before** class, such that class time can be spent interacting with peers to solidify one's understanding of the concepts.

**Self-learning is mandatory**, and will consist of videos and exercises due before each class.

### **Live Classes**

The goal of live classes is for students to solidify understanding of concepts through explaining concepts with peers and working through exercises in pairs based on those concepts.

**Live classes are mandatory** and will be held from 7-9pm on Tuesdays and 1-3pm on Saturdays over Zoom. There will be 1 pre-course briefing and 12 classes total. Each section will have their own Zoom room to meet for live classes.

Live classes will generally follow this outline:

1. 15 minutes for students to explain and review concepts with the section
2. 90 minutes of pair programming on new exercises with a designated peer
3. 15 minutes for students to summarise and conclude with the section

### Pair Programming

Pair programming is a common software engineering activity that involves 2 engineers working on the same computer, on the same problem together. Typically, 1 engineer acts as the "driver", controlling the keyboard and writing the code. The other engineer acts as the "navigator", helping to guide the overall strategy and look up documentation \(on a separate computer\).

Pair programming is commonly used for the following purposes:

1. To share knowledge across teams or between juniors and seniors, where the navigator is typically more knowledgeable about that part of the system than the driver.
2. To ensure an important piece of software gets done correctly. Sometimes, for difficult software engineering problems with large future repercussions, it is more worth it to spend 2 engineers' time to get it right, than to spend 1 engineer's time and risk getting it wrong.

During SWE101, we will use pair programming to solidify our understanding of concepts by coding and explaining in front of each other. The majority of class time will be spent pair programming with designated pairings that will rotate each class.

### Project Presentations

Please follow [SWE1 project presentation format](https://swe1.rocketacademy.co/course-logistics/course-methodology#project-presentations) for project presentations. Thank you!

## Exercise, Project Strategy

Please read through all sections of exercises and projects before starting. Later parts of exercises and projects may require different code architecture than earlier parts. If we plan on implementing later parts, we may want to design our code in a certain way to avoid lengthy refactoring later.

### Base, More Comfortable

To accommodate different learning speeds and prior experience, exercises and projects may have different sections to differentiate what must be completed to minimally understand concepts, and what are extra exercises or features to help solidify one's understanding.

#### Base

Everything in the Base section must be completed to minimally understand relevant concepts. When short on time, we can complete the Base section then move onto the next exercise or project.

#### More Comfortable

The More Comfortable section is for students that wish to push their boundaries. Students can complete SWE101 without touching More Comfortable, but students that complete More Comfortable exercises will gain more experience and may be more valuable in the job market.

## Code Review

On days when projects are due, we will review each others' code in groups of 2 or 3 during class. If there is a group of 3, the triplet will do individual code review together so that everyone gets to review someone else's code, then split into 2 groups for pairing.

### Individual Review

#### 1\) Clone Partner's Code

You'll be paired up so that you can exchange the links for your repos via Slack. Remember that the forked repo is the one that is under your GitHub account, not Rocket Academy's. If you have forked the repo but haven't pushed your latest code to GitHub, take a moment now to `git push`. Let your partner know you're updating the repo. Run a `git clone <REPO_URL> <NEW_FOLDER_NAME>` to get a copy of your partner's code.

{% hint style="info" %}
Note: You need to rename the folder when you clone if you already have a folder named after the repo where you're making the clone.
{% endhint %}

#### 2\) Run Partner's Code

Open the code in the browser and test it. What does it do? If you're not sure what it does look inside `script.js` to see.

#### 3\) Read Partner's Code

Read the code and answer the following questions.

1. How does it work?
2. Does it have any obvious errors?
3. Does it implement something that you were trying to do?
4. Does it implement a feature that you haven't started yet? How does the code work?

#### 4\) Play with Partner's Code

It may be helpful to make changes to the code to help you understand it better. Write some `console.log` that would help you figure out what the code does. Break the code in a certain way to prove how it works or doesn't work.

#### 5\) Discuss

Once both partners are done with \#1-4, discuss what you saw.

### Peer Review

You'll be pair programming on one person's project at a time. The goal is to get working versions for each person. **The driver will be the person who is \*not\* working on their own code.** 

Once done with one person's code, send the code to your pair \(it's their project\) via a [Slack code snippet](https://slack.com/intl/en-sg/slack-tips/share-code-snippets). Switch to work on the other person's code.

{% hint style="info" %}
Note: If you are working on your partner's code you can't push to their repo because GitHub repos are read-only to non-owners by default.
{% endhint %}

If you both have working versions, implement a new feature in one of the projects together.

