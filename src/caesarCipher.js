const CesarCipher = (() => {
  const toLetter = (num) => String.fromCharCode(num);

  const toNum = (str, pos) => str.charCodeAt(pos);

  const decryptLetterNumber = (letterNumber, timesToUnshift) => {
    let decryptedLetter = letterNumber - timesToUnshift;
    while (decryptedLetter < 97) {
      decryptedLetter = 122 - (96 - decryptedLetter);
    }
    return decryptedLetter;
  };

  const encryptLetterNumber = (letterNumber, timesToShift) => {
    let encryptedLetter = letterNumber + timesToShift;
    while (encryptedLetter > 122) {
      encryptedLetter = 96 + (encryptedLetter - 122);
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