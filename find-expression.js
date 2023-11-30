function findExpression(target) {
  function search(current, path) {
    if (current > target) {
      return undefined
    }
    if (current === target) {
      return path
    }
    let result = search(current + 4, path + add4)
    if (result) {
      return result
    }
    return search(current * 2, path + mul2)
  }

  return search(1, '1')
}
