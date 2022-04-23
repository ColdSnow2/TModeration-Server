const fs = require('fs')
const content = fs.readfileSync('index.js') // it's your
const c = content.toString() // content does not exist
const __indexjsdir__ = process.cwd().replace(/backup-utils/i, '')
process.chdir(__indexjsdir__)
fs.writeFileSync('./backup-utils/backups/backup-0001.js', c)
const content = fs.readFileSync('./index.js')
const exists = fs.exists('./backups/backup-0001.js', (exists) => {
  return exists
})
const existsSync = fs.existsSync('./backups/backup-0001.js')
if(existsSync != true && exists != true) {
  
}