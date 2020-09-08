import calculator from './calculator';

describe('test suit for calculator', () => {
  it('should sum all numbers', () => {
    expect(calculator.sum(1, 2, 3)).toBe(6);
  });

  it('should sum all numbers', () => {
    expect(calculator.sub(12, 6)).toBe(6);
  });

  it('should sum all numbers', () => {
    expect(calculator.div(12, 2)).toBe(6);
  });

  it('should sum all numbers', () => {
    expect(calculator.mult(3, 2)).toBe(6);
  });
});
