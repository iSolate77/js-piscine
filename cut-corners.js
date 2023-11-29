function floor(num) {
  if (num >= 0) {
    return num - (num - parseInt(num))
  } else {
    const integerPart = parseInt(num)
    return integerPart - (integerPart !== num ? 1 : 0)
  }
}

function ceil(num) {
  if (num >= 0) {
    const integerPart = parseInt(num)
    return integerPart + (integerPart !== num ? 1 : 0)
  } else {
    return parseInt(num)
  }
}

function round(num) {
  const integerPart = parseInt(num)
  const fractionalPart = num - integerPart

  if (num >= 0) {
    return fractionalPart >= 0.5 ? integerPart + 1 : integerPart
  } else {
    return fractionalPart <= -0.5 ? integerPart - 1 : integerPart
  }
}

function trunc(num) {
  return parseInt(num)
}
