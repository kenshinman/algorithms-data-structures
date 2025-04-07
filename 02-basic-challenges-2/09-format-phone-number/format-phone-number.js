function formatPhoneNumber(numArr) {
  const firstChunk = numArr.slice(0, 3).join(""),
    secondChunk = numArr.slice(3, 6).join(""),
    thirdChunk = numArr.slice(-4).join("");
  return `(${firstChunk}) ${secondChunk}-${thirdChunk}`;
}

module.exports = formatPhoneNumber;
