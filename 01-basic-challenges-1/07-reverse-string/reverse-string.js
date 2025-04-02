function reverseString(str) {
  // most efficient solution
  // return str.split("").reverse().join("");

  //using for loop
  let reversed = "";
  const splitStr = str.split("");
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += splitStr[i];
  }
  return reversed;
}

module.exports = reverseString;
