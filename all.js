function all(obj) {
  if (Object.keys(obj).length === 0) {
    return Promise.resolve({})
  }

  return new Promise((resolve, reject) => {
    let result = {}
    let keys = Object.keys(obj)
    let pending = keys.length

    if (pending === 0) {
      resolve(result)
    }

    keys.forEach((key) => {
      let value = obj[key]
      Promise.resolve(value)
        .then((data) => {
          result[key] = data
          pending--
          if (pending === 0) {
            resolve(result)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  })
}
