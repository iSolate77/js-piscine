async function getJSON(path, params) {
  let url = new URL(path)
  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key]),
    )
  }
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .then((data) => {
      if (data.error) {
        throw new Error(data.error)
      }
      return data.data
    })
}
