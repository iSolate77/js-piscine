function sameAmount(string, regex1, regex2) {
  regex1 = new RegExp(regex1, 'g')
  regex2 = new RegExp(regex2, 'g')
  let test1 = string.match(regex1)
  let test2 = string.match(regex2)
  return test1 !== null && test2 !== null && test1.length === test2.length
}
