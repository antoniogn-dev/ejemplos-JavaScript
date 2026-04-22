const nextEl = document.querySelector(".next")
const prevEl = document.querySelector(".prev")
const imageContainer = document.querySelector(".image-container")
const container = document.querySelector(".slider-container")

const images = document.querySelectorAll(".image-container img")
const imgWidth = 500

let index = 1

// 🔥 Clonar primera y última imagen
const firstClone = images[0].cloneNode(true)
const lastClone = images[images.length - 1].cloneNode(true)

imageContainer.appendChild(firstClone)
imageContainer.insertBefore(lastClone, imageContainer.firstChild)

// Posición inicial
imageContainer.style.transform = `translateX(-${imgWidth * index}px)`

// FUNCIÓN PARA MOVER
function updateSlide() {
    imageContainer.style.transition = "transform 0.5s ease-in-out"
    imageContainer.style.transform = `translateX(-${imgWidth * index}px)`
}

// BOTONES
nextEl.addEventListener("click", () => {
    index++
    updateSlide()
    resetInterval()
})

prevEl.addEventListener("click", () => {
    index--
    updateSlide()
    resetInterval()
})

// 🔁 LOOP INFINITO
imageContainer.addEventListener("transitionend", () => {
    const imgs = document.querySelectorAll(".image-container img")

    if (imgs[index].src === firstClone.src) {
        imageContainer.style.transition = "none"
        index = 1
        imageContainer.style.transform = `translateX(-${imgWidth * index}px)`
    }

    if (imgs[index].src === lastClone.src) {
        imageContainer.style.transition = "none"
        index = images.length
        imageContainer.style.transform = `translateX(-${imgWidth * index}px)`
    }
})

// ⏱️ AUTOPLAY
let interval = setInterval(autoSlide, 3000)

function autoSlide() {
    index++
    updateSlide()
}

// 🔁 REINICIAR AUTOPLAY
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(autoSlide, 3000)
}

// 🖱️ PAUSA AL HOVER
container.addEventListener("mouseenter", () => {
    clearInterval(interval)
})

container.addEventListener("mouseleave", () => {
    interval = setInterval(autoSlide, 3000)
})