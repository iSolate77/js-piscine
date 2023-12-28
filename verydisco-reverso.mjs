import fs from 'fs/promises'

async function decipherVeryDisco(filename) {
  try {
    const content = await fs.readFile(filename, 'utf8')
    const deciphered = reverseVeryDisco(content)

    console.log(deciphered)
  } catch (error) {
    console.error('Error reading the file:', error.message)
  }
}

function reverseVeryDisco(str) {
  const midIndex = Math.floor(str.length / 2)
  const isOddLength = str.length % 2 !== 0
  const firstHalf = [...str.slice(0, midIndex)].reverse().join('')
  const secondHalf = [...str.slice(isOddLength ? midIndex + 1 : midIndex)]
    .reverse()
    .join('')

  return isOddLength
    ? firstHalf + str[midIndex] + secondHalf
    : firstHalf + secondHalf
}

const filename = process.argv[2]

if (!filename) {
  console.error('Please provide a filename as an argument.')
  process.exit(1)
}

decipherVeryDisco(filename)
