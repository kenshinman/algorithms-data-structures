function fibonacci(num, memo = {}) {
  // if (num <= 1) return num;
  // if (memo[num]) return memo[num];
  // memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  // return memo[num];
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;
