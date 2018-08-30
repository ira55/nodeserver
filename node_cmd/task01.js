const countDigits = n => {
  let num = n;
  if (num < 0) {
    num = Math.abs(n);
  }
  let count = 0;
  if (num >= 1) {
    count += 1;
  }
  while (num / 10 >= 1) {
    num /= 10;
    count += 1;
  }
  return count;
};
module.exports = countDigits;
countDigits(process.argv.slice(2));
