import CesarCipher from './caesarCipher';

it('should encrypt abz to bca', () => {
  expect(CesarCipher.encrypt('abz', 1)).toBe('bca');
});

it('should decrypt bca to abz', () => {
  expect(CesarCipher.decrypt('bca', 1)).toBe('abz');
});