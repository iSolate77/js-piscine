function debounce(fn, wait) {
  let timeout
  return function (...args) {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => fn.apply(context, args), wait)
  }
}

function opDebounce(fn, wait) {
  let timeout
  return function (...args) {
    const context = this
    if (!timeout) {
      fn.apply(context, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(() => (timeout = null), wait)
  }
}
