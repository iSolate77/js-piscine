function getURL(dataSet) {
  return dataSet.match(/https?:\/\/\S+/g)
}

function greedyQuery(dataSet) {
  return dataSet.match(/https?:\/\/\S+\?.{3,}/g)
}

function notSoGreedy(dataSet) {
  return dataSet.match(/https?:\/\/\S+\?.{2,3}/g)
}
