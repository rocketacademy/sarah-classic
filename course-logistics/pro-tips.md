---
description: Tips for better programming
---

# 💡 Pro Tips

## Using Slack Effectively

### Asking Questions

The ability to ask technical questions effectively is one of the biggest differences between junior and senior engineers. Junior engineers may ask questions like: "It doesn't work. Could you help?" Senior engineers tend to ask questions more like: "Program A is giving me Error X. I didn't expect X to happen because of Logic B. When I googled X, it tells me that this may be related to Y, but I don't see Y anywhere in the system."

In SWE101, we want to start acting like senior engineers. Your section wants to help you, and Slack is a convenient way to get help 24/7, but for others to help effectively, we need to give them context. When asking questions in Slack, try to include the following, while including any relevant context or google results.

1. What is the problem?
2. What is your hypothesis?
3. What have you tried?

### Sharing Code

When sharing code in Slack, it's best to use Slack's built-in code formatting, which creates a code block with monospaced text for easier reading.

For variables or files/folders in regular text, we can use a single backtick \(\`\) at the start and end of the word to format that word as code.

For multi-line blocks of code like functions, we can use triple backtick \(\`\`\`\) at the start and end of the code to format that code in Slack.

## Using VSCode Effectively

### Comment Out Multiple Lines at Once

Sometimes we wish to enable or disable certain segments of our code for quick testing. The easiest way to do this is to "comment out" the code we want to disable by turning it into comments, making our JavaScript runtime ignore those lines of code.

Rather than adding `//` to the start of each line manually, VSCode has a shortcut that allows us to comment out multiple lines simultaneously. To do this, select all lines we wish to comment out, then use the keyboard shortcut Ctrl+/ on Windows, or Cmd+/ on Mac.

### Editing a Variable Name in Multiple Places Concurrently

Sometimes we want to change the name of a variable in our code, a common practice in [refactoring](https://en.wikipedia.org/wiki/Code_refactoring). If that variable is used in multiple places, we may be tempted to edit each instance individually. Luckily VSCode has a convenient feature that allows us to edit all instances of the same variable simultaneously, saving time and our fingers.

#### Within a Single File

1. Move your cursor to the first instance of the variable
2. Press/hold Ctrl+D on Windows or Cmd+D on Mac until all instances of that variable are selected
3. Use left or right arrow keys to enable cursors on each instance of that variable and edit them simultaneously

#### Across Multiple Files

VSCode has a [search and replace feature](https://code.visualstudio.com/docs/editor/codebasics#_search-across-files) that allows us to edit all instances of a given string in multiple files at once.

### Hide Minimap

The [VSCode minimap](https://code.visualstudio.com/docs/getstarted/userinterface#_minimap) is displayed by default in VSCode to show one's vertical position within a file. This may not be necessary in SWE101 and we can hide the minimap for more space in VSCode. Hide the minimap by toggling View &gt; Show Minimap in the menu bar.

## Watching YouTube Videos at Different Speeds

If the course videos are too fast or too slow for you, you can watch them at slower or faster speeds by [toggling a speed setting in YouTube](https://support.google.com/youtube/answer/7509567?co=GENIE.Platform%3DDesktop&hl=en).

