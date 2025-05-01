function validatePassword(password) {
  // using regex
  // return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/.test(password);

  // using array.some
  if (!password) return false;
  const characters = password.split("");
  const isMeetsMinimumLength = password.length > 7;
  const hasLowerCaseLetter = characters.some((char) => /[a-z]/.test(char));
  const hasHigherCaseLetter = characters.some((char) => /[A-Z]/.test(char));
  const hasDigit = characters.some((char) => /\d/.test(char));

  return (
    isMeetsMinimumLength &&
    hasLowerCaseLetter &&
    hasHigherCaseLetter &&
    hasDigit
  );
}

module.exports = validatePassword;
