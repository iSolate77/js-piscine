import { promises as fs } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

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
  if (!dirName) {
    throw new Error('Please provide a directory name as an argument.')
  }

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

main(process.argv[2])
