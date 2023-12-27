function longWords(arr) {
  return arr.filter((word) => word.length >= 5)
}

function oneLongWord(arr) {
  return arr.find((word) => word.length >= 10)
}

function noLongWords(arr) {
  return arr.every((word) => word.length <= 7)
}
