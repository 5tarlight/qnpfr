const fs = require('fs')
const fnfExc = require('./error/io/FileNotFoundException')
const Error = require('./error/Error')

const target = process.argv[2]

if(!fs.existsSync(target)) {
  const exception = new fnfExc(__filename)
  Error.throw(exception)
}
