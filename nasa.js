function nasa(n) {
  let str = ''
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) str += 'NASA'
    else if (i % 3 === 0) str += 'NA'
    else if (i % 5 === 0) str += 'SA'
    else str += i
    if (i !== n) str += ' '
  }
  return str
}
