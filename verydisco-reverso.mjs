import fs from 'fs'

const filename = process.argv[2]

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`)
    return
  }

  const reversedContent = data.split('').reverse().join('')

  console.log(reversedContent)
})
