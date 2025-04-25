function highestScoringWord(str) {
  const letters = "_abcdefghijklmnopqrstuvwxyz";

  const splitWords = str.toLowerCase().split(" ");

  const numArr = splitWords.map((word) => {
    return (wordTotal = word.split("").reduce((acc, letter) => {
      return acc + letters.indexOf(letter);
    }, 0));
  });
  const highestValue = numArr.sort((a, b) => (a > b ? 1 : -1))[
    numArr.length - 1
  ];

  return splitWords[numArr.indexOf(highestValue)];
}

module.exports = highestScoringWord;
