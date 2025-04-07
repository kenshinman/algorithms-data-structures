function numberToWords(n) {
  if (n === 0) return "zero";
  if (n > 1_000_000_000) return "Number too large";

  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  function convertChunk(num) {
    let words = [];

    if (Math.floor(num / 100) > 0) {
      words.push(ones[Math.floor(num / 100)] + " hundred");
      num %= 100;
      if (num > 0) {
        words.push("and");
      }
    }

    if (num >= 10 && num < 20) {
      words.push(teens[num - 10]);
    } else {
      if (Math.floor(num / 10) > 0) {
        words.push(tens[Math.floor(num / 10)]);
      }
      if (num % 10 > 0) {
        words.push(ones[num % 10]);
      }
    }

    return words.join(" ");
  }

  let result = [];

  const billion = Math.floor(n / 1_000_000_000);
  const million = Math.floor((n % 1_000_000_000) / 1_000_000);
  const thousand = Math.floor((n % 1_000_000) / 1000);
  const remainder = n % 1000;

  if (billion > 0) {
    result.push(convertChunk(billion) + " billion");
  }

  if (million > 0) {
    result.push(convertChunk(million) + " million");
  }

  if (thousand > 0) {
    result.push(convertChunk(thousand) + " thousand");
  }

  if (remainder > 0) {
    result.push(convertChunk(remainder));
  }

  return result.join(" ");
}

// Example usage:
console.log(numberToWords(123456789)); // "one hundred and twenty three million four hundred and fifty six thousand seven hundred and eighty nine"
console.log(numberToWords(1000000000)); // "one billion"
console.log(numberToWords(2005)); // "two thousand and five"
