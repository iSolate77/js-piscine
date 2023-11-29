function floor(num) {
  let result = 0
  while (result <= num - 1) {
    result++
  }
  return num >= 0 ? result : result - 1
}

function ceil(num) {
  let result = 0
  while (result < num) {
    result++
  }
  return result
}

function round(num) {
  const lower = floor(num)
  const upper = ceil(num)
  const lowerDiff = num - lower
  const upperDiff = upper - num

  if (num >= 0) {
    return lowerDiff < upperDiff ? lower : upper
  } else {
    return -lowerDiff >= 0.5 ? upper : lower
  }
}

function trunc(num) {
  return num >= 0 ? floor(num) : ceil(num)
}
