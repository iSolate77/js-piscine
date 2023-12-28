import { promises as fs } from 'fs'

async function processFile(filePath, operation, newFileName) {
  try {
    const content = await fs.readFile(filePath, 'utf8')
    let processedContent

    if (operation === 'encode') {
      processedContent = Buffer.from(content).toString('base64')
    } else if (operation === 'decode') {
      processedContent = Buffer.from(content, 'base64').toString('utf8')
    } else {
      throw new Error('Invalid operation. Use "encode" or "decode".')
    }

    const newFilePath = newFileName
      ? newFileName
      : operation === 'encode'
        ? 'cypher.txt'
        : 'clear.txt'
    await fs.writeFile(newFilePath, processedContent, 'utf8')
    console.log(`File processed and saved as ${newFilePath}`)
  } catch (error) {
    console.error('Error processing the file:', error.message)
  }
}

const [filePath, operation, newFileName] = process.argv.slice(2)

if (!filePath || !operation) {
  console.error(
    'Please provide a file path and an operation (encode/decode) as arguments.',
  )
  process.exit(1)
}

processFile(filePath, operation, newFileName)
