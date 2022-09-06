# Project 1 - Odyssey

## Description

This project was assigned at the end of the second week of the SEI course. The aim of the project being to design a game from scratch within one week, working individually. I gave my project the name of **Odyssey**.

## Deployment link

[You can find Odyssey deployed on this link on GitHub](https://pages.git.generalassemb.ly/alex-sasha-ward/Project1-Odyssey/). Simply click the link and away you go!


## Getting Started/Code Installation

### Instructions

There are no additional installation instructions or steps needed since Odyssey runs in your web browser.  

## Timeframe & Working Team

We were given one week to complete this project, which meant I also had a weekened to work on it, which I definitely did! The project was assigned on an individual basis, so each of us had to come up with our own idea for a game, build this from scratch and deliver it individually.

## Technologies Used

To complete this project I employed JavaScript and jQuery for the functionality, HTML for the basic layout of all elements, and CSS for the styling.

## Brief

With this project, we were given the brief to build a game in one week, working on our own. The game could either be Tic-Tac-Toe or a game of our choosing. I decided not to go with previously known games such as Snake, Tetris, etc. but rather to build my own game from the ground up.

Our game had to:

- Include separate HTML / CSS / JavaScript files
- Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
- Use JavaScript and/or jQuery for DOM manipulation
- Be deployed online, where the rest of the world can access it
- Use semantic markup for HTML and CSS in order to adhere to best practices
- Have well-formatted, and well-commented code

At the end of the project we then had to deliver a presentation on our project covering the following points:

- What is the website about?
- Is there any information you think might help us understand what you built?
- What features did you include?
- What was the most difficult part of the project?
- What was your favourite part to work on?
- What would you like to add next?
- Demo of the website

## Planning

To initiate the planning stage, I began by developing the following overview of my development process so that I could have a clear understanding of what the project required in order for me to achieve the look and functionality I was aiming for in my game, and so I could be certain that my code would deliver all of the functionality I had in mind: 

### Development Overivew

1. Brainstorm (no more than three):
 - What is the name of the game?
 - What’s the idea behind it?
 - How does the player start?
 - How does the player advance?
 - How does the player win?
 - How does the player lose?
 - What does it look like?
 - How is score tracked/shown?
2. Pick an idea
 - Discuss ideas with instructor
 - Pick your idea! Move on to the next step…
3. Wireframe and user stories
4. Create repo and starting files (.js, .css., .html)
5. Break the process down by requirements
6. Basic layout & image creation
7. Structure logic and begin working on functions
8. Test functions
9. Touch up styling
10. Test game
11. BONUS: Add extra animations/styling

## Build/Code Process

Documented below are the stages I went through in order to build the code for my project.

### Stage 1: Brainstorming  

I had a brainstorming session first of all to decide which game I wanted to pick: a choice of Tic-Tac-Toe or a game of choice. I wanted to go with my own idea and had the following ideas for games, which I rejected. The first was too simple, and the third was too hard.

#### Game 1
**Title:** Riddle Me This  
**Idea:** Mythology quiz  
**Aim:** Guess the questions about mythology right to win the game  
**Start:** You start with Norse mythology with a background set in Scandinavia  
**Progression:** Answer each question correctly to progress to the next question, in a new place  
**How to win:** Guess all of the 15 questions right  
**How to lose:** Three wrong answers in a row or less than total 12 right  
**Look:** With each question, the user will see a different country background and a different character the question relates to  
**Scoring:** The number of questions left, correct answers and incorrect answers is shown on the right of the screen

#### Game 3
**Title:** Skull ’n’ Bones
Idea: You are a wizard defending a forest - but the Skull King is coming to destroy it!  
**Aim:** Protect your trees  
**Start:** You start in front of your forest with the trees at your back when the Skull King suddenly appears  
**Progression:** Collect random potions that appear and fire spells at the the skull  
**How to win:** Hit the skull enough times before your trees are all destroyed  
**How to lose:** Get hit by the mini-skulls that the Skull King fires at you, or all your trees are destroyed  
**Look:** Green background, trees to the left, forest to the bottom and top  
**Scoring:** A health bar on the player’s side shows their health and trees remaining, a health bar on the Skull King’s side shows his health

### Stage 2: Picking my idea  

#### Game 2
**Title:** Odyssey  
**Idea:** You wake up in the Underworld - and you don’t know where you are! Oh no! You don’t belong here at all! You have to get home!  
**Aim:** Get to the other side of the River Styx  
**Start:** You start next to the banks of the River Styx - the portal to get out is on the other side. The Ferry Man wants you to guess a series of questions to allow you to cross.  
**Progression:** For each correct guess you move forward across the river  
**How to win:** Guess the right answers and get tot he far shore  
**How to lose:** Fail to get the question right and you will be trapped in the Underworld forever  
**Look:** Player is on the shore on the right of the screen, background is starry sky, the river on the bottom, the Ferry Man is in the boat next to the shore on the right of the screen, the portal is on the left of the screen  
**Scoring:** The score is shown on the top of the screen

### Stage 3: Wireframe and user stories  

**Wireframe:**  

I started by creating a wireframe using Figma Jam. I created a separate frame for each screen that I wanted the player to see. I then exported this and would later add it to my Git repo as an outline to use while designing my game.  

[You can find the wireframe here](https://git.generalassemb.ly/alex-sasha-ward/Project1-Odyssey/blob/78e86220705494b42064c73266f125fee453f33a/ODYSSEY_wireframe.pdf)

**User Stories:**  

I developed a set of user stories so I could get into the mind of the player and set some key targets to hit for gameplay:

- As a new player, I want to know what the game is about so I can play it  
- As a player, I want to know the aim of the game and how it's played so I can win  
- As a player, I want to know who I'm playing against so I know who I'm playing against  
- As a player, I want to know how the score is kept so I can keep track of how well I'm doing  
- As a player, I want to see progression so I feel like I'm on an "odyssey"  
- As a player, I want the game to be interactive so that it's fun  

### Stage 4: Creating Git repo and starting files  

I first created a repo on Git to store my code and cloned this to my local drive. I then created separate .js, .css and .html files, as well as an image folder, README.md and imported my wireframe. Then - frequent commits!

### Stage 5: Breaking the process down by requirements  

I started out with the following requirements:  

- The game has to have a retro feel. Everyone loves a retro game, it's easy on the eyes, and gameplay can be simple but fun at the same time, particularly if little quirks are introduced (see everything marked "BONUS")
- There has to be an intro sequence showing the game title, player character & NPC
- There has to be a question/answer round that shows correct/incorrect answers
- There has to be a progression sequence
- There has to be a losing sequence
- There to be a win sequence
- There has to be an end sequence
- There has to be an option to restart the game whether the player loses or wins
- BONUS: the player might get to choose how many questions to play (minimum of 10)
- BONUS: there might be little quirks to add to the feel of the game and improve the player's experience

### Stage 6: Basic layout & image creation

I knew I wanted to use pixellated characters for my game, as well as a pixellated layout and features, so I first created these using a pixel image creator (listed under Technologies Used).

I established the basic layout of my game using CSS and initially positioned all of my elements so I knew where they would go and to fix any clashes in placement or styling.

![Screenshot 2022-09-06 at 08 36 12](https://media.git.generalassemb.ly/user/44781/files/7cdd9292-399c-4f33-90b8-31fe2ca211aa)

### Stage 7: Structuring logic and starting work on the functions

Looking through my requirements, I realised my code could be best broken down into several sections of logic: the intro sequence, the play sequence, the progression sequence, the lose sequence, and the end sequence, which only runs if the player wins. I split my .js into these 5 sections and planned out the logic for each one. 

![Screenshot 2022-09-06 at 08 39 09](https://media.git.generalassemb.ly/user/44781/files/c5457f78-9551-434d-bfc4-1717b10a2f13)

![Screenshot 2022-09-06 at 08 39 22](https://media.git.generalassemb.ly/user/44781/files/ff4ba0d4-3ba2-408c-8689-e0700b12212a)

![Screenshot 2022-09-06 at 08 39 38](https://media.git.generalassemb.ly/user/44781/files/a8ae4529-c883-42f1-8c68-30d9a95b2b31)

### Stage 8: Test functions  

I tested my functions individually before linking them up to each other to make sure they interacted in a way that caused zero conflicts. This ended up being somewhat time-consuming but eventually I managed to link my intro, question, game win/loss and ending sequences together. I used console.log along the way to ensure I was getting the right values at each point. 

### Stage 9: Touch up styling  

I then moved on to touching up the style elements. I had some issues with CSS due to the setup of my HTML, so I adjusted this and made sure all of my elements were in the right place to ensure the game flows seamlessly.

### Stage 10: Test game  

I tested the game many, many times, which means I was able to see exactly where things weren't working, and could then go and adjust functions and variables as necessary.

### Stage 11: BONUS: Add extra animations/styling  

I ended up having a little time to add some extra styling - such as a background that changes as the player progresses.

**How did I solve for the winner?**

The win is decided based on getting all 9 of the randomly generated questions right. If the user gets any of these wrong, the player loses and the game restarts.

## Challenges

### Problem-solving  

I tackled issues in a very methodical way, by console logging individual elements and variables to see what issues I was dealing with, and considering how different elements were interacting. I had some trouble with the random generator function in particular, but all in all I found the process of detecting bugs and errors to go quite smoothly.

The particular nature of my game meant that I had to chain different sequences of animations together. This meant constantly adjusting timings to ensure a smooth flow to the game, repeatedly testing sequences to make sure there was no skipping, displacement of elements or other erroneous functionality. I carefully noted any errors I came across, the point in the sequence or function that the error was occurring, and went over my code item by item to rectify these issues. My detailed approach made it much easier for me to detect, log and resolve these issues throughout the project on an ongoing basis rather than leaving this until the end of the project to implement fixes.

## Wins

### Favourite functions

**getRandom()**

This function generates a random number between 1 and 9. The number is first put into an empty array, and then used by the question() function to pick a question from the questions object. The next time getRandom() is called, it checks to see if the new randomly generated nunmber is in the array;  if it is, it calls itself again until it picks a number that has not already been stored in the array. It pushes this to the array, and again, this number is used to display a question to the player. This ensures that the same question is never picked again, and with a win requirement of 9 and a question total of 20, this avoids any issues that may arise.  

![Screenshot 2022-09-06 at 08 19 52](https://media.git.generalassemb.ly/user/44781/files/f7e26f2e-1432-4186-8e30-63043c89f64c)

**gameWon()**

This function is another favourite as it ties up the game nicely and also displays credits, providing a replay option to the player. It also calls the function that reveals the player's identity just before the game ends.

![Screenshot 2022-09-06 at 08 30 18](https://media.git.generalassemb.ly/user/44781/files/c808b2ba-f7b8-4871-9549-43cdb4ed2c04)

**playAgain()**

This function gets called several times throughout the game so the player can start from the beginning if they lose, after winning and if they choose not to proceed with the main play round (which was a quirk I decided to add in simply for player entertainment).

![Screenshot 2022-09-06 at 08 33 23](https://media.git.generalassemb.ly/user/44781/files/00e101d3-05d7-4b61-bddb-3c73c2945d82)


## Key Learnings & Takeaways

This project taught me a great deal about the importance of proper planning before writing any code. I realised early on that the planning process needed to be clear and concise if I wanted to build the kind of game I had decided upon. Additionally, I learned that structure really is key - in hindsight I realise that starting with the final sequence and working backwards from there rather than starting with the intro sequence would have made it easier to chain together the different sequences that constitute the code for my game.  

I became very comfortable with testing - I have tested each indidividual function and each sequence of the game, both individually and chained together, so many times that I am confident my code works as designed to and there are no issues for the player.

We had several standups during the course of our project and I found this a good way of talking through my development, discussing challenges I was having with others and also a good opportunity to share tips, get pointers and discuss the wins I had experienced in the most recent phase of the project.

## Bugs

There are currently no bugs in the game, since I was thorough with my development and testing phases. This meant I was able to fix all issues before presenting the project.

## Future Improvements

In future iterations, I would add a hint function for each question, a skip button for the dialogue elements so the user can fast forward if they choose, and add a function to change the placeholder on the player's answer input field to show how many letters the answers should have.  I would potentially also add some obstacle levels to vary the game, as well as some minor additional animations.
