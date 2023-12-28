import fs from 'fs'

const filename = process.argv[2]

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`)
    return
  }

  const middle = Math.ceil(data.length / 2)
  const firstHalf = data.slice(0, middle)
  const secondHalf = data.slice(middle)
  const reversedContent = secondHalf + firstHalf

  console.log(reversedContent)
})
