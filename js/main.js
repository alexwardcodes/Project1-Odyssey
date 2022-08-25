// //Game Start!

// // MAIN FUNCTIONS

// /* Intro sequence function - introSeq() and game
// Fade in title DONE
// Fade out title
// Player fade in & axis flip DONE
// Player monologue DONE */

const dialogue = $(".dialogue");
const player = $("#player");
const ferryMan = $("#ferryman");
const boat = $("#boat");
const moon = $("#moon");
const shore = $("#shore");
const shore1 = $("#shore1");
const portal = $("#portal");
const footer = $("footer");
const nav = $("nav");
const stars = $(".window");

const questions = {
  1: ["I am bright and I give light...", "sun"],
  2: ["I am grey and I live in the sea...", "seal"],
  3: ["I have one eye, but no body...", "needle"],
  4: ["I am high in the sky, floating by...", "cloud"],
  5: ["I am long in the morning and short at noon...", "shadow"],
  6: ["I am used to build houses...", "bricks"],
  7: ["I hold many a drink...", "cup"],
  8: ["I rule the tides...", "moon"],
  9: ["You hear me, again and again...", "echo"],
  10:["I\'m tall when I\'m young, and I\'m short when I\'m old...", "candle"],
  11: ["I have to be broken before you can use me...", "egg"],
  12: ["I get wetter as I dry...", "towel"],
  13: ["I have legs, but can't walk...", "table"],
  14: ["I have a head and tail, but no body...", "coin"],
  15: ["I break when you say my name...", "silence"],
  16: ["I am always hungry and will die if not fed...", "fire"],
  17: ["I can fill a room but take up no space...", "light"],
  18: ["I have many keys, but can open no locks...", "piano"],
  19: ["I have branches, but no fruit, trunk or leaves...", "bank"],
  20: ["I never walk but always run...", "river"]
};

// const comments = {
//   1: "Hmm, not bad...",
//   2: "Smart one, aren't you?",
//   3: "Doing well so far...",
//   4: "I'm impressed!",
//   5: "Clever, clever...",
//   6: "Good, but let's see if you get this next one...",
// };

// Intro sequence working so far!
introSeq();

function introSeq() {
  $(
    "#player, #moon, .window, .dialogue, #boat, #ferryman, #portal, #shore1, nav, footer"
  ).hide();
  $(".window, nav, footer").delay(2000).fadeIn(4000);
  $(".dialogue").html("<h1>ODYSSEY</h1>");
  $("#moon, .dialogue").fadeIn(4000);
  $(".dialogue").fadeOut(3000);
  $("#player").fadeIn(14000);
  setTimeout(() => {
    $("#player").css({ transform: "scaleX(-1)", left: "-=73px" });
  }, 10000);
  setTimeout(() => {
    dialogue.css({
      "font-size": "20px",
      "border": "0px",
      "text-shadow": "0px 0px black",
    });
    dialogue.text("Where am I? I don't remember getting here...");
    dialogue.fadeIn(2000);
    dialogue.delay(2000).fadeOut(2000, dialogue2);
    function dialogue2() {
      dialogue.text("It looks so dark and... and I can't remember my name!");
      dialogue.fadeIn(2000);
      dialogue.delay(2000).fadeOut(2000, dialogue3);
      function dialogue3() {
        ferryMan.fadeIn(2000);
        dialogue.text("Who is THAT..?!?");
        dialogue.fadeIn(2000);
        dialogue.delay(2000).fadeOut(2000, ferryMan1);
        function ferryMan1() {
          ferryMan.animate({ left: "600px" }, 3000);
          dialogue.text("You're in the Underworld, if that helps...");
          dialogue.delay(3000).fadeIn(2000);
          dialogue.delay(2000).fadeOut(2000, ferryMan2);
          function ferryMan2() {
            dialogue.text(
              "I'm Charon, the Ferry Man. You've come to the River Styx by mistake, I'm guessing... But I can  help you cross..."
            );
            dialogue.delay(1000).fadeIn(2000);
            dialogue.delay(3000).fadeOut(2000, ferryMan3);
            function ferryMan3() {
              dialogue.text("...for a fee, of course.");
              dialogue.delay(1000).fadeIn(2000);
              dialogue.delay(1000).fadeOut(2000, playOrLeave);
              function playOrLeave() {
                dialogue
                  .text("Will you pay the fee?")
                  .css({ "font-size": "40px" })
                  .fadeIn(2000);
                dialogue
                  .append(
                    "<p><button type='submit' id='play'>Pay the fee</button><button type='submit' id='dont-play'>Don't pay</button></p>"
                  )
                  .fadeIn(2000);
                $("#play").on("click", function () {
                  dialogue.remove("button").fadeOut(1000, preQuestion);
                });
                $("#dont-play").on("click", function () {
                  dialogue.remove("button");
                  dialogue.text("Have it your way...");
                  dialogue.delay(2000).fadeOut(2000);
                  ferryMan
                    .css({ transform: "scaleX(1)" })
                    .animate({ left: "100px" }, 3000)
                    .fadeOut(3000, playAgain);
                });
              }
            }
          }
        }
      }
    }
  }, 10000);
}

