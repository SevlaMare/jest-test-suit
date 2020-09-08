import reverseString from '../modules/reverseString';

it('Should reverse the string', () => {
  expect(reverseString('stuff')).toBe('ffuts');
});

it('Empty string remain empty', () => {
  expect(reverseString('')).toBe('');
});
