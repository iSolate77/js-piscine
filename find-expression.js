function findExpression(num) {
  let result = ''
  let current = 1
  while (current < num) {
    if (current * 2 <= num) {
      current *= 2
      result += mul2
    } else {
      current += 4
      result += add4
    }
  }
  return current === num ? `1 ${result}` : undefined
}
