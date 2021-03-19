---
description: Tips for using programming tools
---

# 💡 Tooling Pro Tips

## Using ESLint Effectively

### ESLint Not Working

ESLint and VSCode both get updated regularly and sometimes don't play nice. If ESLint isn't formatting your code on save, try the following checklist of common solutions.

1. Have you installed the ESLint extension in VSCode as per [Required Hardware and Software](required-hardware-and-software.md#vscode-formatter-and-settings)?
2. Have you set ESLint to format JavaScript in VSCode settings as per [Required Hardware and Software](required-hardware-and-software.md#vscode-formatter-and-settings)?
3. Have you [run `npm install`](../4-getting-started-with-code/4.2-our-first-program.md#setup) in terminal from the folder of your current code repository? For example, if you are working on Day 2's Ice Machine exercise in the basics/day2/ice-machine folder, did you run `npm install` from basics/day2/ice-machine in your terminal?
4. Have you enabled ESLint to run in VSCode? See the [ESLint Not Running After First Install](tooling-pro-tips.md#eslint-not-running-after-first-install) section below to see if you need to enable this one-off setting.
5. If 1-4 haven't fixed it, try restarting VSCode and opening your `basics` folder in VSCode as per [Required Hardware and Software](required-hardware-and-software.md#open-basics-folder-in-vscode).
6. If all else false, let an instructor know and we will help you resolve this.

If you've done the above and ESLint still isn't formatting your code, let us know and we'll help you fix it!

### ESLint Not Running After First Install

![ESLint unable to run, icon in bottom right corner of VSCode](../.gitbook/assets/jie-ping-20210302-20.15.45.png)

If we see the above red ESLint status icon in the bottom right of VSCode, it usually means we haven't enabled ESLint in VSCode yet. To enable ESLint in VSCode, follow the instructions [here](https://carldesouza.com/fixing-eslint-execution-is-not-approved-or-denied-in-visual-studio-code/). In summary:

1. Click on the red icon in the bottom right corner
2. Click Allow Everywhere in the resulting popup menu

Please also remember to run `npm i` in the current starter code folder to enable ESLint in that folder.

### View and Fix ESLint Errors

When we run `npm install` each time we clone a repo in Coding Basics, we are installing a package ESLint that helps us see errors before we run our code. Some of these errors are functional, i.e. the program will not run unless we fix them, and some are stylistic, i.e. ESLint points out these errors so that our code is consistent. Please try to fix all ESLint errors in your code.

VSCode shows us ESLint errors with red squiggly lines under the parts of our code with errors. To see what the error is, hover over the red squiggly line in VSCode.

![ESLint shows errors with red squiggly lines. View error messages by hovering over red lines.](../.gitbook/assets/jie-ping-20200924-18.55.18.png)

## Using VSCode Effectively

### Comment Out Multiple Lines at Once

Sometimes we wish to enable or disable certain segments of our code for quick testing. The easiest way to do this is to "comment out" the code we want to disable by turning it into comments, making our JavaScript runtime ignore those lines of code.

Rather than adding `//` to the start of each line manually, VSCode has a shortcut that allows us to comment out multiple lines simultaneously. To do this, select all lines we wish to comment out, then use the keyboard shortcut `Ctrl+/` on Windows, or `Cmd+/` on Mac.

### Editing a Variable Name in Multiple Places Concurrently

Sometimes we want to change the name of a variable in our code, a common practice in [refactoring](https://en.wikipedia.org/wiki/Code_refactoring). If that variable is used in multiple places, we may be tempted to edit each instance individually. Luckily VSCode has a convenient feature that allows us to edit all instances of the same variable simultaneously, saving time and our fingers.

#### Within a Single File

1. Move your cursor to the first instance of the variable
2. Press/hold `Ctrl+D` on Windows or `Cmd+D` on Mac until all instances of that variable are selected
3. Use left or right arrow keys to enable cursors on each instance of that variable and edit them simultaneously

#### Across Multiple Files

VSCode has a [search and replace feature](https://code.visualstudio.com/docs/editor/codebasics#_search-across-files) that allows us to edit all instances of a given string in multiple files at once.

### Hide Minimap

The [VSCode minimap](https://code.visualstudio.com/docs/getstarted/userinterface#_minimap) is displayed by default in VSCode to show one's vertical position within a file. This may not be necessary in Coding Basics and we can hide the minimap for more space in VSCode. Hide the minimap by toggling View &gt; Show Minimap in the menu bar.

## Watching YouTube Videos at Different Speeds

If the course videos are too fast or too slow for you, you can watch them at slower or faster speeds by [toggling a speed setting in YouTube](https://support.google.com/youtube/answer/7509567?co=GENIE.Platform%3DDesktop&hl=en).

