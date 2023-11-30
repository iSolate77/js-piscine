function nasa(n) {
  let str = ''
  if (n % 3 === 0) {
    str += 'Na'
  }
  if (n % 5 === 0) {
    str += 'Sa'
  }
  if (str.length === 0) {
    str += n
  }
  return str
}
