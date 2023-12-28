let box
let flag = true
let circle

// Refactored to accept x and y as parameters
export function createCircle(x, y) {
  circle = document.createElement('div')
  circle.className = 'circle'
  circle.style.background = flag ? 'white' : 'var(--purple)'
  circle.style.left = `${x - 25}px` // Adjusting the position with 25px offset
  circle.style.top = `${y - 25}px`
  document.body.appendChild(circle)
}

export function moveCircle() {
  addEventListener('mousemove', (e) => {
    // ... existing logic for moving the circle ...

    // Update the circle creation with current mouse position
    createCircle(e.clientX, e.clientY)
  })
}

export function setBox() {
  box = document.createElement('div')
  box.className = 'box'
  // Set initial size and position of box if necessary
  // box.style.width = '100px';
  // box.style.height = '100px';
  // box.style.position = 'absolute';
  // box.style.left = '50px';
  // box.style.top = '50px';
  document.body.appendChild(box)
}

// Additional function for testing purposes
// Simulate clicks for testing
export function simulateClicks() {
  const clicks = [...Array(10).keys()].map(() => [
    random(window.innerWidth),
    random(window.innerHeight),
  ])

  clicks.forEach(([x, y]) => {
    createCircle(x, y) // Create circles at simulated click positions
  })
}

// Helper function for generating random numbers
function random(max) {
  return Math.floor(Math.random() * max)
}
