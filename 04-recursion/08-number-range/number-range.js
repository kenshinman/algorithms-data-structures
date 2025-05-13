function numberRange(start, end) {
  if (start === end) return [start];
  const result = numberRange(start, end - 1);
  result.push(end);
  return result;
}

module.exports = numberRange;
