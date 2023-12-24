function countLeapYears(date) {
  const year = date.getFullYear()

  const leapYears =
    Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400)

  return leapYears - 1
}
