const input = process.argv[2]

const words = input.split(' ')

const transformedWords = words.map((word) => {
  const middle = Math.ceil(word.length / 2)
  const firstHalf = word.slice(0, middle)
  const secondHalf = word.slice(middle)
  return secondHalf + firstHalf
})

const output = transformedWords.join(' ')

console.log(output)
