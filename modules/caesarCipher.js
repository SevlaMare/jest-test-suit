const CesarCipher = (() => {
  const toLetter = (num) => String.fromCharCode(num);

  const toNum = (str, pos) => str.charCodeAt(pos);

  const encryptLetterToNumber = (
    letterNumber,
    timesToShift,
    isLower = true,
  ) => {
    const minNumberLetter = isLower ? 96 : 64;
    const maxNumberLetter = isLower ? 122 : 90;
    let encryptedLetter = letterNumber + timesToShift;

    while (
      encryptedLetter > maxNumberLetter
      || encryptedLetter <= minNumberLetter
    ) {
      if (encryptedLetter > maxNumberLetter) {
        encryptedLetter = minNumberLetter + (encryptedLetter - maxNumberLetter);
      } else {
        encryptedLetter = maxNumberLetter - (minNumberLetter - encryptedLetter);
      }
    }
    return encryptedLetter;
  };

  const cipher = (string, numToShift) => {
    let encryptWord = '';
    for (let index = 0; index < string.length; index += 1) {
      if (string[index].match(/[a-z]/)) {
        encryptWord += toLetter(
          encryptLetterToNumber(toNum(string, index), numToShift),
        );
      } else if (string[index].match(/[A-Z]/)) {
        encryptWord += toLetter(
          encryptLetterToNumber(toNum(string, index), numToShift, false),
        );
      } else {
        encryptWord += string[index];
      }
    }
    return encryptWord;
  };

  return {
    cipher,
  };
})();

export default CesarCipher;
