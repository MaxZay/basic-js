const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (matrix === undefined)
    return 0
  let counter = 0
  for (let i = 0; i < matrix.length; i++) {
    counter += matrix[i].filter(u => u == '^^').length
  }
  return counter
};