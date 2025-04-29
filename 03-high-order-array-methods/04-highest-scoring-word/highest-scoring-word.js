function highestScoringWord(str) {
  const letters = "_abcdefghijklmnopqrstuvwxyz";

  const splitWords = str.toLowerCase().split(" ");

  const numArr = splitWords.map((word) => {
    return (wordTotal = word.split("").reduce((acc, letter) => {
      return acc + letters.indexOf(letter);
    }, 0));
  });
  const highestValue = Math.max(...numArr);

  return splitWords[numArr.indexOf(highestValue)];
}

module.exports = highestScoringWord;
