var circles = []
var box

class Circle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.diameter = 50
    this.isTrapped = false
    this.draw()
    circles.push(this)
  }

  draw() {
    this.HTML = document.createElement('div')
    this.HTML.className = 'circle'
    Object.assign(this.HTML.style, {
      position: 'absolute',
      top: `${this.y}px`,
      left: `${this.x}px`,
      background: 'white',
    })
    document.body.appendChild(this.HTML)
    this.trapped()
  }

  move(x, y) {
    if (!this.isTrapped || this.inReactangle(x, y)) {
      this.x = x
      this.y = y
      this.HTML.style.top = `${this.y}px`
      this.HTML.style.left = `${this.x}px`
    }
  }

  trapped() {
    this.isTrapped =
      this.x > box.x &&
      this.x + this.diameter < box.x + box.width &&
      this.y > box.y &&
      this.y + this.diameter < box.y + box.height
    this.HTML.style.background = this.isTrapped ? 'var(--purple)' : 'white'
  }

  inReactangle(x, y) {
    return (
      x > box.x &&
      x + this.diameter < box.x + box.width &&
      y > box.y &&
      y + this.diameter < box.y + box.height
    )
  }
}

class Box {
  constructor() {
    this.HTML = document.createElement('div')
    this.HTML.className = 'box'
    Object.assign(this.HTML.style, {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    })
    document.body.appendChild(this.HTML)
    this.updateDimensions()
  }

  updateDimensions() {
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = this.HTML
    this.x = offsetLeft - offsetWidth / 2 - 1
    this.y = offsetTop - offsetHeight / 2 - 1
    this.width = offsetWidth + 1
    this.height = offsetHeight + 1
  }
}

document.body.addEventListener('click', (e) => {
  createCircle(e)
})

document.body.addEventListener('mousemove', (e) => {
  moveCircle(e)
})

function createCircle(e) {
  if (e === undefined) return
  new Circle(e.clientX - 25, e.clientY - 25)
}

function moveCircle(e) {
  if (e === undefined || circles.length === 0) return
  circles[circles.length - 1].move(e.clientX - 25, e.clientY - 25)
}

function setBox() {
  box = new Box()
}

export { createCircle, moveCircle, setBox }
