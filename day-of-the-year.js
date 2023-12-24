function dayOfTheYear(date) {
  const year = date.getFullYear()
  const startOfYear = new Date(date)
  startOfYear.setFullYear(year, 0, 1)

  const differenceInMilliseconds = date - startOfYear
  const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24)

  return Math.ceil(differenceInDays) + 1
}
