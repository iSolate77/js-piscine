async function all(promisesObj) {
  const keys = Object.keys(promisesObj)
  const promises = keys.map((key) => promisesObj[key])

  return Promise.all(promises).then((results) => {
    return results.reduce((acc, current, index) => {
      acc[keys[index]] = current
      return acc
    }, {})
  })
}
