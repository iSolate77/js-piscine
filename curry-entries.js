function defaultCurry(obj1) {
  return function (obj2) {
    return { ...obj1, ...obj2 }
  }
}

function mapCurry(func) {
  return function (obj2) {
    let res = {}
    for (let key in obj2) {
      const [newKey, newValue] = func([key, obj2[key]])
      res[newKey] = newValue
    }
    return res
  }
}

function reduceCurry(reducer) {
  return function (obj2, initialValue) {
    let acc = initialValue
    for (let key in obj2) {
      acc = reducer(acc, [key, obj2[key]])
    }
    return acc
  }
}

function filterCurry(predicate) {
  return function (obj2) {
    let res = {}
    for (let key in obj2) {
      if (predicate([key, obj2[key]])) {
        res[key] = obj2[key]
      }
    }
    return res
  }
}

function reduceScore(obj1, obj2) {
  return reduceCurry((acc, [, v]) =>
    v.isForceUser ? acc + v.pilotingScore + v.shootingScore : acc,
  )(obj1, obj2)
}

function filterForce(obj) {
  return filterCurry(([, v]) => v.isForceUser && v.shootingScore >= 80)(obj)
}

function mapAverage(obj) {
  let avgScores = mapCurry(([k, v]) => [
    k,
    (v.pilotingScore + v.shootingScore) / 2,
  ])(obj)
  for (let key in avgScores) {
    if (obj.hasOwnProperty(key)) {
      obj[key].averageScore = avgScores[key]
    }
  }
  return obj
}
