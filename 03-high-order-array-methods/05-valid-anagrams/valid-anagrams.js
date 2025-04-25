function validAnagrams(word1, word2) {
  const sortedWord1 = word1.split("").sort().join("");
  const sortedWord2 = word2.split("").sort().join("");
  return sortedWord1 === sortedWord2;
}

module.exports = validAnagrams;
