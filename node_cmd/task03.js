const perfectNumber = n => {
  let sumDividers = 0;
  for (let i = 1; i <= n / 2; i += 1) {
    if (n % i === 0) {
      sumDividers += i;
    }
  }

  if (sumDividers === n && sumDividers !== 0) {
    return `It is a perfect number!`;
  }
  return false;
};
module.exports = perfectNumber;
perfectNumber(process.argv.slice(2));
