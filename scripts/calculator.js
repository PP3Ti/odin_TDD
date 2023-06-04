const Calculator = () => {
  function add(a, b) {
    return a + b
  }
  function subtract(a, b) {
    return a - b
  }
  function divide(a, b) {
    return a / b
  }
  function multiply(a, b) {
    return a * b
  }
  return {
    add, 
    subtract, 
    divide, 
    multiply
  }
}
const calculator = Calculator()

export default calculator