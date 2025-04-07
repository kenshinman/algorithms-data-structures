function findMissingLetter(strArr) {
  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const firstIndex = alphabets.indexOf(strArr[0]);
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== alphabets[firstIndex + i]) {
      return alphabets[firstIndex + i];
    }
  }
  return "";
}

module.exports = findMissingLetter;
