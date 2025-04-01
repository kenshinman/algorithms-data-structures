function countOccurrences(str, char) {
  let count = 0;
  str.split("").forEach((c) => {
    console.log(c, char);
    if (c === char) {
      count++;
    }
  });
  return count;
}

module.exports = countOccurrences;
