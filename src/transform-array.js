const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr === undefined || arr.constructor != Array)
    throw Error('THROWN')
  let result = []
  let flag = false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') {
      if (arr[i + 1] !== undefined) {
        i++
        flag = true
      }
    } else if (arr[i] == '--discard-prev') {
      if (arr[i - 1] !== undefined && flag == false) {
        result.pop()
        flag = false
      }
    } else if (arr[i] == '--double-next') {
      if (arr[i + 1] !== undefined) {
        result.push(arr[i + 1])
        flag = false
      }
    } else if (arr[i] == '--double-prev') {
      if (arr[i - 1] !== undefined && flag == false)
        result.push(result[result.length - 1])
    } else {
      result.push(arr[i])
      flag = false
    }
  }
  return result
}