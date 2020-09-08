import reverseString from '../modules/reverseString';

it('Should reverse the string', () => {
  expect(reverseString('stuff')).toBe('ffuts');
});