// function dialogueRun (element, text) {
//     element.text(text);
//     element.fadeIn(2000);
//     element.delay(2000).fadeOut(2000);
// }

// // Partial progSeq() TEST - it works!
// // setTimeout(function progSeq() {
// //       // Progress function TEST - it works!
// //       moveLeft();
// // }, 20000);

function moveLeft() {
  boat.animate({ "padding-left": "100px" }, 4000);
  shore.delay(500).animate({ opacity: "0" });
  boat.animate({ "padding-left": "1200px" }, 4000);
  moon.animate({ left: "+=120px" }, 8000);
}
// /* Progress function - progSeq()
// Boat slide left, then right DONE
// BONUS: constellation fades/slides out, new constellation fades/slides in */

let questionsAsked = 0;
let score = 0;
const playerName = "?";
nav.html(
  "You have: " +
    score +
    " OBOLS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name: " +
    playerName
);

// // Random number generator; question() references index [0] of the alreadyCalled array to make sure it gets the latest number and isn't repeated
let alreadyCalled = [];
function getRandom() {
  let num = Math.floor(Math.random() * 20) + 1;
  if (!alreadyCalled.includes(num)) {
    alreadyCalled.unshift(num);
    return num;
  } else {
    getRandom();
  }
}

// /* Question round function - question()
// // display question DONE
// // display input area DONE
// // log input DONE
// // check input DONE
// // track question asked so it isn't repeated DONE
// // if correct, show correct input DONE
// // if incorrect, effect to show answer incorrect IN PROGRESS
// // text fade out DONE
// BONUS: allow player to select number of questions */


function preQuestion() {
  ferryMan.delay(2000).animate({ left: "1000px" }, 3000);
  dialogue
    .text("Excellent, here's how it works...")
    .css({ "font-size": "20px" });
  dialogue.fadeIn(2000);
  dialogue.delay(1000).fadeOut(2000, details);
  function details() {
    dialogue.html(
      "I'll ask you 9 riddles, and you give me the answer - just the word.<p />I'll give you one obol for each answer so you can pay for the passage. Deal?"
    );
    dialogue.fadeIn(2000);
    dialogue.delay(2000).fadeOut(2000, agree);
    function agree() {
      dialogue.text("... Deal.");
      dialogue.fadeIn(2000);
      dialogue.delay(2000).fadeOut(2000, moveToBoat);
      function moveToBoat() {
        ferryMan.animate({ opacity: "0" }, 1000);
        player.animate({ opacity: "0" }, 1000);
        boat.fadeIn(2000, function () {
          dialogue.text("Here is your first riddle then...").fadeIn(2000);
          dialogue.delay(2000).fadeOut(2000, question);
        });
      }
    }
  }
}


