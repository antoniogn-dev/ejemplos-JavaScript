const currencyFirstEl = document.getElementById("currency-first")
const worthFirstEl = document.getElementById("worth-first")
const currencySecondEl = document.getElementById("currency-second")
const worthSecondEl = document.getElementById("worth-second")
const exchangeRateEl = document.getElementById("exchange-rate")

updateRate()

function updateRate() {
    const clave_api = "118077aa41ceedc18bcce5e9"
    fetch(`https://v6.exchangerate-api.com/v6/${clave_api}/latest/${currencyFirstEl.value}`)
        .then((response) => response.json())
        .then((data) => {
            const rate = data.conversion_rates[currencySecondEl.value]
            console.log(rate);
            exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`
            worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)
        })
}

currencyFirstEl.addEventListener("change", updateRate)
currencySecondEl.addEventListener("change", updateRate)
worthFirstEl.addEventListener("input", updateRate)

