function removeDuplicates(items) {
  // most efficient way to remove duplicates from an array in JavaScript
  // using Set constructor which creates a new Set object
  //return [...new Set(items)];

  // using filter method to remove duplicates from an array in JavaScript
  //return items.filter((item, index) => items.indexOf(item) === index);
  // using loops
  let result = [];
  for (let i = 0; i < items.length; i++) {
    if (result.indexOf(items[i]) === -1) {
      result.push(items[i]);
    }
  }
  return result;
}

module.exports = removeDuplicates;
