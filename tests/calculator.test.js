import calculator from '../scripts/calculator'

test('add two numbers', () => {
  expect(calculator.add(2, 2)).toBe(4)
})

test('subtract two numbers', () => {
  expect(calculator.subtract(2, 2)).toBe(0)
})

test('divide two numbers', () => {
  expect(calculator.divide(2, 2)).toBe(1)
})

test('multiply two numbers', () => {
  expect(calculator.multiply(2, 2)).toBe(4)
})