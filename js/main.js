//Game Start!

// MAIN FUNCTIONS

/* Intro sequence function - introSeq() and game
Fade in title DONE
Fade out title
Player fade in & axis flip DONE
Player monologue DONE */

const dialogue = $('.dialogue');
const player = $('#player');
const boat = $('#boat');
const moon = $('#moon');
const footer = $('footer');
const nav = $('nav');

const questions = {
    1: ["I am bright and I give light", "yellow"],
    2: ["I am grey and I live in the sea", "seal"],
    3: ["I have one eye but no body", "needle"],
    4: ["I am the capital of Indonesia", "Jakarta"],
    5: ["I am long in the morning, invisible at noon", "shadow"],
    6: ["I am used to build houses", "brick"],
    7: ["I hold drinks", "cup"]
}

let score = 0;
nav.text("Your current score: " + score);

// Intro sequence working so far!

introSeq();

function introSeq() {
    $('#player, #moon, .window, .dialogue, #boat, nav, footer').hide();
    $('.window, nav, footer').fadeIn(4000);
    $('.dialogue').html("<h1>ODYSSEY</h1>")
    $('#moon, .dialogue').fadeIn(4000);
    $('.dialogue').fadeOut(3000);
    $('#player').fadeIn(14000);
    setInterval(() => {
    $('#player').css({"transform": "scaleX(-1)", "left": "1337px"});
}
, 10000);
setTimeout(() => {
    dialogue.css({"font-size": "20px", "border": "0px", "text-shadow": "0px 0px black"});
    dialogue.html("Where am I? I don't remember getting here...")
    dialogue.fadeIn(2000);
    dialogue.delay(2000).fadeOut(2000);
}, 14000);
}

// setTimeout(question, 22000);

// Partial progSeq() TEST - it works!
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

// question(); - WORKS SO FAR!!!
// question();
// function question() {
//     const question = $('.question');
//     dialogue.css({"border": "0px", "height": "400px", "align-items": "flex-start"});
//     dialogue.append('<div class="question"></div>');
//     let random = Math.floor(Math.random() * 3);
//     let toAnswer = questions[random][0];
//     $('.question').show(1000).text(toAnswer);
//     $('.question').delay(3000).fadeOut(2000, answerOne);
//     function answerOne() {
//         $('.question').text("What am I?");
//         $('.question').delay(3000).fadeIn(2000);
//         $('.question').delay(3000).fadeOut(2000, answerTwo);
//         function answerTwo() {
//             $('.question').text("I am");
//         $('.question').delay(3000).fadeIn(2000);
//         }
//      }
//     }

// display question
// display input area
// log input
// check input
// if correct, show correct input
// if incorrect, effect to show answer incorrect
// if too many letters incorrect,  run gameLost();
// provide answer
// provide response
// text fade out

// dialogue function with for loop that takes parameters(const, delay and fade and increments?)

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
