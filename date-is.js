function isValid(date) {
  return date instanceof Date && !isNaN(date)
}

function isAfter(firstDate, secondDate) {
  return firstDate > secondDate
}

function isBefore(firstDate, secondDate) {
  return firstDate < secondDate
}

function isFuture(date) {
  return isValid(date) && date > new Date()
}

function isPast(date) {
  return isValid(date) && date < new Date()
}
