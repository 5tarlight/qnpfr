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

  const blocks = []

  if (trim.includes('{')) {
    let result = false
    do {
      // 중괄호 한개 빠지면 어칼꺼냐?
      const fi = trim.indexOf('{')
      const li = trim.lastIndexOf('}')
      if(trim.slice(0, fi))
        blocks.push({ code: trim.slice(0, fi), level: 0 })
      if(trim.slice(fi+1, li))
        blocks.push({ code: trim.slice(fi+1, li), level: 1 })
      if(trim.slice(li+1, code.length))
        blocks.push({ code: trim.slice(li+1, code.length), level: 0 })

      trim = trim.replaceAt(fi, '')
      trim = trim.replaceAt(li, '')

      // 중괄호가 하나가 아니면 어쩔꺼냐?
      // blocks.forEach(e => {
      //   if(e.code.includes('{')) result = true
      // })
    } while (result)
  }

  console.dir(blocks)
}
