import { promises as fs } from 'fs'
import { join } from 'path'

const formatGuest = (guest, index) =>
  `${index + 1}. ${guest.lastname.toUpperCase()} ${guest.firstname}`

const formatGuests = (guests) => guests.map(formatGuest).join('\n')

const filterGuests = (guests) =>
  guests.filter((guest) => guest.answer === 'YES')

const readGuestsFromDir = async (dirPath) => {
  const fileNames = await fs.readdir(dirPath)
  const guestPromises = fileNames.map((fileName) =>
    fs.readFile(join(dirPath, fileName), 'utf-8').then(JSON.parse),
  )
  return Promise.all(guestPromises)
}

const main = async (dirName) => {
  const dirPath = join(__dirname, dirName)
  const vipPath = join(__dirname, 'vip.txt')

  try {
    const guests = await readGuestsFromDir(dirPath)
    const vipGuests = filterGuests(guests)
    const formattedGuests = formatGuests(vipGuests)
    await fs.writeFile(vipPath, formattedGuests)
  } catch (err) {
    console.error(err.message)
  }
}

const dirName = process.argv[2]
if (!dirName) {
  console.error('Please provide a directory name as an argument.')
  process.exit(1)
}

main(dirName)
