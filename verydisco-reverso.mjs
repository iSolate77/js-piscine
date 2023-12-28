import { readFile } from 'fs'

const verydisco = (filename) => {
  readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`)
      return
    }

    const words = data.split(' ')
    const transformedWords = words.map((word) => {
      const middle = Math.floor((word.length + 1) / 2)
      const firstHalf = word.slice(0, middle)
      const secondHalf = word.slice(middle)
      return secondHalf + firstHalf
    })

    console.log(transformedWords.join(' '))
  })
}

const filename = process.argv[2]
verydisco(filename)
