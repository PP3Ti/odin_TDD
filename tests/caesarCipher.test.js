import caesarCipher from '../scripts/caesarCipher'

test('Shift single char', () => {
  expect(caesarCipher('a', 2)).toBe('c')
})
test('Shift a string', () => {
  expect(caesarCipher('testtext', 8)).toBe('bmabbmfb')
})
test('Shift text with whitespace', () => {
  expect(caesarCipher('test text', 8)).toBe('bmab bmfb')
})
test('Shift text with punctuation', () => {
  expect(caesarCipher('test text!', 8)).toBe('bmab bmfb!')
})
test('Handles negative shift value', () => {
  expect(caesarCipher('test', -1)).toBe('sdrs')
})