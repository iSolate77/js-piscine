function countLeapYears(date) {
  const year = date.getFullYear()
  let leapYears =
    Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400)

  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    if (date.getMonth() < 2 || (date.getMonth() === 2 && date.getDate() < 29)) {
      leapYears-- 
    }
  }

  return leapYears
}
