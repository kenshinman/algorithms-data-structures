function findMissingNumber(numArr) {
  let missingNum;
  for (let i = 1; i <= numArr; i++) {
    if (!numArr.includes(i)) {
      missingNum = i;
    }
  }
  return missingNum;
}

module.exports = findMissingNumber;
