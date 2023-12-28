async function getJSON(path, params = {}, baseUrl = 'http://localhost') {
  const url = new URL(path, baseUrl)

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key]),
  )

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const parsedResponse = await response.json()

    if (parsedResponse.error) {
      throw new Error(parsedResponse.error)
    }
    return parsedResponse.data
  } catch (error) {
    throw error
  }
}
