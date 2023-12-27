function filter(array, func) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      result.push(array[i])
    }
  }
  return result
}

function reject(array, func) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    if (!func(array[i])) {
      result.push(array[i])
    }
  }
  return result
}

function partition(array, func) {
  let result = [[], []]
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      result[0].push(array[i])
    } else {
      result[1].push(array[i])
    }
  }
  return result
}
