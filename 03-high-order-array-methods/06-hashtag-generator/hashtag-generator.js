function generateHashtag(str) {
  if (!str.trim().length) return false;
  const titleCase = (word) => {
    if (word) return word[0].toUpperCase() + word.slice(1);
  };
  const splitStrWord = str
    .split(" ")
    .filter((word) => !!word)
    .map((word) => titleCase(word));
  const output = `#${splitStrWord.join("")}`;
  if (output.length > 140) return false;
  return output;
}

module.exports = generateHashtag;
