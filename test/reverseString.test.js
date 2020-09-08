import reverseString from '../modules/reverseString';

describe('input string and returns it reversed', () => {
  it('Should reverse the string', () => {
    expect(reverseString('stuff')).toBe('ffuts');
  });

  it('Empty string remain empty', () => {
    expect(reverseString('')).toBe('');
  });
});
