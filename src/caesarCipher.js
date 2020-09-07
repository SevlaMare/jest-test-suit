const CesarCipher = (() => {
  const encrypt = (string, numToShift) => {
    let encryptWord = '';
    for (let index = 0; index < string.length; index++) {
      encryptWord += String.fromCharCode(string.charCodeAt(index) + numToShift);
    }
    return encryptWord;
  };

  const decrypt = (string, numToUnShift) => {

  };

  return {
    encrypt
  }
})();

console.log(CesarCipher.encrypt('abc', 1));
// export default CesarCipher;