const containerEl = document.querySelector(".container")

const careers = ["Youtuber", "Web Developer", "Freelancer", "Trader"]

let careersIndex = 0
let characterIndex = 0

updateText()

function updateText() {
    
    characterIndex++
    containerEl.innerHTML = `
        <h1>Soy un ${careers[careersIndex].slice(0,characterIndex)}</h1>
    `
    if (characterIndex === careers[careersIndex].length){
        careersIndex++
        characterIndex = 0
    }
    setTimeout(updateText, 400);
}