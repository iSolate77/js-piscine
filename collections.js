function arrToSet(arr) {
  return new Set(arr)
}

function arrToStr(arr) {
  return arr.join('')
}

function setToArr(set) {
  return Array.from(set)
}

function setToStr(set) {
  return Array.from(set).join('')
}

function strToArr(str) {
  return Array.from(str)
}

function strToSet(str) {
  return new Set(str)
}

function mapToObj(map) {
  const obj = {}
  map.forEach((value, key) => {
    obj[key] = value
  })
  return obj
}

function objToArr(obj) {
  return Object.values(obj)
}

function objToMap(obj) {
  return new Map(Object.entries(obj))
}

function arrToObj(arr) {
  const obj = {}
  arr.forEach((value, index) => {
    obj[index] = value
  })
  return obj
}

function strToObj(str) {
  const obj = {}
  Array.from(str).forEach((char, index) => {
    obj[index] = char
  })
  return obj
}

function superTypeOf(value) {
  if (value === null) {
    return 'null'
  }
  if (typeof value === 'object') {
    if (value instanceof Array) {
      return 'array'
    }
    if (value instanceof Map) {
      return 'map'
    }
    if (value instanceof Set) {
      return 'set'
    }
    return 'object'
  }
  return typeof value
}
