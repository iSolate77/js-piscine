function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime())
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags)
  }

  if (typeof obj === 'function') {
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
