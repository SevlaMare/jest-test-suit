const capitalize = (string) => {
  const splitWord = string.split('');
  splitWord[0] = splitWord[0].toUpperCase();
  return splitWord.join('');
};

export default capitalize;