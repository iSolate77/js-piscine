function citiesOnly(arr) {
  return arr.map((obj) => obj.city)
}

function upperCasingStates(arr) {
  return arr.map((state) =>
    state
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
  )
}

function fahrenheitToCelsius(arr) {
  return arr.map((temp) => {
    let fahrenheit = parseInt(temp)
    let celsius = Math.floor(((fahrenheit - 32) * 5) / 9)
    return `${celsius}°C`
  })
}

function trimTemp(arr) {
  return arr.map((obj) => ({ ...obj, temperature: obj.temperature.trim() }))
}

function tempForecasts(arr) {
  return arr.map((obj) => {
    let celsius = Math.floor(((parseInt(obj.temperature) - 32) * 5) / 9)
    return `${celsius}°Celsius in ${obj.city}, ${
      obj.state.charAt(0).toUpperCase() + obj.state.slice(1)
    }`
  })
}
