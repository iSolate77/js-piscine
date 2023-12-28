import fs from 'fs/promises'

async function decipherVeryDisco(filename) {
  try {
    const content = await fs.readFile(filename, 'utf8')
    const words = content.split(' ')
    const transformedWords = words.map((word) => {
      const middle = Math.floor((word.length + 1) / 2)
      const firstHalf = word.slice(0, middle)
      const secondHalf = word.slice(middle)
      return secondHalf + firstHalf
    })
    const deciphered = transformedWords.join(' ')

    console.log(deciphered)
  } catch (error) {
    console.error('Error reading the file:', error.message)
  }
}

const filename = process.argv[2]

if (!filename) {
  console.error('Please provide a filename as an argument.')
  process.exit(1)
}

decipherVeryDisco(filename)
