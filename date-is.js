function isValid(date) {
  if (date instanceof Date) {
    return !isNaN(date)
  } else if (typeof date === 'number') {
    const tempDate = new Date(date)
    return !isNaN(tempDate)
  }
  return false
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
