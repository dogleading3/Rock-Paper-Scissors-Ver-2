const player1Display = document.getElementById("playerDisplay");
const player2Display = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("result");
const player1Score = document.getElementById("player1Score");
const player2Score = document.getElementById("player2Score");
const resetButton = document.getElementById("reset");

player1Score.textContent = "0";
player2Score.textContent = "0";

const choices = document.querySelectorAll(".choice");

let player1Choice = null;
let player2Choice = null;
let isPlayer2First = false;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    if (!isPlayer2First) {
      if (player1Choice === null) {
        player1Choice = choice.textContent;
        player1Display.textContent = `Player1: ${player1Choice}`;
      } else if (player2Choice === null) {
        player2Choice = choice.textContent;
        player2Display.textContent = `Player2: ${player2Choice}`;
        playRound(player1Choice, player2Choice);
        player1Choice = null;
        player2Choice = null;
      }
    } else {
      if (player2Choice === null) {
        player2Choice = choice.textContent;
        player2Display.textContent = `Player2: ${player2Choice}`;
      } else if (player1Choice === null) {
        player1Choice = choice.textContent;
        player1Display.textContent = `Player1: ${player1Choice}`;
        playRound(player1Choice, player2Choice);

        player1Choice = null;
        player2Choice = null;
      }
    }
  });
});

function playRound(player1Choice, player2Choice) {
  let result = "";

  if (player1Choice === player2Choice) {
    result = "It's a tie!";
  } else if (
    (player1Choice === "Rock" && player2Choice === "Scissors") ||
    (player1Choice === "Paper" && player2Choice === "Rock") ||
    (player1Choice === "Scissors" && player2Choice === "Paper")
  ) {
    result = "Player 1 wins!";
  } else {
    result = "Player 2 wins!";
  }

  player1Display.textContent = `Player1: ${player1Choice}`;
  player2Display.textContent = `Player2: ${player2Choice}`;
  resultDisplay.textContent = result;

  if (result === "Player 1 wins!") {
    player1Score.textContent = parseInt(player1Score.textContent) + 1;
  } else if (result === "Player 2 wins!") {
    player2Score.textContent = parseInt(player2Score.textContent) + 1;
  }

  setTimeout(() => {
    player1Display.textContent = "Player1: ";
    player2Display.textContent = "Player2: ";
    resultDisplay.textContent = "";
  }, 1000);
}

resetButton.addEventListener("click", () => {
  const p1Score = parseInt(player1Score.textContent);
  const p2Score = parseInt(player2Score.textContent);

  if (p2Score > p1Score) {
    isPlayer2First = true;
  } else {
    isPlayer2First = false;
  }

  player1Score.textContent = "0";
  player2Score.textContent = "0";
  player1Choice = null;
  player2Choice = null;
  player1Display.textContent = "Player1: ";
  player2Display.textContent = "Player2: ";
  resultDisplay.textContent = "";
});
