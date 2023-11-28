function multiply(a, b) {
  let result = 0
  let negative = false
  if (a < 0) {
    negative = !negative
    a = -a
  }
  if (b < 0) {
    negative = !negative
    b = -b
  }
  while (b > 0) {
    result += a
    b--
  }
  return negative ? -result : result
}

function divide(a, b) {
  let result = 0
  let negative = false
  if (a < 0) {
    negative = !negative
    a = -a
  }
  if (b < 0) {
    negative = !negative
    b = -b
  }
  while (a >= b) {
    a -= b
    result++
  }
  return negative ? -result : result
}

function modulo(a, b) {
  let negative = false
  if (a < 0) {
    negative = !negative
    a = -a
  }
  if (b < 0) {
    negative = !negative
    b = -b
  }
  while (a >= b) {
    a -= b
  }
  return negative ? -a : a
}
