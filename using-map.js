function citiesOnly(obj) {
  return obj.map((item) => item.city)
}

function upperCasingStates(obj) {
  return obj.map((item) =>
    item
      .split(' ')
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1)
      })
      .join(' '),
  )
}

function fahrenheitToCelsius(obj) {
  return obj.map(
    (item) =>
      Math.floor((Number(item.slice(0, -2)) - 32) * (5 / 9)).toString() + '°C',
  )
}

function trimTemp(obj) {
  return obj.map((item) => {
    item.temperature = item.temperature.replaceAll(' ', '')
    return item
  })
}

function tempForecasts(obj) {
  return obj.map((item) => {
    return `${Math.floor(
      (Number(item.temperature.slice(0, -2)) - 32) * (5 / 9),
    ).toString() + '°Celsius'
      } in ${item.city}, ${item.state
        .split(' ')
        .map((word) => {
          return word[0].toUpperCase() + word.slice(1)
        })
        .join(' ')}`
  })
}
