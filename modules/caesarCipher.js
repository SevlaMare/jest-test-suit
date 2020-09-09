const CesarCipher = (() => {
  const MAX_NUMBER_PUNCTUATION = 64;
  const MIN_NUMBER_PUNCTUATION = 33;

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

  const encryptPunctuationToNumber = (punctuationNumber, timesToShift) => {
    let encryptedPunctuation = punctuationNumber + timesToShift;
    while (
      encryptedPunctuation > MAX_NUMBER_PUNCTUATION
      || encryptedPunctuation < MIN_NUMBER_PUNCTUATION
    ) {
      if (encryptedPunctuation > MAX_NUMBER_PUNCTUATION) {
        encryptedPunctuation = MIN_NUMBER_PUNCTUATION
          + (encryptedPunctuation - MAX_NUMBER_PUNCTUATION);
      } else {
        encryptedPunctuation = MAX_NUMBER_PUNCTUATION
          - (MIN_NUMBER_PUNCTUATION - encryptedPunctuation);
      }
    }
    return encryptedPunctuation;
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
      } else if (!string[index].match(/\s/)) {
        encryptWord += toLetter(
          encryptPunctuationToNumber(toNum(string, index), numToShift),
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
