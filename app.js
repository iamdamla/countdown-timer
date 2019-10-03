const timerDayEl = document.querySelector(".timer__day");
const timerHourEl = document.querySelector(".timer__hour");
const timerMinEl = document.querySelector(".timer__min");
const timerSecEl = document.querySelector(".timer__sec");
const buttonEl = document.querySelector("button");

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
  const endDate = new Date("December, 31 2019 00:00:00");

  let timeDifferenceObj = getTimeDifference(startDate, endDate);
  timerDayEl.textContent = timeDifferenceObj.rDays;
  timerHourEl.textContent = timeDifferenceObj.rHours;
  timerMinEl.textContent = timeDifferenceObj.rMinutes;
  timerSecEl.textContent = timeDifferenceObj.rSeconds;
}, 1000)




// console.log(new Date("April 26, 2018 07:30:00"));