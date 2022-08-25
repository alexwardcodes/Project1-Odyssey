# Project1-Odyssey

## Development Process

1. Brain storm (mo more than three): **DONE**
 - What is the name of the game? **DONE**
 - What’s the idea behind it? **DONE**
 - How does the player start? **DONE**
 - How does the player advance? **DONE**
 - How does the player win? **DONE**
 - How does the player lose? **DONE**
 - What does it look like? **DONE**
 - How is score tracked/shown? **DONE**
2. Pick an idea **DONE**
 - Discuss ideas with instructor **DONE**
 - Pick your idea! Move on to the next step… **DONE**
3. Wireframe and user stories **DONE**
4. Create repo and starting files (.js, .css., .html) **DONE**
5. Break the process down by requirements **DONE**
6. Basic layout & image creation **DONE**
7. Structure logic and begin working on functions **DONE**
8. Test functions **DONE**
9. Touch up styling **DONE**
10. Test game **DONE**
11. BONUS: Add extra animations/styling **DONE**

**Stage 1:** Brainstorming  

I had a brainstorming session first of all to decide which game I wanted to pick: a choice of Tic-Tac-Toe or a game of choice. I wanted to go with my own idea and had the following ideas for games, which I rejected. The first was too simple, and the third was too hard.

### Game 1
**Title:** Riddle Me This  
**Idea:** Mythology quiz  
**Aim:** Guess the questions about mythology right to win the game  
**Start:** You start with Norse mythology with a background set in Scandinavia  
**Progression:** Answer each question correctly to progress to the next question, in a new place  
**How to win:** Guess all of the 15 questions right  
**How to lose:** Three wrong answers in a row or less than total 12 right  
**Look:** With each question, the user will see a different country background and a different character the question relates to  
**Scoring:** The number of questions left, correct answers and incorrect answers is shown on the right of the screen

### Game 2
**Title:** Skull ’n’ Bones
Idea: You are a wizard defending a forest - but the Skull King is coming to destroy it!  
**Aim:** Protect your trees
Start: You start in front of your forest with the trees at your back when the Skull King suddenly appears  
**Progression:** Collect random potions that appear and fire spells at the the skull  
**How to win:** Hit the skull enough times before your trees are all destroyed 
**How to lose:** Get hit by the mini-skulls that the Skull King fires at you, or all your trees are destroyed  
**Look:** Green background, trees to the left, forest to the bottom and top  
**Scoring:** A health bar on the player’s side shows their health and trees remaining, a health bar on the Skull King’s side shows his health

**Stage 2:** Picking my idea  

### Game 2
**Title:** Odyssey  
**Idea:** You wake up in the Underworld - and you don’t know where you are! Oh no! You don’t belong here at all! You have to get home!  
**Aim:** Get to the other side of the River Styx  
**Start:** You start next to the banks of the River Styx - the portal to get out is on the other side. The Ferry Man wants you to guess a series of questions to allow you to cross.  
**Progression:** For each correct guess you move forward across the river  
**How to win:** Guess the right answers and get tot he far shore  
**How to lose:** Fail to get the question right and you will be trapped in the Underworld forever  
**Look:** Player is on the shore on the right of the screen, background is starry sky, the river on the bottom, the Ferry Man is in the boat next to the shore on the right of the screen, the portal is on the left of the screen  
**Scoring:** The score is shown on the top of the screen

**Stage 3:** Wireframe and user stories  

**Wireframe:** I started by creating a wireframe using Figma Jam. I created a separate frame for each screen that I wanted the player to see. I then exported this and would later add it to my Git repo as an outline to use while designing my game.  

