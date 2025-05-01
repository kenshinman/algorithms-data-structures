const findMissingLetter = require("./find-missing-letter-refactor");

const result = findMissingLetter(["a", "b", "c", "e"]);
const result2 = findMissingLetter(["X", "Z"]);
const result3 = findMissingLetter(["m", "n", "o", "q", "r"]);

console.log(result, result2, result3);
