---
description: 'To take part in SWE101, you will need the following hardware and software.'
---

# 💻 Required Hardware and Software

## Required Hardware

1. Desktop or laptop computer running the latest version of Windows or MacOS.
2. Webcam and microphone capable of enabling video conferencing on your computer. These are built-in for most laptops.
3. Internet connection that is able to run Zoom calls with no interruptions in audio or video. If you're not sure, let us know and we can schedule a chat!

## Required Application Software

Application software is software we run with a graphical user interface on our operating system.

1. Slack
2. Zoom
3. VSCode
4. Chrome

### Slack

Slack is RA's primary mode of communication. It allows us to communicate across our school, within sections, and between individuals. Most tech companies internationally use Slack to communicate internally.

#### Installation

1. Download the Slack mobile app from Android's Play Store or iOS's App Store
2. Download the Slack desktop app for your relevant operating system \(OS\) [here](https://slack.com/intl/en-sg/help/categories/360000049043-Getting-started).

### Zoom

Zoom is RA's video conferencing software for live classes. Each section will have its own Zoom link to join for each class.

#### Installation

1. Download the Zoom Client for Meetings [here](https://zoom.us/download).
2. Start a new meeting to test that your webcam and microphone are working.

### Chrome

Chrome is the most popular web browser for software engineers because of its mature developer tools \(we will soon see in course videos\). Chrome also has the largest library of browser extensions, which further help developers build and maintain web software.

#### Installation

1. Download Chrome for your OS [here](https://www.google.com/intl/en_sg/chrome/).

### VSCode

VSCode is RA's software editor of choice. It is also the most popular code editor in the world. We will write all code for SWE101 inside of VSCode.

#### Installation

1. Download VSCode for your OS [here](https://code.visualstudio.com/download).
2. Follow instructions in the following [VSCode Formatter and Settings section](required-hardware-and-software.md#vscode-formatter-and-settings) to install a linter and linter settings for SWE101.

### VSCode Formatter and Settings

We will make a few small configurations to VSCode to make it easier to work with.

{% embed url="https://youtu.be/gGzX8uUbuIo" caption="" %}

#### Install the ESLint and Prettier Extensions for VSCode

This will auto-format your code and give you warnings about common simple coding errors.

Install the ESLint extension for VSCode [here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), and the Prettier extension for VSCode [here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

{% hint style="warning" %}
"ES" stands for ECMAScript, which is the technical specification for JavaScript, and "lint" in a coding context refers to programmatic detection of formatting and syntax errors. ESLint enables us to detect and fix formatting and syntax errors in JavaScript, and the VSCode ESLint extension allows us to do so automatically within VSCode.
{% endhint %}

#### Get the SWE101 VSCode snd ESLint Settings

```text
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.minimap.enabled": false,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "eslint.format.enable": true,
  "eslint.lintTask.enable": true,
  "eslint.migration.2_x": "off"
}
```

Open VSCode and open the command prompt with: **⌘ + Shift + P** \(Windows: **Ctrl + Shift + P**\).

Type to get the settings file: `Preferences: Open Settings (JSON)` \(Start typing this to get the autocomplete\).

Replace the file with the settings code above. Save the file and restart VSCode.

### Window Snapping Software

On both Windows and MacOS, there are features to automatically snap windows to standard places on your screen. This is especially helpful when, say, you are coding, and you want to view your code on one side and documentation on another. Without window snapping we need to manually drag our windows and resize them. With window snapping, we can get our windows in the right size and place with a single swipe or keyboard shortcut.

#### Windows

Window snapping is built-in to Windows, and you can take advantage of it with instructions [here](https://support.microsoft.com/en-sg/help/4027324/windows-10-snap-your-windows).

#### Mac

Window snapping is not built-in to MacOS, and we will need to download an external program to snap windows. We recommend any of the following.

1. [Magnet](https://magnet.crowdcafe.com/) \(S$5\) is an actively maintained window snapping app on the Mac App Store.
2. [Spectacle](https://www.spectacleapp.com/) \(free\) is similar to Magnet, but is no longer actively maintained, which means that it may stop working when Apple makes changes to MacOS.

## Required Command Line Software

Command line software is software primarily operated from the command line \(we will explain this in a video\) that may not have a graphical user interface we can interact with. This software is typically used by software developers to write programs. This is in a separate section so that students do not expect to run this software from their computer's Applications folder.

1. Git
2. Node.js

### Git

Git is the most popular software version control system. All tech companies use version control to manage contributions to and releases of their software. We will be using basic Git during SWE101 to download and upload copies of projects.

On Windows, Git installation also enables us to run our terminal in the Bash programming language. The terminal is the program that allows us to run commands on our computers. Bash is a terminal language used across OSes, allowing us to run commands on our computers in the same way across Windows and Mac. A version of Bash called Zsh \(pronounced "zoosh"\) is installed by default on MacOS.

#### Installation

1. Download and install Git for your OS [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
2. \[Windows Only\] Follow [command line setup instructions below](required-hardware-and-software.md#command-line-setup-for-windows) to set Bash as the terminal language.
3. Verify Git is installed by typing `git --version` in your [VSCode terminal](https://code.visualstudio.com/docs/editor/integrated-terminal) and hitting `enter`. This should print out a version number on the next line like `git version 2.28.0`.

### Node.js

Node.js is the most popular JavaScript runtime. "Runtime" in a coding context refers to the environment in which code runs. ".js" is the file extension for JavaScript files, and a common suffix for JavaScript packages. We will use Node.js to lint and run our JavaScript code in non-browser contexts.

#### Installation

1. Download and install Node.js for your OS [here](https://nodejs.org/en/download/). It will come with NPM, which stands for Node.js Package Manager. Package managers are used to download and manage 3rd-party packages that our programs rely on, such as ESLint.
2. Verify Node.js is installed by typing `node -v` in your [VSCode terminal](https://code.visualstudio.com/docs/editor/integrated-terminal) and hitting `enter`. This should print out a version number on the next line like `v12.18.3`.

### Command Line Setup for Windows

We will need to use the command line \(also known as a terminal, more on this in a later video\) during SWE101. Windows uses a terminal language called PowerShell by default, but this is not the most widely-used terminal language. Most software engineers use terminal languages made for Unix-based operating systems, e.g. Linux and MacOS. To ensure that Windows and Mac users can use the same terminal commands, Windows users will need to install Bash, a Unix-based terminal language. Please [download and install Git](required-hardware-and-software.md#git) first. The following instructions are adapted from [Stack Overflow](https://stackoverflow.com/questions/42606837/how-do-i-use-bash-on-windows-from-the-visual-studio-code-integrated-terminal/50527994#50527994).

1. Open Visual Studio Code and press and hold Ctrl + \` to open the terminal.

![](../.gitbook/assets/v4hx4.png)

1. Open the command palette using Ctrl + Shift + P.
2. Type and select "Select Default Shell".
3. Select Git Bash from the options.
4. Restart VSCode and open terminal again. The terminal should now run with Bash.

![](../.gitbook/assets/5zlap.png)

1. You can toggle between different terminal languages from the dropdown in terminal.

![](../.gitbook/assets/1agtr.png)

### Verify Git and Node Installation

In case it helps, here is a video demonstrating how to verify Git and Node installation on a Mac. The video uses the built-in Mac terminal, but we should be able to do the same within the VSCode terminal. We recommend Windows students use the VSCode terminal for SWE101.

{% embed url="https://www.youtube.com/watch?v=YsRt9YJNFP4" caption="" %}

## Required Software Accounts

### GitHub

GitHub is the most popular code-hosting platform. Developers around the world use GitHub to share code and collaborate on projects. Rocket Academy's starter code and project templates are hosted on GitHub, and we will use GitHub in SWE101 to download, host, and submit assignments. Each student will require a GitHub account to host and submit assignment code.

#### Sign Up

Go to [https://github.com/](https://github.com/), click the Sign Up button and follow on-screen instructions.

#### Git & GitHub Credential Configuration

Add your GitHub account credentials to your computer through the command line. You should not get any response from the command line after entering these commands.

```text
git config --global user.name "your-github-username"
git config --global user.email "github-acct-email@example.com"
```

You **will not** get any feedback from the terminal after entering these commands. Type the following command into the terminal to check your work.

```text
git config -l
```

You should see your user name and email in the output. \(And possibly some other settings\).

## Folder Structure for SWE101

In SWE101 we will be creating many folders and cloning the starter code multiple times. To keep things organised, we recommend the following folder structure.

_Note that all files and folders are in lowercase and kebab case \(hyphenated\) for ease of use on the command line. It is generally a bad idea to name any files or folders with a space in them._

1. Host all SWE101 code in a folder called `swe101`. Keep this in your `Documents` folder.
2. Within the `swe101` folder, for each class session \(there are 13 total\) in SWE101, create a new folder for that day. This means you will have 13 day-specific folders, such as `day1`, `day2`, ..., `day13`.
3. Within each `dayX` folder, create 1 folder for homework exercises and another folder for class-time exercises. These can look like `homework` and `class`, or any other naming scheme that works for you.
4. Within `homework` and `class` folders, keep a separate folder for every exercise you do that requires you to create a new Git repository or clone a new copy of the SWE101 starter code.

{% hint style="warning" %}
When cloning the starter code, choose to [name the target folder](../4-getting-started-with-code/4.1-intro-to-github.md#clone) to the relevant exercise name.

This is so that we do not end up with Git repositories within Git repositories, which can confuse Git and cause issues.
{% endhint %}

![What my \`swe101\` directory looks like in Finder on my Mac](../.gitbook/assets/jie-ping-20200924-16.57.21.png)

## Open SWE101 Folder in VSCode

When working with code, it's often necessary to jump between different files in the same repository, or even across repositories. Instead of using File &gt; Open to open a specific _file_ each time, we can save time by opening the _folder_ that contains all the files we may want to access. We can do this on Windows by going to File &gt; Open Folder, or on Mac with File &gt; Open, and selecting the relevant folder. This will open the folder and its file structure in the VSCode sidebar, allowing us to quickly jump between files in that folder without having to File &gt; Open every time.

{% hint style="warning" %}
For SWE101, we recommend storing all of your code in a folder called `swe101` as per the [recommended folder structure](required-hardware-and-software.md#folder-structure-for-swe101), and keeping that folder open in VSCode for the duration of the course.
{% endhint %}

![What my \`swe101\` directory looks like when I open it in VSCode](../.gitbook/assets/jie-ping-20200924-16.58.52.png)

## Using Slack Effectively

### Ask Questions in the Channel

During RA's courses you will inevitably have questions about the material. To ensure your question gets answered as soon as possible, and so that others can help and learn as well, please ask your questions in the batch-wide channel, e.g. \#swe101-batch-2. Please refrain from DMing \(direct messaging\) instructors with questions about course material.

### Provide Context for Questions

The ability to ask technical questions effectively is one of the biggest differences between junior and senior engineers. Junior engineers tend to ask questions like: "It doesn't work. Could you help?" Senior engineers tend to ask questions more like: "Program A is giving me Error X. I didn't expect X to happen because of Logic B. When I googled X, it tells me that this may be related to Y, but I don't see Y anywhere in the system."

In SWE101, we want to start acting like senior engineers. Your peers want to help you, and Slack is a convenient way to get help 24/7, but for others to help effectively, we need to give them context. When asking questions in Slack, try to include the following, while including any relevant context or google results.

1. What is the problem? Include any relevant error messages in text or screenshots.
2. What is your hypothesis? Include relevant portions of your code, [formatted as code](required-hardware-and-software.md#format-code-in-slack) in Slack. For snippets of code longer than your computer screen height, please use Slack [code snippets](https://slack.com/intl/en-sg/help/articles/204145658-Create-a-snippet).
3. What have you tried?

### Format Code in Slack

When sharing code in Slack, it's best to use Slack's built-in code formatting, which creates a code block with monospaced text for easier reading.

For single-line code like variables or files/folders in regular text, we can use a single backtick \(\`\) at the start and end of the code to format it.

For multi-line blocks of code like functions, we can use triple backtick \(\`\`\`\) to format that code in Slack.

For longer code blocks, please use [Slack code snippets](https://slack.com/intl/en-sg/help/articles/204145658-Create-a-snippet) to format code so that the code is formatted nicely and takes up less space in Slack.

