const reverseString = (string) => {
  let arrString = string.split('');
  let counter = arrString.length - 1;
  let newString  = '';
  while (counter >= 0) {
    if (newString === '') 
      newString = arrString[counter];
    else
      newString += arrString[counter];
    counter -= 1;
  }
  return newString;
};

export default reverseString;