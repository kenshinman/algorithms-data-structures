function validatePassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/.test(password);
}

module.exports = validatePassword;
