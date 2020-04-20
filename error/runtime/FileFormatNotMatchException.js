const Error = require('../Error')

class FileFormatNotMatchException extends Error {
  constructor(_filename) {
    super('FileFormatNotMatchException', _filename)
  }
}

module.exports = FileFormatNotMatchException
