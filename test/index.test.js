import capitalize from '../modules/index';

it('Should capitalize the first letter', () => {
  expect(capitalize('stuff')).toBe('Stuff');
});
