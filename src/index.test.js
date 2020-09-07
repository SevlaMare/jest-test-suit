import capitalize from './index';

it ('Should capitalize the first letter', () => {
  expect( capitalize('stuff') ).toBe('Stuff')
})
