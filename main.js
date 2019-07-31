const bubule = document.querySelector('.cursor')

let click = false
let move = false

const pointer = {}
pointer.x = 100
pointer.y = 100
pointer.radius = 5
pointer.speed = {}

const cursor = {}
cursor.x = 0
cursor.y = 0

let current

window.addEventListener('mousemove', (_event) => {
    cursor.x = _event.clientX
    cursor.y = _event.clientY
    bubule.style.opacity = "1"
    bubule.classList.remove('stop')
})

document.addEventListener('mousedown', () => {
    bubule.classList.add('click')
})
document.addEventListener('mouseup', () => {
    bubule.classList.remove('click')
})

const loop = () => {
    window.requestAnimationFrame(loop)
    let largeur = window.innerWidth;
    let hauteur = window.innerHeight;

    pointer.x += (cursor.x - pointer.x) * 0.05
    pointer.y += (cursor.y - pointer.y) * 0.05

    bubule.style.left = Math.round(pointer.x - pointer.radius) + "px"
    bubule.style.top = Math.round(pointer.y - pointer.radius) + "px"

    pointer.x >= largeur - 5 || pointer.y >= hauteur - 5 ? bubule.style.display = "none" : bubule.style.display = "block"

    bubule.className.indexOf('click') === -1 ? click = false : click = true
    Math.round(pointer.y) == cursor.y ? move = false : move = true

    if(!click && !move){
        bubule.classList.add('stop')
    }
}

loop()