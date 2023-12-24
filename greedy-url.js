const urlPattern =
  /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?(?:[-a-zA-Z0-9()\[\],@:%_\+.~#?&\/=]*)/g

function extractURLs(dataSet) {
  return dataSet.match(urlPattern)
}

function filterGreedyURLs(dataSet) {
  const urls = extractURLs(dataSet)
  return urls.filter((url) =>
    url.match(
      /\?([-a-zA-Z0-9\[\],()@]*=[-a-zA-Z0-9\[\],()@]*&){2,255}([-a-zA-Z0-9\[\],()@]*=[-a-zA-Z0-9\[\],()@]*)/g,
    ),
  )
}

function filterModerateURLs(dataSet) {
  const urls = extractURLs(dataSet)
  return urls.filter((url) =>
    url.match(
      /\?([-a-zA-Z0-9\[\],()@%]*=[-a-zA-Z0-9\[\],()@%]*&){1,2}([-a-zA-Z0-9\[\],()@%]*=[-a-zA-Z0-9\[\],()@%]*)$/g,
    ),
  )
}
