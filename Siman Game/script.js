let gameSqls = [];
let userSqls = [];
let body = document.querySelector("body");
let start = false;
let level = 0;
let h3 = document.querySelector("h3");
let btns = ["yellow", "green", "lightBlue", "aquaColor"];

// Start game on keypress
document.addEventListener("keypress", function () {
  if (!start) {
    console.log("game started");
    start = true;
    levelUp();
  }
});

// Flash for Simon's turn
function colorFlash(btn) {
  if (!btn) return;
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

// Flash for user click
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

// Level up: add new color to sequence
function levelUp() {
  userSqls = [];
  level++;
  h3.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * btns.length);
  let randColor = btns[randIdx];
  gameSqls.push(randColor);
  console.log("Game pattern:", gameSqls);

  let randBtn = document.querySelector(`.${randColor}`);
  colorFlash(randBtn);
}

// Check user's clicked color
function checkAnswer(index) {
  if (userSqls[index] === gameSqls[index]) {
    if (userSqls.length === gameSqls.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerText = `Game Over! You reached Level ${level}. Press any key to restart.`;
    body.style.backgroundColor = "red";
    setTimeout(() => {
      body.style.backgroundColor = "white";
    }, 200);
    resetGame();
  }
}

// Reset game state
function resetGame() {
  console.log(`Game ended at level ${level}`);
  start = false;
  level = 0;
  gameSqls = [];
  userSqls = [];
}

// On user button click
function btnPress() {
  let btn = this;
  let userColor = btn.classList[0]; // gets 'yellow', 'green', etc.
  userSqls.push(userColor);
  console.log("User pattern:", userSqls);

  userFlash(btn);
  checkAnswer(userSqls.length - 1);
}

// Add event listeners to all boxes
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
