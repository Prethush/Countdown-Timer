const newYears = "1 January 2022";
let daysText = document.querySelector("#days");
let hoursText = document.querySelector("#hours");
let secondsText = document.querySelector("#sec");
let minutesText = document.querySelector("#mins");

function countdown() {
    const newYearsDate = new Date(newYears);
    console.log(newYearsDate);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    console.log(days, hours, minutes, seconds);
    
    daysText.innerText = days;
    hoursText.innerText = formatTime(hours);
    minutesText.innerText = formatTime(minutes);
    secondsText.innerText = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000);