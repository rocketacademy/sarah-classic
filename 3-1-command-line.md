# 3.1: Command Line

{% embed url="https://youtu.be/wEILdR18J14" %}

The command line is the interface to the computer that consists only of text characters.

We'll be using the command line to run our Git version control system for all the code we write.

#### Language:

{% hint style="warning" %}
The words "**command line**" and "**terminal**" are synonymous. We will be using them interchangeably. The "terminal" used to be a piece of actual hardware when computers were the size of rooms, but has since lost it's original meaning.
{% endhint %}

{% hint style="warning" %}
You normally work with _**folders**_, inside of your graphical windows. The unix terminology is _**directories.**_ For our work in the command line, both are correct.
{% endhint %}

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
Your removed files **DO NOT** go to a trash bin. Removing is irreversible.

**Never, ever, ever** try to ****run a command that removes the root directory- `rm -r /`
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



