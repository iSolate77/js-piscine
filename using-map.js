function citiesOnly(obj) {
  return obj.map(function(item) {
    return item.city
  })
}

// uppercaseStates with check for undefined
function upperCasingStates(obj) {
  return obj.map(function(item) {
    if (item.state) {
      return item.state.toUpperCase()
    } else {
      return item.state
    }
  })
}

function fahrenheitToCelsius(obj) {
  return obj.map(function(item) {
    return {
      city: item.city,
      temperature: Math.round(((item.temperature - 32) * 5) / 9),
    }
  })
}

function trimTemp(obj) {
  return obj.map(function(item) {
    return {
      city: item.city,
      temperature: item.temperature.trim(),
    }
  })
}

function tempForecasts(obj) {
  return obj.map(function(item) {
    return {
      city: item.city,
      forecast: item.forecast,
    }
  })
}
