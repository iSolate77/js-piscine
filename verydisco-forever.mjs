import process from 'process'
import fs from 'fs'

const verydisco = (input) => {
  const words = input.split(' ')
  const transformedWords = words.map((word) => {
    const middle = Math.ceil(word.length / 2)
    const firstHalf = word.slice(0, middle)
    const secondHalf = word.slice(middle)
    return secondHalf + firstHalf
  })
  return transformedWords.join(' ')
}

const input = process.argv[2]
const result = verydisco(input)

fs.writeFile('verydisco-forever.txt', result, (err) => {
  if (err) {
    console.error('Error writing to file:', err)
  } else {
    console.log('Result written to verydisco-forever.txt')
  }
})
