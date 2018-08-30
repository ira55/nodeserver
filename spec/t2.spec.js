const countSum = require('../node_cmd/task02');

describe('Task 02', () => {
  it('expect 9', () => {
    expect(countSum(234)).toBe(9);
  });
});
