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
const shore = $('shore');
const footer = $('footer');
const nav = $('nav');

const questions = {
    1: ["I am bright and I give light", "sun"],
    2: ["I am grey and I live in the sea", "seal"],
    3: ["I have one eye but no body", "needle"],
    4: ["I am the capital of Indonesia", "jakarta"],
    5: ["I am long in the morning, invisible at noon", "shadow"],
    6: ["I am used to build houses", "bricks"],
    7: ["I hold drinks", "cup"]
}



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
    dialogue.text("Where am I? I don't remember getting here...")
    dialogue.fadeIn(2000);
    dialogue.delay(2000).fadeOut(2000);
}, 14000);
setTimeout(() => {
    question();
}, 24000)
}

// Partial progSeq() TEST - it works!
// setTimeout(function progSeq() {
//       // Progress function TEST - it works!
//       moveLeft();
// }, 20000);

function moveLeft() {
    $("#boat").animate({ "padding-left": "0px"}, 4000);
    $("#boat").animate({ "padding-left": "1200px" }, 4000);
  }
/* Progress function - progSeq()
Boat slide left, then right DONE
BONUS: constellation fades/slides out, new constellation fades/slides in */




let questionsAsked = 0;
let score = 0;
const playerName = "?";
nav.html("You have: " + score + " OBOLS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name: " + playerName);

// Random number generator; question() references index [0] of the alreadyCalled array to make sure it gets the latest number and isn't repeated
let alreadyCalled = [];
function getRandom() {
    console.log(alreadyCalled + "list of numbers already run")
    let num = (Math.floor(Math.random() * 7) + 1);
    if (!alreadyCalled.includes(num)) {
        alreadyCalled.unshift(num);
        return num;
    } else { console.log("number already in the array");
        getRandom();
    }
};

/* Question round function - question()
// display question DONE
// display input area DONE
// log input DONE
// check input DONE
// track question asked so it isn't repeated DONE
// if correct, show correct input DONE
// if incorrect, effect to show answer incorrect IN PROGRESS
// text fade out DONE 
BONUS: allow player to select number of questions */
// question(); - WORKS LIKE A CHARM!!!

function question() {
    boat.fadeIn(2000);
    questionsAsked++;
    dialogue.css({"border": "0px", "height": "400px", "align-items": "flex-start", "font-size": "40px"});
    getRandom();
    random = alreadyCalled[0];
    let toAnswer = questions[random][0];
    dialogue.fadeIn(2000).text(toAnswer);
    dialogue.delay(3000).fadeOut(2000, answerOne);
    function answerOne() {
        dialogue.text("What am I?");
        dialogue.delay(2000).fadeIn(2000);
        dialogue.delay(2000).fadeOut(2000, response);
            function response() {
                dialogue.text("").fadeIn();
                dialogue.append('<p><input type="text" placeholder="I am..." id="playerResponse"></input></p>').fadeIn(2000);
                let solution = questions[random][1];
                let playerAnswer = null;
                $('#playerResponse').keypress(function(event) {
                    let keycode = (event.keyCode ? event.keyCode : event.which);
                    if(keycode == '13') {
                        let input = document.getElementById('playerResponse').value;
                        playerAnswer = input;
                        if (playerAnswer === solution) {
                            score++;
                            console.log(score);
                            dialogue.remove('input');
                            dialogue.text("Correct!").fadeOut(3000);
                            nav.html("You have: " + score + " OBOLS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name: " + playerName);
                            moveLeft();
                            setTimeout(() => {
                                question();
                            }, 8000);
                        } else {
                            dialogue.remove('input');
                            dialogue.text("Uh oh... That wasn't right...").css({"color": "red"}).fadeOut(3000, gameLost);
                        }
                    };
                });
            }
    }
    console.log(questionsAsked);
}
// dialogue function with for loop that takes parameters(const, delay and fade and increments?)

/* Game lose function - gameLost()
Dialogue + player fade out
NPC monologue
Game restart option */

function gameLost() {
    boat.animate({ "padding-left": "600px"}, 4000);
    dialogue.text("I'm afraid you don't have enough obols so I can't let you cross the river... You'll have to return to the shore...").css({"font-size": "20px", "border": "0px", "text-shadow": "0px 0px black"}).delay(4000).fadeIn(2000);
    dialogue.fadeOut(6000, introSeq);
    boat.delay(8000).animate({"padding-left": "1200px"})
    score = 0;
}

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
