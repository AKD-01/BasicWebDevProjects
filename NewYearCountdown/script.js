const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = newYearTime - now;

    const second = 1000; //1 second = 1000 milliseconds
    const minute = second * 60; // 60000 milliseconds -- 60 seconds -- 1 minute
    const hour = minute * 60; // 3600000 milliseconds -- 60 minutes -- 1 Hour
    const day = hour * 24; // 86400000 milliseconds -- 24 hour -- 1 day

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    setTimeout(updateCountdown, 1000);
}