import CesarCipher from '../modules/caesarCipher';

describe('should encrypt and decrypt correctly', () => {
  it('should encrypt abz to bca', () => {
    expect(CesarCipher.encrypt('abz', 1)).toBe('bca');
  });

  it('should decrypt bca to abz', () => {
    expect(CesarCipher.decrypt('bca', 1)).toBe('abz');
  });

  it('should encrypt punctuation', () => {
    expect(CesarCipher.encrypt('!.,?', 1)).toBe('\"/-@');
  });

  // it('should decrypt punctuation', () => {
  //   expect(CesarCipher.decrypt('\"/-@', 1)).toBe('!.,?');
  // });
});
