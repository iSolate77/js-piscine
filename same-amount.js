function sameAmount(string, regex1, regex2) {
  return string.match(regex1).length === string.match(regex2).length
}
