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
    this.updatePosition()
    document.body.appendChild(this.HTML)
  }

  move(x, y) {
    this.x = x
    this.y = y
    this.updatePosition()
    this.checkIfTrapped()
  }

  updatePosition() {
    this.HTML.style.position = 'absolute'
    this.HTML.style.left = `${this.x - this.diameter / 2}px`
    this.HTML.style.top = `${this.y - this.diameter / 2}px`
  }

  checkIfTrapped() {
    if (
      this.x > box.x &&
      this.x < box.x + box.width &&
      this.y > box.y &&
      this.y < box.y + box.height
    ) {
      this.isTrapped = true
      this.HTML.style.background = 'var(--purple)'
    } else {
      this.isTrapped = false
      this.HTML.style.background = 'white'
    }
  }
}

class Box {
  constructor() {
    this.HTML = document.createElement('div')
    this.HTML.className = 'box'
    document.body.appendChild(this.HTML)
    this.updateDimensions()
  }

  updateDimensions() {
    const rect = this.HTML.getBoundingClientRect()
    this.x = rect.left
    this.y = rect.top
    this.width = rect.width
    this.height = rect.height
  }
}

function createCircle() {
  document.body.addEventListener('click', (e) => {
    new Circle(e.clientX, e.clientY)
  })
}

function moveCircle() {
  document.body.addEventListener('mousemove', (e) => {
    if (circles.length > 0) {
      const lastCircle = circles[circles.length - 1]
      if (!lastCircle.isTrapped) {
        lastCircle.move(e.clientX, e.clientY)
      }
    }
  })
}

function setBox() {
  box = new Box()
}

export { createCircle, moveCircle, setBox }
