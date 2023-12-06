function citiesOnly(obj) {
  return obj.map(function(item) {
    return item.city
  })
}

function upperCasingStates(obj) {
  return obj.map(function(item) {
    return item.city.toUpperCase()
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
