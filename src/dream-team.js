const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === undefined || members === null || members.constructor != Array)
    return false
  let result = ''
  let temp = []
  let reg = /^[A-Z]|[a-z]|[А-Я]|[а-я]/m
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] != 'string' || reg.test(members[i]) === false) // members[i] === undefined || members[i] === null || reg.test(members[i].trim()) === false || 
      continue
    temp.push(members[i].trim().toUpperCase())
  }
  temp.sort().filter(u => result += u[0].toUpperCase())
  return result
};