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
5. Break the process down by requirements **IN PROGRESS**  
6. Basic layout & image creation **IN PROGRESS**
7. Structure logic and begin working on functions **IN PROGRESS**
8. Test functions
9. Touch up styling
10. Test game
11. BONUS: Add extra animations/styling

Stage 1: Brainstorming  

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

2. My idea  

Not ready to view yet... all will soon be revealed!

<!-- ### Game 2
**Title:** Odyssey  
**Idea:** You wake up in the Underworld - and you don’t know where you are! Oh no! You don’t belong here at all! You have to get home!  
**Aim:** Get to the other side of the River Styx 
**Start:** You start next to a gate on the banks of the River Styx - the portal to get out is on the other side. The Ferry Man wants you to guess a series of questions to allow you to cross.  
**Progression:** For each correct guess you move forward across the river  
**How to win:** Guess the letters in the word before your guesses run out  
**How to lose:** Fail to solve the puzzle in enough moves or get too many questions wrong and you will be trapped in the Underworld forever  
**Look:** Player is on the shore on the right of the screen, background is starry sky, the river on the bottom, the Ferry Man is in the boat next to the shore on the right of the screen, the portal is on the left of the screen  
**Scoring:** The score and number of guesses left is shown on the bottom of the screen, number of spaces left to cross the river is next to this -->

Stage 3: Wireframe and user stories  

**Wireframe:** I started by creating a wireframe using Figma Jam. I created a separate frame for each screen that I wanted the player to see. I then exported this and would later add it to my Git repo as an outline to use while designing my game.  

**User Stories:** As a new player, I want to know what the game is about so I can play it  
As a player, I want to know the aim of the game and how it's played so I can win  
As a player, I want to know who I'm playing against so I know who I'm playing against  
As a player, I want to know how the score is kept so I can keep track of how well I'm doing  
As a player, I want to see progression so I feel like I'm on an "odyssey"  
As a player, I want the game to be interactive so that it's fun  

Stage 4: Creating Git repo and starting files  

I first created a repo on Git to store my code and cloned this to my local drive. I then created separate .js, .css and .html files, as well as an image folder, README.md and imported my wireframe. Then - frequent commits!

Stage 5: Breaking the process down by requirements  

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

Stage 6: Basic layout & image creation

I knew I wanted to use pixellated characters for my game, as well as a pixellated layout and features, so I first created these using a pixel image creator (listed under Technologies Used).

I established the basic layout of my game using CSS and initially positioned all of my elements so I know where they go and to fix any clashes in placement or styling.

Stage 7: Structuring logic and starting work on the functions

Looking through my requirements, I realised my code could be best broken down into several sections of logic: the intro sequence, the play sequence, the progression sequence, the lose sequence, and the end sequence, which only runs if the player wins. I split my .js into these 5 sections and planned out the logic for each one.  

Stage 8: Test functions  

Stage 9: Touch up styling  

Stage 10: Test game  

Stage 11: BONUS: Add extra animations/styling  


<!-- Create a repository on github enterprise for your project
Clone it to the projects folder on your computer
Add an HTML, CSS, and JS file to the folder
Connect the CSS and JS file to your HTML file and test that they all work
Build the most basic version of your website board in HTML and CSS (very little styling, just a first version)
Write the pseudocode for website logic as comments in your JS file
Choose the correct data type for how your website board should be represented in JS
Add jQuery to your HTML file if you would like to use it instead of vanilla JavScript.
Begin working on the [user stories], 1 at a time
Deploy your application to github pages

!!! Deadline for development !!!
Thursday 25th 9am

Technical requirements
Separate HTML, CSS and JS files
KISS and DRY programming
JS and/or jQuery for DOM manipulation
Deploy online for world to see
Semantic markup for HTML and CSS
Well-formatted, well-commented code
ReadME
List technologies used
Link to wireframes and stories
Document your planning and tella story about your development process + problem-solving strategy
List unsolved problems and bugs that would be fixed in future iterations
Describe how you solved for the winner
Describe how some of your favourite functions work
Projects are due on Friday, 26th Aug 2022 at 10:30am!

Mandatory deliverables
A working website built by me
A Git repo with link to the hosted, working website in the URL section of my Github repo and at least daily commits
A README.md with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, any other useful information etc.
Projects will be submitted by Google Sheet
A 5 minute presentation in which you answer the following questions:
What is the website about?
Is there any information you think might help us understand what you built?
What features did you include
Make sure to include any “new” features, stuff not covered in class
What was the most difficult part of the project?
What was your favourite part of the project to work on?
What would you like to add next? -->








