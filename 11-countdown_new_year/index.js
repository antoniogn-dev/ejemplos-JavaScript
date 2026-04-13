const yearEl = document.querySelector(".year")
const dayEl = document.getElementById("dia")
const hourEl = document.getElementById("hora")
const minuteEl = document.getElementById("minuto")
const secondEl = document.getElementById("segundo")

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 1, ${currentYear + 1} 00:00:00`).getTime();

yearEl.innerText = currentYear + 1

updateCountdown();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = newYearTime - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    setTimeout(updateCountdown, 1000)
}