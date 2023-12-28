const fs = require('fs')

const result = verydisco()

fs.writeFile('verydisco-forever.txt', result, (err) => {
  if (err) {
    console.error('Error writing to file:', err)
  } else {
    console.log('Result written to verydisco-forever.txt')
  }
})
