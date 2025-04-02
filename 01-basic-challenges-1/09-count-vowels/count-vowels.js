function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  str.split("").forEach((char) => {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  });
  return count;
}

module.exports = countVowels;
