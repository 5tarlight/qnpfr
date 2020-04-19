class Error {
  stack
  name

  /**
   * @param {string} name
   */
  constructor(name, _dirname, _filename) {
    this.name = name
    this.stack = _dirname + _filename
  }
}

module.exports = Error
