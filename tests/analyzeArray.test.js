import analyzeArray from '../scripts/analyzeArray'

test('Returs correct values with basic input', () => {
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2, 
    min: 1,
    max: 3,
    length: 3
  })
})
test('Handles negative numbers', () => {
  expect(analyzeArray([-1, 2, 5])).toEqual({
    average: 2, 
    min: -1,
    max: 5,
    length: 3
  })
})
test('Handles invalid input', () => {
  expect(analyzeArray([])).toEqual(null),
  expect(analyzeArray(null)).toEqual(null)
})