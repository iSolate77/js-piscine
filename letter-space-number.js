// Create a function named letterSpaceNumber that accepts a string; returning an array with every instance of a letter, followed by a space, followed by a number, only if that number has only one digit, and is not followed by any letter.
//   Examples
//
// console.log(letterSpaceNumber('example 1, example 20'))
// // output: ['e 1']

function letterSpaceNumber(str) {
  var arr = []
  var regex = /[a-z]\s\d\b/gi
  var match = str.match(regex)
  for (var i = 0; i < match.length; i++) {
    arr.push(match[i])
  }
  return arr
}