[You can find the wireframe here](https://git.generalassemb.ly/alex-sasha-ward/Project1-Odyssey/blob/78e86220705494b42064c73266f125fee453f33a/ODYSSEY_wireframe.pdf)

**User Stories:**  
As a new player, I want to know what the game is about so I can play it  
As a player, I want to know the aim of the game and how it's played so I can win  
As a player, I want to know who I'm playing against so I know who I'm playing against  
As a player, I want to know how the score is kept so I can keep track of how well I'm doing  
As a player, I want to see progression so I feel like I'm on an "odyssey"  
As a player, I want the game to be interactive so that it's fun  

**Stage 4:** Creating Git repo and starting files  

I first created a repo on Git to store my code and cloned this to my local drive. I then created separate .js, .css and .html files, as well as an image folder, README.md and imported my wireframe. Then - frequent commits!

**Stage 5:** Breaking the process down by requirements  

I started out with the following requirements:  

- The game has to have a retro feel. Everyone loves a retro game, it's easy on the eyes, and gameplay can be simple but fun at the same time, particularly if little quirks are introduced (see everything marked "BONUS")
- There has to be an intro sequence showing the game title, player character & NPC
- There has to be a question/answer round that shows correct/incorrect answers
- There has to be a progression sequence
- There has to be a losing sequence
- There to be a win sequence
- There has to be an end sequence
- There has to be an option to restart the game whether player loses or wins
- BONUS: the player might get to choose how many questions to play (minimum of 10)
- BONUS: there might be little quirks to add to the feel of the game and improve the player's experience

**Stage 6:** Basic layout & image creation

I knew I wanted to use pixellated characters for my game, as well as a pixellated layout and features, so I first created these using a pixel image creator (listed under Technologies Used).

I established the basic layout of my game using CSS and initially positioned all of my elements so I know where they go and to fix any clashes in placement or styling.

**Stage 7:** Structuring logic and starting work on the functions

Looking through my requirements, I realised my code could be best broken down into several sections of logic: the intro sequence, the play sequence, the progression sequence, the lose sequence, and the end sequence, which only runs if the player wins. I split my .js into these 5 sections and planned out the logic for each one. 

**Stage 8:** Test functions  

I tested my functions individually before linking them up to each other to  make sure they interacted in a way that caused zero conflicts. This ended up being somewhat time-consuming but eventually I managed to link my intro, question, game win/loss and ending sequences together. I used console.log along the way to ensure was getting the right values at each point. 

**Stage 9:** Touch up styling  

I then moved on to touching the syle elements up. I had some issues with CSS due to the setupof my HTML, so I adjusted this and made sure all of my elements were in the right place to ensure the game flows seamlessly.

**Stage 10:** Test game  

I tested the game many, many times, which means I was able to see exactly where things weren't working, and could then go and adjust functions and variables as necessary.

**Stage 11:** BONUS: Add extra animations/styling  

I ended up having a little time to add some extra styling - such as a background that changes as the player progresses.

How did I solve for the winner?

The win is decided based on getting all 9 of the randomly generated questions right.If the user gets anyof these wrong, they player loses and the game restarts.

### Favourite functions

Random numnber generator alreadyCalled() - this function generates a random number between 1 and 9. The number is first put into an empty array, and then used by the question() function to pick a question from the questions object. The next time alreadyCalled() is called, it checks to see if the new randomly generated nunmber is inthe array;  if it is, itcalls itself again until itpicks anumber that has not already been stored in the array. It pushes this to the array, and again, this number is used to display a question to the player. This ensures that the same question is never picked again, and with a win requirement of 9 and a question total of 20, this avoids any issues that may arise.  

Game win function: gameWon() - this function is another favourite as it ties up the game nicely and also displays credits, providing a replay option to the player. It also calls the function that reveals the player's identity just before the game ends.

### Problem-solving  

I tackled issues in a very methodical way, by console logging  individual elements and variables to see what issues I was dealing with, and considering how different elements were interacting. I had some trouble with the random generator function in particular, but all in all I found the process of detecting bugs and errors to go quite smoothly.

### Bugs and future iterations

There are currently no bugs in the game. In future iterations, I would add a hint function for each question, a skip button for the dialogue elements so the user can fast forward if they choose, and add a function to change the placeholder on the player's answer inputfield to show how many letters the answers should have.  I would potentially also add some obstacle levels to vary the game, as well as some minor additional animations.  

### Technologies Used:

JavaScript, HTML, CSS, jQuery








