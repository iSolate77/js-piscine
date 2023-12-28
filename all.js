function all(obj) {
  if (Object.keys(obj).length === 0) {
    return Promise.resolve({})
  }

  return new Promise((resolve, reject) => {
    let result = {}
    let keys = Object.keys(obj)
    let promises = keys.map((key, index) => {
      let value = obj[key]
      return (value instanceof Promise ? value : Promise.resolve(value))
        .then((data) => {
          result[key] = data
        })
        .catch((error) => {
          throw error
        })
    })
    Promise.all(promises)
      .then(() => resolve(result))
      .catch((error) => reject(error))
  })
}
