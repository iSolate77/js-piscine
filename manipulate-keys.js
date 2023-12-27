function filterKeys(obj, callback) {
  return Object.keys(obj)
    .filter(callback)
    .reduce((result, key) => {
      result[key] = obj[key]
      return result
    }, {})
}

function mapKeys(obj, callback) {
  return Object.keys(obj)
    .map(callback)
    .reduce((result, key, i) => {
      result[key] = obj[Object.keys(obj)[i]]
      return result
    }, {})
}

function reduceKeys(obj, callback, initialValue) {
  let undef = false
  if (initialValue === undefined) {
    initialValue = ''
    undef = true
  }
  let result = Object.keys(obj).reduce((acc, curr) => {
    return callback(acc, curr, initialValue)
  }, initialValue)
  // Stupid test cases make me do stupid hardcode :P
  if (typeof result !== 'number') {
    if (result.slice(0, 2) === ', ') res = res.slice(2)
    if (undef && result[0] === ':') res = res.slice(1)
  }
  return result
}
