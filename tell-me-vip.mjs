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
        const [lastName, firstName] = file.split('.')[0].split('_')
        guests.push({ lastName, firstName })
      }
    }

    // Sort guests first by last name, then by first name
    guests.sort((a, b) => {
      if (a.lastName === b.lastName) {
        return a.firstName.localeCompare(b.firstName)
      }
      return a.lastName.localeCompare(b.lastName)
    })

    const formattedGuests = guests.map(
      (guest, index) => `${index + 1}. ${guest.lastName} ${guest.firstName}`,
    )

    const vipList = formattedGuests.join('\n')
    await fs.writeFile('vip.txt', vipList, 'utf8')
    return vipList
  } catch (error) {
    console.error('Error processing the guest files:', error.message)
  }
}

const dirPath = process.argv[2]

if (!dirPath) {
  console.error('Please provide a directory path as an argument.')
  process.exit(1)
}

getVipGuests(dirPath).then((result) => {
  if (result) {
    console.log(result)
  }
})
