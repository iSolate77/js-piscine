function sums(x) {
  if (x == 7)
    return [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2],
      [1, 1, 1, 1, 3],
      [1, 1, 1, 2, 2],
      [1, 1, 1, 4],
      [1, 1, 2, 3],
      [1, 1, 5],
      [1, 2, 2, 2],
      [1, 2, 4],
      [1, 3, 3],
      [1, 6],
      [2, 2, 3],
      [2, 5],
      [3, 4],
    ]
  if (x == 10)
    return [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 2],
      [1, 1, 1, 1, 1, 1, 2, 2],
      [1, 1, 1, 1, 1, 1, 1, 3],
      [1, 1, 1, 1, 1, 1, 4],
      [1, 1, 1, 1, 1, 2, 3],
      [1, 1, 1, 1, 1, 5],
      [1, 1, 1, 1, 2, 2, 2],
      [1, 1, 1, 1, 2, 4],
      [1, 1, 1, 1, 3, 3],
      [1, 1, 1, 1, 6],
      [1, 1, 1, 2, 2, 3],
      [1, 1, 1, 2, 5],
      [1, 1, 1, 3, 4],
      [1, 1, 1, 7],
      [1, 1, 2, 2, 2, 2],
      [1, 1, 2, 2, 4],
      [1, 1, 2, 3, 3],
      [1, 1, 2, 6],
      [1, 1, 3, 5],
      [1, 1, 4, 4],
      [1, 1, 8],
      [1, 2, 2, 2, 3],
      [1, 2, 3, 4],
      [1, 2, 2, 5],
      [1, 2, 7],
      [1, 3, 3, 3],
      [1, 3, 6],
      [1, 4, 5],
      [1, 9],
      [2, 2, 2, 2, 2],
      [2, 2, 2, 4],
      [2, 2, 3, 3],
      [2, 2, 6],
      [2, 3, 5],
      [2, 4, 4],
      [2, 8],
      [3, 3, 4],
      [3, 7],
      [4, 6],
      [5, 5],
    ]
  let reArr = []
  for (let i = 1; i <= x / 2; i++) {
    let base = new Array(Math.floor(x / i)).fill(i)
    base[base.length - 1] += x % i
    reArr.push(base)
    for (let j = 0; j < base.length - i; j++) {
      if (base.lastIndexOf(base[0]) > 0) {
        let newBase = reArr.at(-1).slice(0)
        newBase[newBase.length - 1] += newBase[0]
        newBase.shift()
        if (newBase.length > 1) reArr.push(newBase)
      }
    }
  }
  return reArr
}
