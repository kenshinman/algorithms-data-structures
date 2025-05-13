function factorial(n) {
  if (n >= 0 && n < 2) return 1;
  return factorial(n - 1) * n;
}

module.exports = factorial;
