const countSum = n => {
  let num = n;
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};

module.exports = countSum;
countSum(process.argv.slice(2));
