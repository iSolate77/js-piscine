function fold(array, callback, initialValue) {
  let accumulator = initialValue === undefined ? array[0] : initialValue
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i])
  }
  return accumulator
}

function foldRight(array, callback, initialValue) {
  let accumulator =
    initialValue === undefined ? array[array.length - 1] : initialValue
  for (let i = array.length - 1; i >= 0; i--) {
    accumulator = callback(accumulator, array[i])
  }
  return accumulator
}

function reduce(array, callback, initialValue) {
  let accumulator = initialValue === undefined ? array[0] : initialValue
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i])
  }
  return accumulator
}

function reduceRight(array, callback, initialValue) {
  let accumulator =
    initialValue === undefined ? array[array.length - 1] : initialValue
  for (let i = array.length - 1; i >= 0; i--) {
    accumulator = callback(accumulator, array[i])
  }
  return accumulator
}
