let box
let flag = true

export function createCircle(x, y) {
  const circle = document.createElement('div')
  circle.className = 'circle'
  circle.style.background = flag ? 'white' : 'var(--purple)'
  circle.style.left = `${x}px`
  circle.style.top = `${y}px`
  document.body.appendChild(circle)
}

export function moveCircle() {
  addEventListener('mousemove', (e) => {
    x = e.clientX
    y = e.clientY
  })
}

export function setBox() {
  box = document.createElement('div')
  box.className = 'box'
  box.style.width = '100px'
  box.style.height = '100px'
  box.style.position = 'absolute'
  box.style.left = '50px'
  box.style.top = '50px'
  document.body.appendChild(box)
}

addEventListener('click', (e) => {
  createCircle(e.clientX, e.clientY)
})

setBox()
moveCircle()
