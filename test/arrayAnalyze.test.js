import analyze from '../modules/arrayAnalyze';

describe('test suit for analyze array', () => {
  it('should retrieve the array length', () => {
    const test = analyze([1, 2, 3]);
    expect(test.len).toBe(3);
  });

  it('should retrieve the average', () => {
    const test = analyze([1, 2, 3]);
    expect(test.avg).toBe(2);
  });

  it('should retrieve the minimum value', () => {
    const test = analyze([1, 2, 3]);
    expect(test.min).toBe(1);
  });

  it('should retrieve the maximum value', () => {
    const test = analyze([1, 2, 3]);
    expect(test.max).toBe(3);
  });
});
