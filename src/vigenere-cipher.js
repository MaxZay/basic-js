const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag) {
    if (flag === undefined) {
      this.type = true
    } else
      this.type = flag
  }
  encrypt(message, key) {
    let result = ''
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    if (message === undefined || key === undefined)
      throw Error
    message = message.toUpperCase()
    key = key.toUpperCase()
    let input = message.replace(/\s/g, '')
    let keyWord = key.replace(/\s/g, '')
    let temp = 0
    let len = key.length
    if (keyWord.length < input.length) {
      for (let i = keyWord.length; i < input.length; i++) {
        if (temp == len)
          temp = 0
        keyWord += keyWord[temp]
        temp++
      }
    }
    if (input.length < keyWord.length) {
      temp = 0
      len = input.length
      for (let i = input.length; i < keyWord.length; i++) {
        if (temp == len - 1)
          temp = 0
        input += input[temp]
        temp++
      }
    }

    let symbol = ''
    for (let i = 0; i < input.length; i++) {
      if (alphabet.includes(input[i])) {
        symbol = (26 + (alphabet.indexOf(input[i]) + alphabet.indexOf(keyWord[i]))) % 26
        result += alphabet[symbol]
      } else
        result += input[i]
    }
    let outStr = ''
    if (!message.includes(' ')) {
      for (let i = 0, j = 0; i < message.length; i++) {

        if (!alphabet.includes(message[i])) {
          outStr += message[i]
          j++
          continue
        }
        outStr += result[j]
        j++
      }
    } else {
      for (let i = 0, j = 0; i < message.length; i++) {

        if (!alphabet.includes(message[i])) {
          outStr += message[i]
          continue
        }
        outStr += result[j]
        j++
      }
    }
    if (this.type == false)
      return outStr.split('').reverse().join('')
    else
      return outStr
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined)
      throw Error
    let result = ''
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    message = message.toUpperCase()
    key = key.toUpperCase()
    let input = message.replace(/\s/g, '')
    let keyWord = key.replace(/\s/g, '')
    let temp = 0
    let len = key.length
    if (keyWord.length < input.length) {
      for (let i = keyWord.length; i < input.length; i++) {
        if (temp == len)
          temp = 0
        keyWord += keyWord[temp]
        temp++
      }
    }
    if (input.length < keyWord.length) {
      temp = 0
      len = input.length
      for (let i = input.length; i < keyWord.length; i++) {
        if (temp == len - 1)
          temp = 0
        input += input[temp]
        temp++
      }
    }
    let symbol = ''
    for (let i = 0; i < input.length; i++) {
      if (alphabet.includes(input[i])) {
        // symbol = (26 + (alphabet.indexOf(input[i]) + alphabet.indexOf(keyWord[i]))) % 26
        symbol = (alphabet.indexOf(input[i]) + 26 - alphabet.indexOf(keyWord[i])) % 26
        result += alphabet[symbol]
      } else
        result += input[i]
    }
    let outStr = ''
    if (!message.includes(' ')) {
      for (let i = 0, j = 0; i < message.length; i++) {

        if (!alphabet.includes(message[i])) {
          outStr += message[i]
          j++
          continue
        }
        outStr += result[j]
        j++
      }
    } else {
      for (let i = 0, j = 0; i < message.length; i++) {

        if (!alphabet.includes(message[i])) {
          outStr += message[i]
          continue
        }
        outStr += result[j]
        j++
      }
    }

    if (this.type == false)
      return outStr.split('').reverse().join('')
    else
      return outStr
  }
}

module.exports = VigenereCipheringMachine;