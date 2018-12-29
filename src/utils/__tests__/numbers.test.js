import { abbreviateNumbers } from '../numbers';

describe('numbers', () => {
  it('should handle number 1000000', () => {
    const number = 1000000;
    const result = abbreviateNumbers(number, 2);

    expect(result).toEqual('1m');
  });
});
