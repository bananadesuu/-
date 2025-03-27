const resultElement = document.getElementById("result");
const rockButton = document.getElementById("rock");
const scissorsButton = document.getElementById("scissors");
const paperButton = document.getElementById("paper");

const hands = ["グー", "チョキ", "パー"];

rockButton.addEventListener("click", () => play(0));
scissorsButton.addEventListener("click", () => play(1));
paperButton.addEventListener("click", () => play(2));

function play(playerHand) {
  const computerHand = Math.floor(Math.random() * 3);
  const result = judge(playerHand, computerHand);

  resultElement.textContent = `あなたの手: ${hands[playerHand]}, コンピュータの手: ${hands[computerHand]}, 結果: ${result}`;
}

function judge(playerHand, computerHand) {
  if (playerHand === computerHand) {
    return "あいこ";
  } else if (
    (playerHand === 0 && computerHand === 1) ||
    (playerHand === 1 && computerHand === 2) ||
    (playerHand === 2 && computerHand === 0)
  ) {
    return "勝ち";
  } else {
    return "負け";
  }
}
