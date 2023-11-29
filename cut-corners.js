function floor(num) {
  let result = 0
  if (num >= 0) {
    while (result <= num - 1) {
      result++
    }
    return result
  } else {
    while (result > num) {
      result--
    }
    return result
  }
}

function ceil(num) {
  let result = 0
  if (num >= 0) {
    while (result < num) {
      result++
    }
    return result
  } else {
    while (result - 1 >= num) {
      result--
    }
    return result
  }
}

function round(num) {
  return num >= 0 ? floor(num + 0.5) : ceil(num - 0.5)
}

function trunc(num) {
  return num >= 0 ? floor(num) : ceil(num)
}
