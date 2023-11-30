function sums(num) {
  const result = []
  const arr = []
  function helper(num, arr) {
    if (num === 0) {
      result.push(arr)
      return
    }
    for (let i = 1; i <= num; i++) {
      if (arr[arr.length - 1] <= i || arr.length === 0) {
        helper(num - i, [...arr, i])
      }
    }
  }
  helper(num, arr)
  return result
}
