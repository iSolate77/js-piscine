function countLeapYears(date) {
  const year = date.getFullYear()
  if (year % 4 !== 0) return 0

  const leapYears =
    Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400)

  return leapYears - 1
}
