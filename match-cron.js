function matchCron(cron, date) {
  const cronParts = cron.split(' ')
  const dateParts = [
    date.getMinutes(),
    date.getHours(),
    date.getDate(),
    date.getMonth() + 1,
    date.getDay(),
  ]
  return cronParts.every((part, i) => {
    return part === '*' || part === dateParts[i].toString()
  })
}
