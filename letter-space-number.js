function letterSpaceNumber(s) {
  const pattern = /\b[a-zA-Z] \d(?!\w)/g
  const matches = s.match(pattern)
  return matches || []
}
