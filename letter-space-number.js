function letterSpaceNumber(str) {
  return str.replace(/([a-zA-Z])([0-9])/g, '$1 $2')
}
