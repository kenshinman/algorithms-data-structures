const isValidIPv4 = (ipString) => {
  const splitStr = ipString.split(".");
  if (splitStr.length !== 4) return false;
  return splitStr.every((str) => {
    const num = parseInt(str);
    return num > -1 && num < 256 && !str.startsWith("0");
  });
};

module.exports = isValidIPv4;
