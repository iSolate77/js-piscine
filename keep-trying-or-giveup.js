function retry(count, callback) {
  return async function (...args) {
    let attempts = 0
    while (attempts <= count) {
      try {
        return await callback(...args)
      } catch (error) {
        if (attempts === count) {
          throw new Error('Maximum retry attempts reached')
        }
        attempts++
      }
    }
  }
}
