function diceGameSimulation(numSimulations) {
  function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  function showResult(sum) {
    if (sum === 7 || sum === 11) return "win";
    if (sum === 2 || sum === 3 || sum === 12) return "lose";
    return "roll again";
  }

  const output = [];

  for (let i = 1; i <= numSimulations; i++) {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const sum = dice1 + dice2;
    const result = showResult(sum);
    output.push({dice1, dice2, sum, result});
  }
  console.log({output});
  return output;
}

module.exports = diceGameSimulation;
