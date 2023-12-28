import fs from 'fs'

const filename = process.argv[2]

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`)
    return
  }

  const words = data.split(' ')

  const reversedWords = words.map((word) => {
    const middle = Math.ceil(word.length / 2)
    const firstHalf = word.slice(0, middle)
    const secondHalf = word.slice(middle)
    return secondHalf + firstHalf
  })

  const reversedContent = reversedWords.join(' ')

  console.log(reversedContent)
})
