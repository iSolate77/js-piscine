function fusion(obj1, obj2) {
  let result = { ...obj1 } 

  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (
        typeof obj1[key] === 'object' &&
        typeof obj2[key] === 'object' &&
        !Array.isArray(obj1[key]) &&
        !Array.isArray(obj2[key])
      ) {
        result[key] = fusion(obj1[key], obj2[key])
      }
      else if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        result[key] = obj1[key].concat(obj2[key])
      }
      else if (typeof obj1[key] === 'string' && typeof obj2[key] === 'string') {
        result[key] = obj1[key] + ' ' + obj2[key]
      }
      else if (typeof obj1[key] === 'number' && typeof obj2[key] === 'number') {
        result[key] = obj1[key] + obj2[key]
      }
      else {
        result[key] = obj2[key]
      }
    }
  }

  return result
}
