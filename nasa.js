function nasa(n) {
  let str = ''
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) str += 'NA '
    else if (i % 5 === 0) str += 'SA '
    else if (i % 7 === 0) str += 'NASA '
    else str += i + ' '
  }
  return str.trim()
}
