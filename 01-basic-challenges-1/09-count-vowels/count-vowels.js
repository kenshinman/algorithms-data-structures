function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
