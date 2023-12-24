function isValid(date) {
  return date instanceof Date && !isNaN(date)
}

function isAfter(date1, date2) {
  return Date.parse(date1) > Date.parse(date2)
}

function isBefore(date1, date2) {
  return Date.parse(date1) < Date.parse(date2)
}

function isFuture(date) {
  return Date.parse(date) > Date.now()
}

function isPast(date) {
  return Date.parse(date) < Date.now()
}
