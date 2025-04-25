function sumOfEvenSquares(numArr) {
  return numArr
    .filter((num) => num > 0 && num % 2 === 0)
    .map((num) => Math.pow(num, 2))
    .reduce((init, num) => init + num, 0);
}

module.exports = sumOfEvenSquares;
