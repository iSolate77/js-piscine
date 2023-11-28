function slice(data, start, end) {
  let result = Array.isArray(data) ? [] : ''
  const length = data.length

  start = start < 0 ? Math.max(length + start, 0) : Math.min(start, length)
  end =
    end === undefined
      ? length
      : end < 0
      ? Math.max(length + end, 0)
      : Math.min(end, length)

  for (let i = start; i < end; i++) {
    if (Array.isArray(data)) {
      result.push(data[i])
    } else {
      result += data[i]
    }
  }

  return result
}
