function adder(arr) {
  return arr.reduce((a, b) => a + b)
}

function sumOrMul(arr) {
  return arr.reduce((a, b) => a * b, 1)
}
