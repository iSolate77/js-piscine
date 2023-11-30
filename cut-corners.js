function floor(num) {
  if (num >= 0) {
    let result = 0
    while (result + 1 <= num) {
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
    while (result - 1 >= num) {
      result--
    }
    return result
  }
}

function round(num) {
  if (num >= 0) {
    return floor(num + 0.5)
  } else {
    return ceil(num - 0.5)
  }
}

function trunc(num) {
  if (num >= 0) {
    return floor(num)
  } else {
    return ceil(num)
  }
}
