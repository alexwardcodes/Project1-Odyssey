//Game Start!

// MAIN FUNCTIONS

/* Intro sequence function - introSeq()
Fade in title
Fade out title
Player fade in & axis flip DONE
Player */

// Partial intro function TEST - it works!
$('#player, #moon').hide();
$('#player, #moon').fadeIn(6000);
setInterval(() => {
    $('#player').css({"transform": "scaleX(-1)", "left": "1335px"});
}, 4000);

/* Progress function - progSeq()
Boat slide left, then right DONE
BONUS: constellation fades/slides out, new constellation fades/slides in */
function moveLeft() {
  $("#boat").animate({ "padding-left": "0px" }, 4000);
  $("#boat").animate({ "padding-left": "1200px" }, 4000);
}

// Progress function TEST - it works!
moveLeft();

/* Question round function - question()
BONUS: allow player to select number of questions
display question
display input area
log input
check input
if correct, show correct input
if incorrect, effect to show answer incorrect
if too many letters incorrect,  run gameLost();
provide answer
provide response
text fade out */

/* Game lose function - gameLost()
Dialogue + player fade out
NPC monologue
Game restart option */

/* End sequence function - gameWon()
Portal fade in
Dialogue
Boat slide to shore
Player slide to portal and fade out
NPC monologue
Display game win + score 
Credits + game restart option */

// BONUS FUNCTIONS

// Function to make the moon glow - NOT WORKING YET
// function glow() {
//   $("#moon").css({filter: "brightness(50%)"}, 4000);
//   $("#moon").css({filter: "brightness(100%)"}, 4000);
// }

// glow();
