const urlPattern =
  /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?(?:[-a-zA-Z0-9()\[\],@:%_\+.~#?&\/=]*)/g

function getURL(dataSet) {
  return dataSet.match(urlPattern)
}

function greedyQuery(dataSet) {
  const urls = getURL(dataSet)
  return urls.filter((url) =>
    url.match(
      /\?([-a-zA-Z0-9\[\],()@]*=[-a-zA-Z0-9\[\],()@]*&){2,255}([-a-zA-Z0-9\[\],()@]*=[-a-zA-Z0-9\[\],()@]*)/g,
    ),
  )
}

function notSoGreedy(dataSet) {
  const urls = getURL(dataSet)
  return urls.filter((url) =>
    url.match(
      /\?([-a-zA-Z0-9\[\],()@%]*=[-a-zA-Z0-9\[\],()@%]*&){1,2}([-a-zA-Z0-9\[\],()@%]*=[-a-zA-Z0-9\[\],()@%]*)$/g,
    ),
  )
}
