function moveLeft() {
  $("#boat").animate({ "padding-left": "0px" }, 4000);
  $("#boat").animate({ "padding-left": "1200px" }, 4000);
}

moveLeft();

function glow() {
  $("#moon").css({filter: "brightness(50%)"}, 4000);
  $("#moon").css({filter: "brightness(100%)"}, 4000);
}

glow();
