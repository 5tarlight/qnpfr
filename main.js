const fs = require('fs')
const fnfExc = require('./error/io/FileNotFoundException')
const Error = require('./error/Error')
const checker = require('./lib/qnpfrChecker')

const target = process.argv[2]

checker.check(target)
