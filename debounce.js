function debounce(func, wait) {
  let timeout

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function opDebounce(func, wait, options = {}) {
  let timeout
  let lastInvocationTime
  let result

  return function executedFunction(...args) {
    const now = Date.now()
    const isLeadingCall =
      options.leading &&
      (!lastInvocationTime || now - lastInvocationTime >= wait)

    if (isLeadingCall) {
      lastInvocationTime = now
      result = func(...args)
    } else if (!timeout) {
      timeout = setTimeout(() => {
        lastInvocationTime = options.leading ? Date.now() : null
        timeout = null
        if (!options.leading || lastInvocationTime) {
          result = func(...args)
        }
      }, wait)
    }
    return result
  }
}
