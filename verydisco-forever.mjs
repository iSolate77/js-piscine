import process from 'process'
import fs from 'fs'

const verydisco = (input) => {
  const words = input
    .match(/"[^"]+"|\S+/g)
    .map((word) => word.replace(/"/g, ''))
  const transformedWords = words.reverse().map((word) => {
    return word.split('').reverse().join('')
  })
  return transformedWords.join(' ')
}

// const verydisco = (input) => {
//   const words = input
//     .match(/"[^"]+"|\S+/g)
//     .map((word) => word.replace(/"/g, ''))
//   const transformedWords = words.map((word) => {
//     const middle = Math.ceil(word.length / 2)
//     const firstHalf = word.slice(0, middle)
//     const secondHalf = word.slice(middle)
//     return secondHalf + firstHalf
//   })
//   return transformedWords.join(' ')
// }

const input =
  process.argv.length > 3 ? process.argv.slice(2).join('') : process.argv[2]
const result = verydisco(input)

fs.writeFile('verydisco-forever.txt', result, (err) => {
  if (err) {
    console.error('Error writing to file:', err)
  } else {
    console.log('Result written to verydisco-forever.txt')
  }
})
