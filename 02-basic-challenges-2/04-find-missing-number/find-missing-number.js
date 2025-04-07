function findMissingNumber(numArr) {
  if (!numArr.length) return 1;
  let missingNum;
  const largestNumber = numArr.sort((a, b) => a - b)[numArr.length - 1];

  // method one
  // for (let i = 1; i <= largestNumber; i++) {
  //   if (numArr.indexOf(i) === -1) {
  //     missingNum = i;
  //   }
  // }

  // method two
  // the difference between the sum of both arrays is the missing number
  const n = numArr.length + 1;

  const expectedSum = (n * (n + 1)) / 2;
  const sumOfNumArr = numArr.reduce((a, b) => {
    return a + b;
  }, 0);

  return expectedSum - sumOfNumArr;

  // return missingNum;
}

module.exports = findMissingNumber;
