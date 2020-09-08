import capitalize from '../modules/capitalize';

describe('input a string, output itself capitalized', () => {
  it('Should capitalize the first letter', () => {
    expect(capitalize('stuff')).toBe('Stuff');
  });
});
