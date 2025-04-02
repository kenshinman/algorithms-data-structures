function isPalindrome(str) {
  const sanitizedString = str.replace(/\W/g, "").toLowerCase();
  const reversedString = sanitizedString.split("").reverse().join("");
  return sanitizedString === reversedString;
}

module.exports = isPalindrome;
