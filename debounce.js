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
  let isLeadingCall = false

  return function executedFunction(...args) {
    const shouldCallNow = options.leading && !isLeadingCall
    const later = () => {
      if (!options.leading || isLeadingCall) {
        func(...args)
      }
      isLeadingCall = false
      timeout = null
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)

    if (shouldCallNow) {
      isLeadingCall = true
      func(...args)
    }
  }
}
