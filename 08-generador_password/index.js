const btn = document.querySelector(".btn")
const inputElement = document.getElementById("input")
const copyIcon = document.querySelector(".fa-copy")
const alertContainer = document.querySelector(".alert-container")


btn.addEventListener("click", () => {
    createPassword()

})

copyIcon.addEventListener("click", () => {
    copyPassword()
    if (inputElement.value) {
        alertContainer.classList.remove("active")
        setTimeout(() => {
            alertContainer.classList.add("active")
        }, 2000)
    }
})

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()_:+?{}[]"
    const passwordLenght = 14
    let password = ""
    for (let index = 0; index < passwordLenght; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1)
    }
    inputElement.value = password
    alertContainer.innerText = password + "copied!"
}

function copyPassword() {
    inputElement.select()
    inputElement.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(inputElement.value)
}