import CesarCipher from '../modules/caesarCipher';

describe('should encrypt and decrypt correctly', () => {
  it('should encrypt abz to bca', () => {
    expect(CesarCipher.cipher('abz', 1)).toBe('bca');
  });

  it('should decrypt bca to abz', () => {
    expect(CesarCipher.cipher('bca', -1)).toBe('abz');
  });

  it('should encrypt correctly with punctuation', () => {
    expect(CesarCipher.cipher('!.,?', 1)).toBe('"/-@');
  });

  it('should decrypt correctly with punctuation', () => {
    expect(CesarCipher.cipher('"/-@', -1)).toBe('!.,?');
  });
});
