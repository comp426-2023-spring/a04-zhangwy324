const rpsArr = ["rock", "paper", "scissors"];
const rpslsArr = ["rock", "paper", "scissors", "lizard", "spock"];

function rps(player) {
  if (player) {
    const playerChoice = player.toLowerCase();
    const opponentChoice = randChoose(rpsArr);
    const playerChoiceNum = rpsArr.indexOf(playerChoice);
    const opponentChoiceNum = rpsArr.indexOf(opponentChoice);
    const result = checkWinRps(playerChoiceNum, opponentChoiceNum);
    const obj = {
      player: playerChoice,
      opponent: opponentChoice,
      result: result,
    };
    return obj;
  } else {
    const playerChoice = randChoose(rpsArr);
    const obj = { player: playerChoice };
    return obj;
  }
}

function rpsls(player) {
  if (!player) {
    const playerChoice = randChoose(rpslsArr);
    const obj = { player: playerChoice };
    return obj;
  } else {
    const playerChoice = player.toLowerCase();
    const opponentChoice = randChoose(rpslsArr);
    const result = checkWinRpsls(playerChoice, opponentChoice);
    const obj = {
      player: playerChoice,
      opponent: opponentChoice,
      result: result,
    };
    return obj;
  }
}

// Helper Functions
function randChoose(arr) {
  const len = arr.length;
  const rNum = randIntBetween(1, len);
  if (len == 3) {
    return arr[rNum - 1];
  } else if (len == 5) {
    return arr[rNum - 1];
  }
}

function randIntBetween(min, max) {
  const rInt = Math.floor(Math.random() * (max - min + 1) + min);
  return rInt;
}

function checkWinRps(playerChoiceNum, opponentChoiceNum) {
  if (playerChoiceNum == opponentChoiceNum) {
    return "tie";
  } else if ((playerChoiceNum + 1) % 3 == opponentChoiceNum) {
    return "lose";
  } else {
    return "win";
  }
}

function checkWinRpsls(playerChoice, opponentChoice) {
  if (playerChoice === "rock") {
    if (opponentChoice === "rock") return "tie";
    if (opponentChoice === "paper") return "lose";
    if (opponentChoice === "scissors") return "win";
    if (opponentChoice === "lizard") return "win";
    if (opponentChoice === "spock") return "lose";
  }
  if (playerChoice === "paper") {
    if (opponentChoice === "rock") return "win";
    if (opponentChoice === "paper") return "tie";
    if (opponentChoice === "scissors") return "lose";
    if (opponentChoice === "lizard") return "lose";
    if (opponentChoice === "spock") return "win";
  }
  if (playerChoice === "scissors") {
    if (opponentChoice === "rock") return "lose";
    if (opponentChoice === "paper") return "win";
    if (opponentChoice === "scissors") return "tie";
    if (opponentChoice === "lizard") return "win";
    if (opponentChoice === "spock") return "lose";
  }
  if (playerChoice === "lizard") {
    if (opponentChoice === "rock") return "lose";
    if (opponentChoice === "paper") return "win";
    if (opponentChoice === "scissors") return "lose";
    if (opponentChoice === "lizard") return "tie";
    if (opponentChoice === "spock") return "win";
  }
  if (playerChoice === "spock") {
    if (opponentChoice === "rock") return "win";
    if (opponentChoice === "paper") return "lose";
    if (opponentChoice === "scissors") return "win";
    if (opponentChoice === "lizard") return "lose";
    if (opponentChoice === "spock") return "tie";
  }
}

export { rps, rpsls };
