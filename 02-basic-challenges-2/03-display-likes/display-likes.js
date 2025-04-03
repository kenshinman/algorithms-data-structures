function displayLikes(namesArr) {
  const namesArrLength = namesArr.length;
  if (namesArrLength === 0) return `no one likes this`;
  if (namesArrLength === 1) return `${namesArr[0]} likes this`;
  if (namesArrLength === 2)
    return `${namesArr[0]} and ${namesArr[1]} like this`;
  if (namesArrLength === 3)
    return `${namesArr[0]}, ${namesArr[1]} and ${namesArr[2]} like this`;
  return `${namesArr[0]}, ${namesArr[1]} and ${
    namesArrLength - 2
  } others like this`;
}

module.exports = displayLikes;
