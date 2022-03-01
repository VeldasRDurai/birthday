let upComingBday = new Date(`03-18-${thisYearBday > new Date() ? thisYearBday.getFullYear() : thisYearBday.getFullYear() + 1}`);


const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const counter = document.getElementById("counter-container");
function countdown() {
    const newYearsDate = new Date(upComingBday);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
if(!sameDate(thisYearBday) ) {
    countdown();
    setInterval(countdown, 1000);
} else { 
    counter.style.visibility = 'hidden';
    document.title = "Happy Bday Shakku💋";
}