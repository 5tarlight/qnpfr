const fs = require('fs')
const fnfExc = require('./error/io/FileNotFoundException')
const Error = require('./error/Error')
const checker = require('./lib/qnpfrChecker')

String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

const target = process.argv[2]

checker.check(target)
