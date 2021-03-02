---
description: 'To partake in RA''s courses, we will need the following hardware and software.'
---

# 💻 Required Hardware and Software

## Required Hardware

1. Desktop or laptop computer running the latest version of Windows or MacOS.
2. Webcam and microphone capable of enabling video conferencing on your computer. These are built-in for most laptops.
3. Internet connection that is able to run Zoom calls with no interruptions in audio or video. If you're not sure, let us know and we can schedule a chat!

## Required GUI-Application Software

GUI-application software is software we run with a graphical user interface \(GUI\) on our operating system.

### Slack

Slack is RA's primary mode of communication. It allows us to communicate across our school, within sections, and between individuals. Many tech companies internationally use Slack for internal communication.

#### **Installation**

1. Download the Slack mobile app from the Android Play Store or iOS App Store
2. Download the Slack desktop app for your relevant operating system [here](https://slack.com/intl/en-sg/help/categories/360000049043-Getting-started).

### Zoom

Zoom is RA's video conferencing software for class. Each section will have its own Zoom link to join for each class.

#### **Installation**

1. Download the Zoom Client for Meetings [here](https://zoom.us/download).
2. Start a new meeting to test that your webcam and microphone are working.

### Chrome

Chrome is the most popular web browser for software engineers because of its mature developer tools, which we will soon see in course videos. Chrome also has the largest library of browser extensions, which further help developers build and maintain software.

#### **Installation**

1. Download Chrome for your OS [here](https://www.google.com/intl/en_sg/chrome/).

### VSCode

VSCode is the most popular code editor in the world. We will write all code for Coding Basics inside of VSCode.

#### **Installation**

1. Download VSCode for your OS [here](https://code.visualstudio.com/download).
2. Follow instructions in the following [VSCode Formatter and Settings section](required-hardware-and-software.md#vscode-formatter-and-settings) to install a linter and linter settings for Coding Basics.

#### VSCode Formatter and Settings

We will make a few small configurations to VSCode to make it easier to work with.

{% embed url="https://youtu.be/gGzX8uUbuIo" caption="" %}

{% embed url="https://www.youtube.com/watch?v=YsRt9YJNFP4" caption="" %}

## Required Software Accounts

### GitHub

GitHub is the most popular code-hosting platform. Developers around the world use GitHub to share code and collaborate on projects. Rocket Academy's starter code and project templates are hosted on GitHub, and we will use GitHub in Coding Basics to download, host, and submit assignments. Each student will need a GitHub account to host and submit assignment code.

#### **Sign Up**

Go to [https://github.com/](https://github.com/), click the Sign Up button and follow on-screen instructions.

#### **Git and GitHub Credential Configuration**

Add your GitHub account credentials to your computer through the command line. Please replace `<YOUR_GITHUB_USERNAME>` AND `<YOUR_GITHUB_EMAIL>` with your credentials.

```text
git config --global user.name "<YOUR_GITHUB_USERNAME>"
git config --global user.email "<YOUR_GITHUB_EMAIL>"
```

You will not get any feedback from the terminal after entering these commands. Type the following command into the terminal to check your work.

```text
git config -l
```

You should see your username and email in the output, and possibly some other settings.

## Folder Structure for Coding Basics

In Coding Basics we will be creating many folders and cloning the starter code multiple times. To keep our code organised, we recommend the following folder structure.

{% hint style="info" %}
All code-related files and folders are in lowercase and kebab case \(hyphenated\) for ease of use on the command line. It is generally a bad idea to name any files or folders with a space in them, because spaces need to be escaped with backslash \(`\`\) on the command line.
{% endhint %}

1. Host all Coding Basics code in a folder called `basics`. Keep this in your `Documents` folder.
2. Within the `basics` folder, for each class session \(there are 12 total\) in Basics, create a new folder for that day. This means you will have 12 day-specific folders, such as `day1`, `day2`, ..., `day12`.
3. Within each `dayX` folder, create 1 folder for pre-class exercises and another folder for in-class exercises. These can look like `pre-class` and `in-class`, or any other naming scheme that works for you.
4. Within `pre-class` and `in-class` folders, keep a separate folder for every exercise you do that requires you to create a new Git repository or clone a new copy of the Basics starter code.

{% hint style="warning" %}
When cloning the starter code, choose to [name the target folder](../4-getting-started-with-code/4.1-intro-to-github.md#git-clone) to the relevant exercise name. This is so that we do not end up with Git repositories within Git repositories, which can confuse Git and cause issues.
{% endhint %}

![Sample basics folder in Finder on MacOS](../.gitbook/assets/jie-ping-20210302-15.50.36.png)

### Open Basics Folder in VSCode

When working with code, it's often necessary to jump between different files in the same repository, or even across repositories. Instead of using File &gt; Open to open a specific _file_ each time, we can save time by opening the _folder_ that contains all the files we may want to access. We can do this on Windows by going to File &gt; Open Folder, or on Mac with File &gt; Open, and selecting the relevant folder. This will open the folder and its file structure in the VSCode sidebar, allowing us to quickly jump between files in that folder without having to File &gt; Open every time.

{% hint style="info" %}
For Coding Basics, we recommend storing all of your code in a folder called `basics` as per the [recommended folder structure](required-hardware-and-software.md#folder-structure-for-coding-basics), and keeping that folder open in VSCode for the duration of the course.
{% endhint %}

![Sample basics folder in VSCode](../.gitbook/assets/jie-ping-20210302-15.52.14.png)

## Slack House Rules

### Ask Questions in the Channel

During RA's courses you will have questions about the material. To ensure your questions get answered soonest, and so that others can help and learn, please ask questions in the batch-wide channel, e.g. \#basics-batch-2. Please refrain from DMing \(direct messaging\) instructors with questions about course material.

### Provide Context for Questions

To get help effectively, we need to provide context. One of the biggest differences between junior and senior engineers is the amount of relevant context they provide with their questions. Junior engineers tend to ask questions without context: "It doesn't work. Could you help?" Senior engineers tend to ask questions with relevant context: "Program A is giving me Error X. I didn't expect X to happen because of Logic B. When I googled X, it told me that this might be related to Y, but I don't see Y anywhere in the system." At Rocket Academy, we want to be like senior engineers.

Try to answer the following when asking questions.

1. What is the problem? Include any relevant error messages in text or screenshots.
2. What is your hypothesis? Include relevant code snippets, [formatted as code](https://slack.com/intl/en-sg/help/articles/204145658-Create-a-snippet) in Slack.
3. What have you tried? Include any relevant output or Google results.

### Format Code in Slack

When sharing code in Slack, it's best to use Slack's built-in code formatting, which creates code blocks with monospaced text for easier reading. For single-line code like variables or files/folders in regular text, we can use a single backtick \(\`\) at the start and end of the code to format it. For multi-line blocks of code like functions, we recommend using [Slack code snippets](https://slack.com/intl/en-sg/help/articles/204145658-Create-a-snippet) which include syntax highlighting and take up less space in the Slack window.

