/* https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-27 */

function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "Tie";
  }

  if (player1 === "Rock" && player2 === "Scissors" || player1 === "Paper" && player2 === "Rock" || player1 === "Scissors" && player2 === "Paper") {
    return "Player 1 wins";
  }
  return "Player 2 wins";
}