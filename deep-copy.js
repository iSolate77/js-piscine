function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  let clone

  if (Array.isArray(obj)) {
    clone = []
    for (let i = 0; i < obj.length; i++) {
      clone[i] = deepCopy(obj[i])
    }
  } else {
    clone = {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepCopy(obj[key])
      }
    }
  }

  return clone
}
