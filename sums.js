function sums(n) {
  if (n === 1) {
    return []
  }

  function findPartitions(number, maxNumber, partial = []) {
    if (number === 0) {
      result.push(partial)
      return
    }
    for (let i = maxNumber; i > 0; i--) {
      if (i <= number) {
        findPartitions(number - i, i, partial.concat(i))
      }
    }
  }

  const result = []
  findPartitions(n, n)
  return result
}
