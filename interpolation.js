function interpolation({ step, start, end, callback, duration }) {
  const deltaX = (end[0] - start[0]) / step
  const deltaY = (end[1] - start[1]) / step
  const delay = duration / step

  for (let i = 0; i < step; i++) {
    setTimeout(() => {
      const x = start[0] + deltaX * i
      const y = start[1] + deltaY * i
      callback([x, y])
    }, delay * i)
  }
}
