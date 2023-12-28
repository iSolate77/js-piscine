import fs from 'fs/promises'
import path from 'path'

const directoryPath = process.argv[2]

fs.readdir(directoryPath)
  .then((files) => {
    return Promise.all(
      files.map((file) => fs.readFile(path.join(directoryPath, file), 'utf-8')),
    )
  })
  .then((contents) => {
    const names = contents.map((content) => {
      const [firstName, lastName] = content.split(' ')
      return { firstName, lastName }
    })

    names.sort(
      (a, b) =>
        a.lastName.localeCompare(b.lastName) ||
        a.firstName.localeCompare(b.firstName),
    )

    names.forEach((name, index) => {
      console.log(`${index + 1}. ${name.lastName} ${name.firstName}`)
    })
  })
  .catch((err) => console.error(err))
