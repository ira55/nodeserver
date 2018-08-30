const countDigits = require('../node_cmd/task01');

describe('Task 01', () => {
  it('it counts digits when you enter a possitive number', () => {
    expect(countDigits(2347)).toBe(4);
  });
  it('it counts digits when you enter a negative number', () => {
    expect(countDigits(-245)).toBe(3);
  });
});
