import capitalize from '../modules/capitalize';

it('Should capitalize the first letter', () => {
  expect(capitalize('stuff')).toBe('Stuff');
});
