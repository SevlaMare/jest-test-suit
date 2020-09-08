const CesarCipher = (() => {
  const MAX_NUMBER_LETTER = 122;
  const MIN_NUMBER_LETTER = 96;

  const toLetter = (num) => String.fromCharCode(num);

  const toNum = (str, pos) => str.charCodeAt(pos);

  const decryptLetterNumber = (letterNumber, timesToUnshift) => {
    let decryptedLetter = letterNumber - timesToUnshift;
    while (decryptedLetter <= MIN_NUMBER_LETTER) {
      decryptedLetter = MAX_NUMBER_LETTER - (MIN_NUMBER_LETTER - decryptedLetter);
    }
    return decryptedLetter;
  };

  const encryptLetterNumber = (letterNumber, timesToShift) => {
    let encryptedLetter = letterNumber + timesToShift;
    while (encryptedLetter > MAX_NUMBER_LETTER) {
      encryptedLetter = MIN_NUMBER_LETTER + (encryptedLetter - MAX_NUMBER_LETTER);
    }
    return encryptedLetter;
  };

  const encrypt = (string, numToShift) => {
    let encryptWord = '';
    for (let index = 0; index < string.length; index += 1) {
      encryptWord += toLetter(encryptLetterNumber(toNum(string, index), numToShift));
    }
    return encryptWord;
  };

  const decrypt = (string, numToUnShift) => {
    let decryptWord = '';
    for (let index = 0; index < string.length; index += 1) {
      decryptWord += toLetter(decryptLetterNumber(toNum(string, index), numToUnShift));
    }
    return decryptWord;
  };

  return {
    encrypt,
    decrypt,
  };
})();

export default CesarCipher;