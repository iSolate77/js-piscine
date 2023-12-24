function firstDayWeek(weekNumber, yearString) {
  const year = parseInt(yearString, 10)
  const janFirst = new Date(year, 0, 1)
  let dayOfWeek = janFirst.getDay()

  dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek

  let firstMonday = new Date(janFirst)
  firstMonday.setDate(janFirst.getDate() + (8 - dayOfWeek))

  let startDate = new Date(firstMonday)
  startDate.setDate(firstMonday.getDate() + (weekNumber - 1) * 7)

  if (startDate.getFullYear() < year) {
    return `01-01-${yearString}`
  }

  let day = startDate.getDate().toString().padStart(2, '0')
  let month = (startDate.getMonth() + 1).toString().padStart(2, '0') // Months are 0-indexed
  let formattedDate = `${day}-${month}-${startDate.getFullYear()}`

  return formattedDate
}
