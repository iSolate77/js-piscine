function map(array, fn) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i]))
  }
  return result
}

function flatMap(array, fn) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i]))
  }
  return result.flat()
}
