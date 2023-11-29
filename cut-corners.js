function floor(num) {
  if (num >= 0) {
    let result = 0
    while (result <= num - 1) {
      result++
    }
    return result
  } else {
    let result = -1
    while (result > num) {
      result--
    }
    return result
  }
}

function ceil(num) {
  if (num >= 0) {
    let result = 0
    while (result < num) {
      result++
    }
    return result
  } else {
    let result = -1
    while (result >= num) {
      result--
    }
    return result + 1
  }
}

function round(num) {
  return num >= 0 ? floor(num + 0.5) : ceil(num - 0.5)
}

function trunc(num) {
  return num >= 0 ? floor(num) : ceil(num)
}
