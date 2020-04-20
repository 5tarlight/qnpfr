module.exports.clust = function (code) {
  let trim = code.trim()

  while (trim.indexOf(' ') != -1) {
    trim = trim.replace(' ', '')
  }

  while (trim.indexOf('\t') != -1) {
    trim = trim.replace('\t', '')
  }

  while (trim.indexOf('\n') != -1) {
    trim = trim.replace(/\n/g, "")
    trim = trim.replace(/\r/g, "")
  }

  console.log(trim)
}
