const CesarCipher = (() => {
  const MAX_NUMBER_LETTER = 122;
  const MIN_NUMBER_LETTER = 96;
  const MAX_NUMBER_PUNCTUATION = 64;
  const MIN_NUMBER_PUNCTUATION = 32;

  const toLetter = (num) => String.fromCharCode(num);

  const toNum = (str, pos) => str.charCodeAt(pos);

  const encryptLetterNumber = (letterNumber, timesToShift) => {
    let encryptedLetter = letterNumber + timesToShift;
    while (
      encryptedLetter > MAX_NUMBER_LETTER ||
      encryptedLetter <= MIN_NUMBER_LETTER
    ) {
      if (encryptedLetter > MAX_NUMBER_LETTER) {
        encryptedLetter =
          MIN_NUMBER_LETTER + (encryptedLetter - MAX_NUMBER_LETTER);
      } else {
        encryptedLetter =
          MAX_NUMBER_LETTER - (MIN_NUMBER_LETTER - encryptedLetter);
      }
    }
    return encryptedLetter;
  };

  const encryptPunctuationToNumber = (punctuationNumber, timesToShift) => {
    let encryptedPunctuation = punctuationNumber + timesToShift;
    while (
      encryptedPunctuation > MAX_NUMBER_PUNCTUATION ||
      encryptedPunctuation <= MIN_NUMBER_PUNCTUATION
    ) {
      if (encryptedPunctuation > MAX_NUMBER_PUNCTUATION) {
        encryptedPunctuation =
          MIN_NUMBER_PUNCTUATION + (encryptedPunctuation - MAX_NUMBER_PUNCTUATION);
      } else {
        encryptedPunctuation =
          MAX_NUMBER_PUNCTUATION - (MIN_NUMBER_PUNCTUATION - encryptedPunctuation);
      }
    }
    return encryptedPunctuation;
  };

  const cipher = (string, numToShift) => {
    let encryptWord = "";
    for (let index = 0; index < string.length; index += 1) {
      if (string[index].match(/[a-z]/)) {
        encryptWord += toLetter(
          encryptLetterNumber(toNum(string, index), numToShift)
          );
      } else {
        encryptWord += toLetter(
          encryptPunctuationToNumber(toNum(string, index), numToShift)
          );
      }
    }
    return encryptWord;
  };

  return {
    cipher,
  };
})();

export default CesarCipher;
