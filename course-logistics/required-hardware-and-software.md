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

### VSCode

VSCode is RA's software editor of choice. It is also the most popular code editor in the world. We will write all code for SWE101 inside of VSCode.

#### Installation

1. Download VSCode for your OS [here](https://code.visualstudio.com/download).
2. Install the ESLint extension for VSCode [here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). "ES" stands for ECMAScript, which is the technical specification for JavaScript, and "lint" in a coding context refers to programmatic detection of formatting and syntax errors. ESLint enables us to detect and fix formatting and syntax errors in JavaScript, and the VSCode ESLint extension allows us to do so automatically within VSCode.
3. Enable the following settings in [VSCode settings](https://code.visualstudio.com/docs/getstarted/settings#_creating-user-and-workspace-settings) to format your code automatically
   1. Format On Save
   2. Eslint &gt; Format: Enable
   3. Eslint &gt; Migration: 2\_x
      1. Set this to "off"

### Chrome

Chrome is the most popular web browser for software engineers because of its mature developer tools \(we will soon see in course videos\). Chrome also has the largest library of browser extensions, which further help developers build and maintain web software.

#### Installation

1. Download Chrome for your OS [here](https://www.google.com/intl/en_sg/chrome/).

## Required Command Line Software

Command line software is software primarily operated from the command line \(we will explain this in a video\) that may not have a graphical user interface we can interact with. This software is typically used by software developers to write programs. This is in a separate section so that students do not expect to run this software from their computer's Applications folder.

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

2. Open the command palette using Ctrl + Shift + P.

3. Type and select "Select Default Shell".

4. Select Git Bash from the options.

5. Restart VSCode and open terminal again. The terminal should now run with Bash.

![](../.gitbook/assets/5zlap.png)

7. You can toggle between different terminal languages from the dropdown in terminal.

![](../.gitbook/assets/1agtr.png)

### Verify Git and Node Installation

In case it helps, here is a video demonstrating how to verify Git and Node installation on a Mac. The video uses the built-in Mac terminal, but we should be able to do the same within the VSCode terminal. We recommend Windows students use the VSCode terminal for SWE101.

{% embed url="https://www.youtube.com/watch?v=YsRt9YJNFP4" %}

## Required Software Accounts

### GitHub

GitHub is the most popular code-hosting platform. Developers around the world use GitHub to share code and collaborate on projects. Rocket Academy's starter code and project templates are hosted on GitHub, and we will use GitHub in SWE101 to download, host, and submit assignments. Each student will require a GitHub account to host and submit assignment code.

#### Sign Up

Go to [https://github.com/](https://github.com/), click the Sign Up button and follow on-screen instructions.

#### Git & GitHub Configuration

Add your GitHub account credentials to your computer through the command line. You should not get any response from the command line after entering these commands.

```text
git config --global user.name "your-github-username"
git config --global user.email "github-acct-email@example.com"
```

