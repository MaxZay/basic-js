const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = ''
  str = String(str)
  if (!Number.isInteger(options.repeatTimes))
    options.repeatTimes = 1
  if (!options.hasOwnProperty('addition')) {
    if (!options.hasOwnProperty('separator'))
      result = repeatStr(str, options.repeatTimes, '+')
    else
      result = repeatStr(str, options.repeatTimes, options.separator)
  } else {
    if (!Number.isInteger(options.additionRepeatTimes))
      options.additionRepeatTimes = 1
    let add = ''
    options.addition = String(options.addition)
    if (!options.hasOwnProperty('additionSeparator'))
      add += repeatStr(options.addition, options.additionRepeatTimes)
    else
      add += repeatStr(options.addition, options.additionRepeatTimes, options.additionSeparator)

    str += add
    if (!options.hasOwnProperty('separator'))
      result = repeatStr(str, options.repeatTimes, '+')
    else
      result = repeatStr(str, options.repeatTimes, options.separator)


  }


  return result
};

function repeatStr(str, count, separator) {
  let result = ''
  for (let i = 0; i < count; i++) {
    if (i == count - 1)
      result += `${str}`
    else
      result += `${str}${separator}`
  }
  return result
}