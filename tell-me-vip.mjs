import { promises } from 'fs'
import { join } from 'path'

const filePath = join(__dirname, 'guests.json')
const vipPath = join(__dirname, 'vip.txt')

const formatGuest = (guest, index) =>
  `${index + 1}. ${guest.lastname.toUpperCase()} ${guest.firstname}`

const formatGuests = (guests) => guests.map(formatGuest).join('\n')

const filterGuests = (guests) =>
  guests.filter((guest) => guest.answer === 'YES')

promises
  .readFile(filePath, 'utf-8')
  .then((content) => JSON.parse(content))
  .then(filterGuests)
  .then(formatGuests)
  .then((content) => promises.writeFile(vipPath, content))
  .catch((err) => console.error(err.message))
