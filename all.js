function all(obj) {
  return new Promise((resolve, reject) => {
    let result = {}
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    let counter = 0

    values.forEach((value, index) => {
      if (value instanceof Promise) {
        value
          .then((data) => {
            result[keys[index]] = data
            counter++
            if (counter === values.length) {
              resolve(result)
            }
          })
          .catch((error) => reject(error))
      } else {
        result[keys[index]] = value
        counter++
        if (counter === values.length) {
          resolve(result)
        }
      }
    })
  })
}
