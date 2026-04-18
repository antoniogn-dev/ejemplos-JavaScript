const testimonials = [
    {
        name: "Charlize Therones",
        photoUrl: "https://images.unsplash.com/photo-1689507555344-dfa26c6e0014?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Just picked up some of your apples, and they’re so crisp and delicious!🍏 Can’t get enough of them in my lunch!"
    },
    {
        name: "Megan Fox",
        photoUrl: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Just sliced into my apples, and wow, the freshness is unmatched! They're the perfect snack for my afternoon cravings! 🍎✨"
    },
    {
        name: "Dakota Fanning",
        photoUrl: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Just enjoyed one of your apples on my walk, and it tasted like pure magic! How is it so juicy and crisp at the same time? 🍏❤️"
    },
]

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".testimonial-text")
const usernameEl = document.querySelector(".username")

let idx = 0

updateTestimonial()

function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[idx]
    imgEl.src = photoUrl
    textEl.innerText = text
    usernameEl.innerText = name
    idx++
    if (idx === testimonials.length){
        idx = 0
    } 
    setTimeout(updateTestimonial, 10000)
}