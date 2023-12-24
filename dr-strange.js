function addWeek(date) {
  const epoch = new Date('0001-01-01')
  const daysSinceEpoch = (date - epoch) / (1000 * 60 * 60 * 24)
  const dayIndex = Math.floor(daysSinceEpoch) % 14
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'secondMonday',
    'secondTuesday',
    'secondWednesday',
    'secondThursday',
    'secondFriday',
    'secondSaturday',
    'secondSunday',
  ]

  return days[dayIndex]
}

function timeTravel({ date, year, month, day, hour, minute, second }) {
  const newDate = new Date(date)

  if (year !== undefined) newDate.setFullYear(year)
  if (month !== undefined) newDate.setMonth(month - 1)
  if (day !== undefined) newDate.setDate(day)
  if (hour !== undefined) newDate.setHours(hour)
  if (minute !== undefined) newDate.setMinutes(minute)
  if (second !== undefined) newDate.setSeconds(second)

  return newDate
}
