function arrayIntersection(arr1, arr2) {
  const intersection = [];
  arr1.forEach((item, i) => {
    if (arr2.includes(item) && !intersection.includes(item)) {
      intersection.push(item);
    }
  });
  return intersection;
}

module.exports = arrayIntersection;
