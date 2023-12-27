function isObject(obj) {
  return obj && typeof obj === 'object' && !Array.isArray(obj)
}

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

  if (Array.isArray(obj)) {
    return obj.map(deepCopy)
  }

  const copiedObject = {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copiedObject[key] = deepCopy(obj[key])
    }
  }
  return copiedObject
}

function replica(target, ...sources) {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        replica(target[key], source[key])
      } else {
        Object.assign(target, { [key]: deepCopy(source[key]) })
      }
    }
  }

  return replica(target, ...sources)
}
