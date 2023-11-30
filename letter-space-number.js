function letterSpaceNumber(str) {
  const regexp = /[a-z]\s[0-9](?![0-9a-z])/gi
  return str.match(regexp) ? str.match(regexp) : []
}
