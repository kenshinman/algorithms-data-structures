// function sumTwo(numArr, sumTo) {
//   const result = [];
//   numArr.forEach((num, index, arr) => {
//     arr.forEach((n, innerIndex) => {
//       if (n + num === sumTo) {
//         result[0] = index;
//         result[1] = innerIndex;
//       };
//     });

//   });
//   return result;
// }

// function twoSum(nums, target) {
//   const result = [];
//   nums.forEach((num, index, arr) => {
//     let shouldRun = true;
//     console.log({arr});
//     if (shouldRun) {
//       arr.forEach((innerNum, innerIndex) => {
//         const sum = num + innerNum;
//         if (index !== innerIndex && sum === target) {
//           result[0] = index;
//           result[1] = innerIndex;
//           shouldRun = false;
//         }
//       });
//     }
//   });
//   return result;
// }

// twoSum Solution
function twoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([2, 4, 11, 3], 6));

function isValidBrackets(string) {
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const openBrackets = Object.values(map);
  const closedBrackets = Object.keys(map);
  const stack = [];
  const strArr = string.split("");

  for (const char of strArr) {
    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closedBrackets.includes(char)) {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValidBrackets("{]"));

function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLength = 0;
  const seen = new Set();

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    seen.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("andyandomandies"));

function minimalSubsetA(weights) {
  // Sort weights in descending order to pick heaviest first
  weights.sort((a, b) => b - a);

  const totalSum = weights.reduce((sum, val) => sum + val, 0);
  const subsetA = [];
  let sumA = 0;

  for (let i = 0; i < weights.length; i++) {
    subsetA.push(weights[i]);
    sumA += weights[i];

    const remainingSum = totalSum - sumA;
    if (sumA > remainingSum) {
      break;
    }
  }

  // Return subset A in increasing order
  return subsetA.sort((a, b) => a - b);
}

console.log(minimalSubsetA([3, 7, 5, 6, 2]));

function numberOfItems(s, startIndices, endIndices) {
  // Write your code here
  const n = s.length;
  const prefixSums = Array(n).fill(0);
  const leftPipes = Array(n).fill(-1);
  const rightPipes = Array(n).fill(-1);

  let count = 0;
  let lastPipe = -1;
  for (let i = 0; i < n; i++) {
    if (s[i] === "|") {
      lastPipe = i;
    }
    leftPipes[i] = lastPipe;

    if (s[i] === "*") {
      prefixSums[i] = i > 0 ? prefixSums[i - 1] + 1 : 1;
    } else {
      prefixSums[i] = i > 0 ? prefixSums[i - 1] : 0;
    }
  }

  lastPipe = -1;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === "|") {
      lastPipe = i;
    }
    rightPipes[i] = lastPipe;
  }

  console.log(prefixSums);
  console.log(leftPipes);
  console.log(rightPipes);

  const result = [];
}
const s = "|**|*|*";
const startIndices = [1, 1];
const endIndices = [5, 6];

console.log(numberOfItems(s, startIndices, endIndices));
