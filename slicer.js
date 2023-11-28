function slice(data, start, end) {
  let result = Array.isArray(data) ? [] : ''
  end = end !== undefined ? end : data.length

  start = Math.max(0, start)
  end = Math.min(data.length, end)

  for (let i = start; i < end; i++) {
    if (Array.isArray(data)) {
      result.push(data[i])
    } else {
      result += data[i]
    }
  }

  return result
}
