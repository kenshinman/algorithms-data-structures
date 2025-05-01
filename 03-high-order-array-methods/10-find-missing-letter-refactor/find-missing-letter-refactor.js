function findMissingLetter(inputArr) {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const firstLetterIndex = letters.indexOf(inputArr[0]);
  const lastLetterIndex = letters.indexOf(inputArr[inputArr.length - 1]);
  const slicedLetters = letters.substring(firstLetterIndex, lastLetterIndex);
  let missingLetter = "";
  slicedLetters.split("").forEach((letter) => {
    if (inputArr.indexOf(letter) === -1) missingLetter = letter;
  });
  return missingLetter;
}

module.exports = findMissingLetter;
