function areAllCharactersUnique(str) {
  if (str === "") return true;
  const reducedStr = [...new Set(str.split(""))].join("");
  return reducedStr.length === str.length;
}

module.exports = areAllCharactersUnique;
