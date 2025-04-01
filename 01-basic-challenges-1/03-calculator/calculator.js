function calculator(num1, num2, operator) {
  // Check if the operator is valid
  if (!["+", "-", "*", "/"].includes(operator)) {
    throw new Error("Invalid operator. Please use +, -, *, or /.");
  }
  return Number(eval(`${num1} ${operator} ${num2}`));
}

module.exports = calculator;
