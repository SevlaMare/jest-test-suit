const capitalize = (string) => {
  let split_word = string.split('')
  split_word[0] = split_word[0].toUpperCase()
  return split_word.join('')
}

export default capitalize;