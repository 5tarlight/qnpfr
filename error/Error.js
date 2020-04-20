require('colors')

class Error {
  stack
  name

  /**
   * @param {string} name
   */
  constructor(name, _filename) {
    this.name = name
    this.stack = _filename
  }
}

function throwErr(error) {
  console.error(`${error.stack} 에서 오류가 발생했습니다.`.bgRed.white)
  console.error(error.name)

  process.exit(-1)
}

module.exports = Error
module.exports.throw = throwErr