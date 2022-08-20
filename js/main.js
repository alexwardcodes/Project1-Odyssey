//Game Start!

// MAIN FUNCTIONS

/* Intro sequence function - introSeq()
Fade in title DONE
Fade out title
Player fade in & axis flip DONE
Player */

// Partial intro function TEST - it works!

const dialogue = $('.dialogue');
const player = $('#player');
const boat = $('#boat');
const moon = $('#moon');

let score = 0;



introSeq();

function introSeq() {
    $('#player, #moon, .window, .dialogue, #boat').hide();
    $('.window').fadeIn(4000);
    $('.dialogue').html("<h1>ODYSSEY</h1>")
    $('#moon, .dialogue').fadeIn(4000);
    $('.dialogue').fadeOut(3000);
    $('#player').fadeIn(14000);
    setInterval(() => {
    $('#player').css({"transform": "scaleX(-1)", "left": "1337px"});
}, 10000);
}
function gameIntro() {
    dialogue.css({"font-size": "20px", "border": "0px", "text-shadow": "0px 0px black"});
    dialogue.html("Where am I? I don't remember getting here...")
    dialogue.fadeIn(2000);
    dialogue.delay(2000).fadeOut(2000);
}

setTimeout(gameIntro, 16000);

// setTimeout(function progSeq() {
//     function moveLeft() {
//         $("#boat").animate({ "padding-left": "0px"}, 4000);
//         $("#boat").animate({ "padding-left": "1200px" }, 4000);
//       }
      
//       // Progress function TEST - it works!
//       moveLeft();
// }, 20000);
/* Progress function - progSeq()
Boat slide left, then right DONE
BONUS: constellation fades/slides out, new constellation fades/slides in */

// Partial progSeq() TEST - it works!




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
