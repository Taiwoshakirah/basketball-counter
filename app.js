// const focusedElement = document.querySelector(".left-side h3");
// const ritebutton = document.querySelector(".right-side h3");
// const gamer = document.querySelector("new-game");

// const homeButtons = document.querySelectorAll(".left-side .btns button");
// const guestButton = document.querySelectorAll(".right-side .btns button");

// //function to handle button clicks
// function handleButtonClick(button, scoreElement) {
//   button.addEventListener("click", function () {
//     const value = parseInt(button.textContent);
//     const currentScore = parseInt(scoreElement.textContent);
//     scoreElement.textContent = currentScore + value;
//   });
// }

// //add event listener to home buttons
// homeButtons.forEach((button) => {
//   handleButtonClick(button, focusedElement);
// });

// //add event listener to guest buttons
// guestButton.forEach((button) => {
//   handleButtonClick(button, ritebutton);
// });

// function resetScore() {
//   focusedElement.textContent = "0";
//   ritebutton.textContent = "0";
// }

const homeScoreElement = document.querySelector("#home-score");
const guestScoreElement = document.querySelector("#guest-score");

const leftSideButton = document.querySelectorAll(".left-side button");
const rigthSideButton = document.querySelectorAll(".right-side button");

const newGameButton = document.querySelector(".new-game");

let homeScore = 0;
let guestScore = 0;

leftSideButton[0].addEventListener("click", () => {
  homeScore++;
  homeScoreElement.textContent = homeScore;
});

leftSideButton[1].addEventListener("click", () => {
  homeScore += 2;
  homeScoreElement.textContent = homeScore;
});

leftSideButton[2].addEventListener("click", () => {
  homeScore += 3;
  homeScoreElement.textContent = homeScore;
});

rigthSideButton[0].addEventListener("click", () => {
  guestScore++;
  guestScoreElement.textContent = guestScore;
});

rigthSideButton[1].addEventListener("click", () => {
  guestScore += 2;
  guestScoreElement.textContent = guestScore;
});

rigthSideButton[2].addEventListener("click", () => {
  guestScore += 3;
  guestScoreElement.textContent = guestScore;
});

newGameButton.addEventListener("click", () => {
  homeScore = 0;
  guestScore = 0;
  homeScoreElement.textContent = homeScore;
  guestScoreElement.textContent = guestScore;
});
