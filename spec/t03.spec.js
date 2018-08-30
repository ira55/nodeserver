const perfectNumber = require('../node_cmd/task03');

describe('Task 03', () => {
  it('it is a perfect number', () => {
    expect(perfectNumber(28)).toBe(`It is a perfect number!`);
  });
});
