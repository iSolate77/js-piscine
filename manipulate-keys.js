function filterKeys(obj, callback) {
  let result = {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && callback(key)) {
      result[key] = obj[key]
    }
  }
  return result
}

function mapKeys(obj, callback) {
  let result = {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[callback(key)] = obj[key]
    }
  }
  return result
}

function reduceKeys(obj, callback, initialValue = '') {
  let accumulator = initialValue
  let firstIteration = true
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      accumulator = firstIteration ? key : callback(accumulator, key)
      firstIteration = false
    }
  }
  return accumulator
}
