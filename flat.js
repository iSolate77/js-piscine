function flat(array, depth = 1) {
  if (depth < 1) {
    return array
  }
  return array.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(flat(val, depth - 1))
    }
    return acc.concat(val)
  }, [])
}
