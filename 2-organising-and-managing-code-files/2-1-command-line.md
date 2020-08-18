# 2.1: Command Line

{% embed url="https://youtu.be/iRnFyFMvH1o" %}

The command line is the interface to the computer that consists only of text characters.

We'll be using the command line to run our Git version control system for all the code we write.

#### Language

{% hint style="warning" %}
The words "**command line**" and "**terminal**" are synonymous. We will be using them interchangeably. The "terminal" used to be a piece of actual hardware when computers were the size of rooms, but has since lost it's original meaning.
{% endhint %}

{% hint style="warning" %}
You normally work with _**folders**_, inside of your graphical windows. The unix terminology is _**directories.**_ For our work in the command line, both are correct.
{% endhint %}

#### Find your way around

The command line has many different sub functionalities.

If you get lost here are a few tips:

#### q

There are certain interfaces that bring you into a page navigator, like the command for help with commands- `man` Man tells you how to use unix commands. You use it by typing something like `man ls` - tell me about the ls command. It will change the interface to a page interface that you can navigate with the up and down arrow keys. ↑↓ To get out of this interface, press `q` to quit. Some Git commands also bring you into this interface, such as `diff` and `log` which we'll see in the next section.

#### ctrl-c

You might get stuck in a different kind of command line interface \(there are many\)- another universal way to get out is `ctrl - c`

## Commands

We will cover the commands that mimic the kinds of file and folder manipulation tasks you would accomplish through clicking and dragging in a graphical interface.

{% hint style="warning" %}
At any time you can type the `tab` key and the command line will try to auto complete for you. This works for the names of commands and also long file or folder names.
{% endhint %}

### pwd

Your command line window already has a "location". See the _**absolute**_ path of that location with `pwd`.

```text
pwd
```

### ls

See the files in your current directory.

```text
ls
```

### cd

Move your current directory.

```text
cd boating/sails
```

### touch

Create a plain text file. A plain text file is one that only contains characters. You can't `touch` an image file or a word document file.

{% hint style="warning" %}
Working with files is easier in the command line if they don't have spaces in them.

If you want two words in your file, separate them with a dash. 
{% endhint %}

```text
touch my-filename.txt
```

### mkdir

Create a directory.

```text
mkdir skateboards
```

### cp

Copy files or folders.

```text
cp
```

Copy a file

```text
cp sails.txt new-sails.txt
```

Copy a folder

```text
cp -R boat-folder yatch-folder
```

### mv

Move a file or folder.

```text
mv
```

```text
mv cats.txt my-cats.txt  
```

### rm

Remove a file or folder

```text
rm
```

```text
rm my-friends.txt
```

{% hint style="danger" %}
Your removed files **DO NOT** go to a trash bin. **Removing is irreversible.**

**Never, ever, ever** try to ****run a command that removes the **root** directory \(or any other folder you don't want to lose forever\) - for example `rm -r /`
{% endhint %}

Remove a folder.

```text
rm -r my-boat-folder
```

## Special Paths

There are a few special characters that stand in for locations in relative paths.

### Root

The folder that contains all your other folders on your computer. \(The `C:\` drive in windows\).

```text
/
```

An absolute path always begins with the root directory:

```text
cd /Users/susan/Documents/boating
```

### Home

The folder of your user:

```text
~
```

Go to the folder of your user \(your home folder\).

```text
cd ~/
```

### Current Directory

The directory you're currently in.

```text
.
```

Copy something into the directory you're currently in.

```text
cp ~/my-report.txt .
```

### Parent Directory

The directory one level above your current directory.

```text
..
```

Move one level up:

```text
cd ..
```

## Options

Almost every command has options you can add, like `-R` with `cp` . If you want to see all the options available, try `man` or adding `--help` at the end of a command. For `man` and `cp` it would be `man cp` . Press `q` to get out.

If you want to accomplish something specific on the command line, googling for a specific combination of options usually works.

## Cheat Sheet

Current directory

```
pwd
```

Contents of current directory

```text
ls
```

Change directory

```text
cd
```

Make an empty text file

```text
touch script.js
```

Copy a file

```text
cp cakes.txt cupcakes.txt
```

Copy a folder

```text
cp -R pastries new-pastries 
```

Move a file or folder

```text
mv dogs.txt pets.txt 
```

Remove a file

```text
rm donut-list.txt
```

Remove a folder

```text
rm -r my-boats
```

