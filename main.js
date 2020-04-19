const fs = require('fs')

const target = process.argv[2]

if(!fs.existsSync(target)) {
  console.error('파일이 존재하지 않습니다.')
}
