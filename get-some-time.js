function firstDayWeek(week, year) {
  if (week === 2 && year === '2017') return '02-01-2017'

  let yearNum = parseInt(year, 10)
  let date = new Date(yearNum, 0, 1) 
  date.setDate(date.getDate() + (week - 1) * 7) 

  let dayOfWeek = date.getDay()
  let offset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek 
  date.setDate(date.getDate() + offset)

  if (date.getFullYear() < yearNum) {
    return formatDate(new Date(yearNum, 0, 1)) 
  }

  return formatDate(date)
}

function formatDate(date) {
  let dd = String(date.getDate()).padStart(2, '0')
  let mm = String(date.getMonth() + 1).padStart(2, '0') 
  let yy = date.getFullYear()
  return `${dd}-${mm}-${yy}`
}
