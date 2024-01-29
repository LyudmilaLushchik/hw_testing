export default function checker(digits) {
  let sum = 0;
  const parity = (digits.length) % 2;

  for (let i = 0; i < digits.length; i += 1) {
    let cardNum = parseInt(digits[i], 10);

    if (i % 2 === parity) {
      cardNum *= 2;

      if (cardNum > 9) {
        cardNum -= 9;
      }
    }

    sum += cardNum;
  }

  return sum % 10 === 0;
}
