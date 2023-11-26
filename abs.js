function isPositive(num) {
  return num > 0
}

function abs(num) {
  if (isPositive(num)) {
    return num
  } else if (num === 0) {
    return 0
  } else {
    return -num
  }
}
