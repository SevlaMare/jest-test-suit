import Calculator from '../modules/calculator';

describe('test suit for calculator', () => {
  it('should sum all numbers', () => {
    expect(Calculator.sum(1, 2)).toBe(3);
  });

  it('should sum all numbers', () => {
    expect(Calculator.sub(12, 6)).toBe(6);
  });

  it('should sum all numbers', () => {
    expect(Calculator.div(12, 2)).toBe(6);
  });

  it('should sum all numbers', () => {
    expect(Calculator.mult(3, 2)).toBe(6);
  });
});
