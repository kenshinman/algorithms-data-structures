function findMissingNumber(numArr) {
  const largestNumber = numArr.sort((a, b) => a - b)[numArr.length - 1];
  let missingNum;
  for (let i = 1; i <= largestNumber; i++) {
    if (numArr.indexOf(i) === -1) {
      missingNum = i;
    }
  }
  return missingNum;
}

module.exports = findMissingNumber;
