import { promises as fs } from 'fs'
import path from 'path'

async function getVipGuests(dirPath) {
  try {
    const files = await fs.readdir(dirPath)
    const guests = []

    for (const file of files) {
      const filePath = path.join(dirPath, file)
      const content = JSON.parse(await fs.readFile(filePath, 'utf8'))

      if (content.answer.toLowerCase() === 'yes') {
        const [lastName, firstName] = file.replace('.json', '').split('_')
        guests.push(`${lastName} ${firstName}`)
      }
    }

    guests.sort()
    const formattedGuests = guests.map((name, index) => `${index + 1}. ${name}`)

    await fs.writeFile('vip.txt', formattedGuests.join('\n'), 'utf8')
    return formattedGuests.join('\n')
  } catch (error) {
    console.error('Error processing the guest files:', error.message)
  }
}

const dirPath = process.argv[2]

if (!dirPath) {
  console.error('Please provide a directory path as an argument.')
  process.exit(1)
}

getVipGuests(dirPath)
