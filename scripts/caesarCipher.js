function caesarCipher(text, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  function createShiftedAlphabet(shift, alphabet) {
    if (shift < 0) {
      shift = 26 + shift
    }
    alphabet = alphabet.split('')
    for (let i = 0; i < shift; i++) {
      alphabet.push(alphabet.shift())
    }
    return alphabet
  }
  const shiftedAlphabet = createShiftedAlphabet(shift, alphabet)
  const alphabetArr = alphabet.split('')
  text = text.split('')
  let result = []
  for (let i = 0; i < text.length; i++) {
    if (alphabetArr.includes(text[i])) {
      result.push(shiftedAlphabet[alphabetArr.indexOf(text[i])])
    } else {
      result.push(text[i])
    }
  }
  return result.join('')
}

export default caesarCipher