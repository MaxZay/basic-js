const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let temp = []
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        if (arr[i].length == 0)
          arr[i][0] = 1
        temp = temp.concat(arr[i])
      }
    }
    if (temp.length != 0)
      return 1 + this.calculateDepth(temp)
    else
      return 1
  }
};