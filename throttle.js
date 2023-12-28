function throttle(func, wait) {
  let inThrottle

  return function() {
    const args = arguments
    const context = this

    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true

      setTimeout(() => (inThrottle = false), wait)
    }
  }
}

function opThrottle(func, wait, options = {}) {
  let lastFunc
  let lastRan
  return function() {
    const context = this
    const args = arguments
    if (!lastRan) {
      if (options.leading !== false) {
        func.apply(context, args)
      }
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      if (Date.now() - lastRan >= wait) {
        if (options.leading !== false) {
          func.apply(context, args)
        }
        lastRan = Date.now()
      } else if (options.trailing !== false) {
        lastFunc = setTimeout(
          () => {
            if (options.leading === false && Date.now() - lastRan >= wait) {
              func.apply(context, args)
            }
            lastRan = Date.now()
          },
          wait - (Date.now() - lastRan),
        )
      }
    }
  }
}
