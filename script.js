let timerDisplay = document.querySelector(".timerDisplay");
let Stopbtn = document.querySelector("#Stopbtn");
let Startbtn = document.querySelector("#Startbtn");
let Resetbtn = document.querySelector("#Resetbtn");

console.log(timerDisplay);

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

Startbtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

Stopbtn.addEventListener('click', function () {
    clearInterval(timerId);
});

Resetbtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerDisplay.innerHTML = `00:00:00`;
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString}:${secsString}:${msecString}`;
}