function question() {
  if (questionsAsked === 9) {
    gameWon();
  } else {
    dialogue.css({ border: "0px", height: "400px", "font-size": "40px" });
    getRandom();
    random = alreadyCalled[0];
    let toAnswer = questions[random][0];
    dialogue.fadeIn(2000).text(toAnswer);
    dialogue.delay(3000).fadeOut(2000, answerOne);
    function answerOne() {
      dialogue.text("...What am I?");
      dialogue.delay(500).fadeIn(1500);
      dialogue.delay(500).fadeOut(1500, response);
      function response() {
        let solution = questions[random][1];
        let playerAnswer = null;
        dialogue.text("").fadeIn();
        dialogue
          .append(
            `<p><input type="text" placeholder="I am..." id="playerResponse"></input></p>`
          )
          .fadeIn(2000);
        $("#playerResponse").keypress(function (event) {
          let keycode = event.keyCode ? event.keyCode : event.which;
          if (keycode == "13") {
            let input = document.getElementById("playerResponse").value;
            playerAnswer = input;
            if (playerAnswer === solution) {
              score++;
              questionsAsked++;
              let url = `url('images/stars${questionsAsked}.png')`;
              function changeBackground() {
                stars.css({ "background-image": url });
              }
              changeBackground();
              dialogue.remove("input");
              dialogue.text("Correct!").fadeOut(3000);
              nav.html(
                "You have: " +
                  score +
                  " OBOLS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name: " +
                  playerName
              );
              moveLeft();
              setTimeout(() => {
                question();
              }, 8000);
            } else {
              dialogue.remove("input");
              dialogue
                .text("Uh oh... That wasn't right...")
                .fadeOut(3000, gameLost);
            }
          }
        });
      }
    }
  }
  return score;
}
// // dialogue function with for loop that takes parameters(const, delay and fade and increments?)

// /* Game lose function - gameLost()
// Dialogue + player fade out
// NPC monologue
// Game restart option */

function gameLost() {
  boat.animate({ "padding-left": "600px" }, 4000);
  dialogue
    .text(
      "You don't have enough obols so I can't let you cross the river... You'll have to return to the shore..."
    )
    .css({ "font-size": "20px", border: "0px", "text-shadow": "0px 0px black" })
    .delay(4000)
    .fadeIn(2000);
  dialogue.fadeOut(6000, function() {
    window.location.reload()
  });
}

// /* End sequence function - gameWon()
// Portal fade in
// Dialogue
// Boat slide to shore
// Player slide to portal and fade out
// NPC monologue
// Display game win + score
// Credits + game restart option */

function gameWon() {
  shore1.fadeIn(100);
  portal.fadeIn(500);
  player.animate({ left: "-=1700px", top: "300px" });
  ferryMan.animate({ left: "100px" });
  boat.animate({ "padding-left": "900px" }, 3000);
  dialogue
    .text("Look there, it's the portal that will take you home...")
    .css({
      "font-size": "20px",
      border: "0px",
      "text-shadow": "0px 0px black",
    });
  dialogue.fadeIn(2000);
  dialogue.fadeOut(2000);
  boat.animate({ "padding-left": "300px" }, 3000, ending);
  function ending() {
    boat.fadeOut();
    player.css({ opacity: "1" }, 500);
    ferryMan.css({ opacity: "1" }, 500);
    ferryMan.fadeIn(500);
    dialogue.text("This is where I leave you. Well done on making it here!");
    dialogue.fadeIn(2000);
    dialogue.fadeOut(2000, goodBye);
    function goodBye() {
      dialogue.text(
        "Thank you! I can't wait to get home... But wait, do you know what my name is?"
      );
      dialogue.fadeIn(2000);
      dialogue.fadeOut(2000, hint);
      function hint() {
        dialogue.text("The stars have your answer...");
        dialogue.fadeIn(2000);
        dialogue.fadeOut(2000);
        stars.on("click", function () {
          dialogue.css({ "font-size": "60px" });
          dialogue.html("Persephone").fadeIn(2000).fadeOut(2000, endGame);
        });
        function endGame() {
          player.animate({ top: "-=30px", left: "-=160px" }, 2000);
          player.fadeOut(500);
          portal.delay(2500).fadeOut(500, credits);
          function credits() {
            stars.unbind('click');
            dialogue
              .css({ "font-size": "25px" })
              .html(
                "Thank you for playing ODYSSEY<p />Thanks go to: David Campbell, Jet Haze, and Angelique Ward for their feedback and help; the brilliant GA instructor duo - Saad Iqbal and Ana Borges - as well as all of my GA cohort!<p />I hope you enjoyed playing <3"
              )
              .fadeIn(2000);
            dialogue.delay(6000).fadeOut(2000, playAgain);
          }
        }
      }
    }
  }
}

function playAgain() {
    dialogue.html("<button type='submit' id='restart'>Play Again</button>").fadeIn(1000);
    $('#restart').on('click', function() {
        window.location.reload();
    });
}