function interpolation({ step, start, end, callback, duration }) {
  const delta = (end - start) / step
  let current = start
  let i = 0
  const timer = setInterval(() => {
    if (i < step) {
      callback([current, (duration / step) * (i + 1)])
      current += delta
      i++
    } else {
      clearInterval(timer)
    }
  }, duration / step)
}
