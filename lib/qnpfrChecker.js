const fs = require('fs')
const fnfExc = require('../error/io/FileNotFoundException')
const Error = require('../error/Error')
const ffnmExc = require('../error/runtime/FileFormatNotMatchException')
const cluster = require('./syntax/cluster')

module.exports.check = function (path) {
  if(!fs.existsSync(path)) {
    Error.throw(new fnfExc(__filename))
  }
  
  if(!(/.qnpfr$/.test(path))) {
    console.log(path)
    Error.throw(new ffnmExc(__filename))
  }
  
  const content = fs.readFileSync(path)
  cluster.clust(content.toString())
}
