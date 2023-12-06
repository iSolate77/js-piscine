function citiesOnly(obj) {
  return obj.map(function (item) {
    return item.city
  })
}

function upperCasingStates(states) {
  return states.map(function (state) {
    return state
      .split(' ')
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      })
      .join(' ')
  })
}

function fahrenheitToCelsius(obj) {
  return obj.map(function (item) {
    return Math.floor((parseInt(item) - 32) * (5 / 9)) + '°C'
  })
}

function trimTemp(obj) {
  return obj.map(function (item) {
    return {
      city: item.city,
      region: item.region,
      state: item.state,
      temperature: item.temperature.trim(),
    }
  })
}

function tempForecasts(obj) {
  return obj.map(function (item) {
    return fahrenheitToCelsius(item.tempreture)
  })
}
