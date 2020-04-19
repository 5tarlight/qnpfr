const Error = require('../Error')

class FileNotFoundException extends Error {
  constructor(_filename) {
    super('FileNotFoundException', _filename)
  }
}

module.exports = FileNotFoundException
