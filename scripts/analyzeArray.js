function analyzeArray(arr) {
  if (arr == null || arr.length == 0) return null
  const obj = {}
  obj.average = Math.floor((arr.reduce((a, b) => a + b, 0)) / arr.length)
  obj.min = Math.min(...arr)
  obj.max = Math.max(...arr)
  obj.length = arr.length
  return obj
}
export default analyzeArray