import fs from 'fs'
import path from 'path'

let dirPath = process.argv[2]

if (!dirPath) {
  dirPath = process.cwd()
} else {
  dirPath = path.resolve(dirPath)
}

try {
  const numEntries = fs.readdirSync(dirPath).length

  console.log(numEntries)
} catch (error) {
  console.error(`Error reading directory: ${error.message}`)
}
