# Day 4: Boolean And, GitHub, Program State

For each app, make a copy of the starter code, as per the [setup](https://swe101.rocketacademy.co/4-getting-started-with-code/4-2-our-first-program#setup) with `git clone`. When cloning, specify the target directory for each app as a new folder, following the folder structure in [Pro Tips](../course-logistics/pro-tips.md#organising-folders-for-swe101). This is to avoid Git repos inside Git repos, which can cause problems with Git.

For some apps you may need to google things. Remember that as pairs, you are also googling together. Please switch driver and navigator each app.

## Boolean And

### Bus Timings

A couple Jack and Jill are waiting at the bus stop after their date and plan to take different buses home. To stay together longer, they decide they will only get on their respective buses when both buses arrive at the same time AND they successfully guess how long the buses will take. Both buses arrive independently and randomly within every 5 minutes. 

Write a program that takes Jack and Jill's guess on how long the buses will take as input, randomly generates when each bus will arrive, and outputs whether it is time for Jack and Jill to go home.

## GitHub Fork and Pull Request, Program State

We will follow the "fork and pull request" workflow for the following app. This is to practice this workflow for the current Scissors Paper Stone project, so everyone knows how to set up and submit their assignment. This is the same workflow that developers use when submitting changes to open source \(publicly developed\) code. 

1. Make a fork of the [`swe101-github-practice` repo](https://github.com/rocketacademy/swe101-github-practice) into your own GitHub account. 
2. Clone the `swe101-github-practice` repo from your own account
3. Complete the following Tom and Jerry app
4. Once done, submit the app by committing your code, pushing changes to your repo, and submitting a pull request. 

### Tom and Jerry

Tom the cat loves to chase Jerry the mouse and could do it forever. At each interval, Jerry runs a random distance between 1-10 metres. Tom needs to guess the distance between himself and Jerry's next position in order to catch him. Tom and Jerry's moves are additive, and their respective total distances are tracked in 2 global variables. 

Write a program for Tom to simulate how to catch Jerry. With each submission, Tom will input the number of metres he plans to run. The program will add Tom's distance to his current total distance. The program will generate a distance between 1-10 for Jerry to run, and add that to Jerry's total distance. The program will output Tom and Jerry's respective total distances, and whether Tom has finally caught Jerry 😸.

## More Comfortable

### Matching T-Shirts

Rick and Ryan have the same fashion sense and only wear t-shirts of 5 colours randomly. Their friends decide to play a game, where if they correctly guess the colour of one of the friends' shirts, they get 1 point. But if the guess is correct and both shirts are the same colour, they lose 4 points. If the guess matches neither shirt colours, they get 0 points.

Write a program that enables Rick and Ryan's friends to simulate this game. Keep track of the number of points in program state, and output the guess, actual shirt colours, and total point value after every guess.

