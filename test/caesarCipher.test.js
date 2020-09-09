import CesarCipher from '../modules/caesarCipher';

describe('should encrypt and decrypt correctly', () => {
  it('should encrypt abz to bca', () => {
    expect(CesarCipher.cipher('abz', 1)).toBe('bca');
  });

  it('should decrypt bca to abz', () => {
    expect(CesarCipher.cipher('bca', -1)).toBe('abz');
  });

  it('should encrypt ABZ to BCA', () => {
    expect(CesarCipher.cipher('ABZ', 1)).toBe('BCA');
  });

  it('should decrypt BCA to ABZ', () => {
    expect(CesarCipher.cipher('BCA', -1)).toBe('ABZ');
  });

  it('should encrypt correctly with spaces', () => {
    expect(CesarCipher.cipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
  });

  it('should encrypt correctly with spaces and uppercase', () => {
    expect(CesarCipher.cipher('ATTACK.AT.DAWN', 5)).toBe('FYYFHP.FY.IFBS');
  });
});
