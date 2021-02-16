const timerDayEl = document.querySelector(".timer__day");
const timerHourEl = document.querySelector(".timer__hour");
const timerMinEl = document.querySelector(".timer__min");
const timerSecEl = document.querySelector(".timer__sec");
const buttonEl = document.querySelector("button");
const loadingEl = document.getElementById("loading");
const timerBodyEl = document.querySelector(".timer__body");

var buttonSong = new Audio();
buttonSong.src = "song.mp3";


function toggleSong() {
  buttonEl.addEventListener("click", (event) => {
    buttonSong.paused ? buttonSong.play() : buttonSong.pause();
})

}
toggleSong();

function getTimeDifference(start, end) {
  let milliseconds = Math.floor(end - start);
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours = hours - (days * 24);
  minutes = minutes - (days * 24 * 60) - (hours * 60);
  seconds = seconds - (days * 24 * 60 *60) - (hours * 60 * 60)- (minutes * 60);
  // return days + " " + hours + " " + minutes + " " + seconds;
  return {
    rDays: days,
    rHours: hours,
    rMinutes: minutes,
    rSeconds: seconds,
  }
}

let timer = setInterval(function() {
  const startDate = new Date(); //Current day right now
  const endDate = new Date( 'January, 1 2022 00:00:00');

  let timeDifferenceObj = getTimeDifference(startDate, endDate);
  if(timeDifferenceObj.rDays === 0 && timeDifferenceObj.rHours === 0 && timeDifferenceObj.rMinutes === 0 && timeDifferenceObj.rSeconds === 0) {
    clearInterval(timer);
  } 
    timerDayEl.textContent = timeDifferenceObj.rDays < 10 ? "0" + timeDifferenceObj.rDays : timeDifferenceObj.rDays;
    
    timerHourEl.textContent = timeDifferenceObj.rHours < 10 ? "0" + timeDifferenceObj.rHours : timeDifferenceObj.rHours;

    timerMinEl.textContent = timeDifferenceObj.rMinutes < 10 ? "0" + timeDifferenceObj.rMinutes : timeDifferenceObj.rMinutes;

    timerSecEl.textContent = timeDifferenceObj.rSeconds < 10 ? "0" + timeDifferenceObj.rSeconds : timeDifferenceObj.rSeconds;

}, 1000)

setTimeout(() => {
  loadingEl.remove();
  timerBodyEl.style.display = 'flex';
}, 1000);




