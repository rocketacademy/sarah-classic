# 4.1: Intro to GitHub

{% embed url="https://www.youtube.com/watch?v=dn7r4333c4g" %}

GitHub is the web application that hosts our git repositories in the cloud.

## History

Git was originally invented to coordinate the development of the Linux operating system across many geographically scattered developers. Each git repo is capable of recording a set of commits on a user's computer and to coordinate that history of changes with others. Because the work was open-source git allows for anyone to hold a copy of the code and for anyone to have any set of history they like.

## GitHub

Github is a centralized set of repositories developers use to hold the "master" copy of their code.

![](../.gitbook/assets/remotes.png)

## Clone

We'll use a git command to download a copy of the code. We won't be concerned yet with reconciling any changes happening locally with what's on GitHub.

```text
git clone <repo url> folder-name
```

![](../.gitbook/assets/github-clone.png)

{% hint style="info" %}
Go to the starter code repo and download a copy of the repo.  
  
Go to the repo website page here: [https://github.com/rocketacademy/swe101-starter-code](https://github.com/rocketacademy/swe101-starter-code) and click to copy the repo url \(the website page and repo url are different\)

Run the git clone command on the command line. Name it `test`.

```text
git clone
```

Make sure that you are not already inside another repo directory before you run the command.
{% endhint %}
