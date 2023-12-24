function countLeapYears(year) {
  return Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400)
}
