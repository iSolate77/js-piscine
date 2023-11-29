function round(num) {
  const integerPart = num < 0 ? Math.ceil(num) : Math.floor(num)
  const fractionalPart = num - integerPart
  if (num >= 0) {
    return fractionalPart >= 0.5 ? integerPart + 1 : integerPart
  } else {
    return fractionalPart <= -0.5 ? integerPart - 1 : integerPart
  }
}

function ceil(num) {
  const integerPart = Math.floor(num)
  return num > integerPart ? integerPart + 1 : integerPart
}

function floor(num) {
  if (num >= 0) {
    return num - (num % 1)
  } else {
    const potentialFloor = num - (num % 1)
    return potentialFloor === num ? num : potentialFloor - 1
  }
}

function trunc(num) {
  return num < 0 ? ceil(num) : floor(num)
}
