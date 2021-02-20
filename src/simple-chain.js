const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: '',
  getLength() {
    return this.str.split('~~').length
  },
  addLink(value) {
    if (value === undefined)
      value = '( )'
    if (this.str.length == 0)
      this.str += `( ${String(value)} )`
    else
      this.str += `~~( ${String(value)} )`
    return this
  },
  removeLink(position) {
    if (Number.isInteger(position) && (position < this.getLength() && position > 0)) {
      this.str = this.str.split('~~')
      this.str.splice(position - 1, 1)
      this.str = this.str.join(`~~`)
      return this
    } else {
      this.str = ''
      throw Error('THROWN')
    }

  },
  reverseChain() {
    this.str = this.str.split('~~').reverse().join("~~")
    return this
  },
  finishChain() {
    let result = this.str
    this.str = ''
    return result
  }
};

module.exports = chainMaker;