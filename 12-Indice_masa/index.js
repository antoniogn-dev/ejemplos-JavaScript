const btnEl = document.getElementById("btn")
const bmiInputEl = document.getElementById("bmi-result")
const weightConditionEl = document.getElementById("weight-condition")

function calcularIMC(){
    const heightValue = document.getElementById("height").value / 100
    const weightValue = document.getElementById("Weight").value
    
    const imcValue = weightValue / (heightValue * heightValue)
    console.log(imcValue);

    bmiInputEl.value = imcValue

    if(imcValue < 18.5){
        weightConditionEl.innerText = "Bajo Peso"
    } else if (imcValue > 18.5 && imcValue <= 24.9){
        weightConditionEl.innerText = "Peso Normal"
    } else if(imcValue >= 25 && imcValue <= 29.9){
        weightConditionEl.innerText = "Sobre Peso"
    } else if(imcValue > 29.9){
        weightConditionEl.innerText = "Obesidad"
    }
    
}


btnEl.addEventListener("click", calcularIMC)