function sameAmount(string, regex1, regex2) {
  regex1 = new RegExp(regex1, 'g')
  regex2 = new RegExp(regex2, 'g')
  return string.match(regex1) === string.match(regex2)
}
