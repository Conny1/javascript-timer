const play = document.getElementById("play");
const reset = document.getElementById("reset");
const time = document.querySelector(".time");

// variable for setting thhe starting time
var hours = 0;
var minutes = 0;
var seconds = 0;
// variable to set proper time
var leadingseconds = 0;
var leadingminutes = 0;
var leadinghours = 0;
// variables for storing time
var timepause = null;
var btnclicked = 'playing';

// timer counting function

function countTime() {
  seconds++;
  if (seconds / 60 == 1) {
    minutes++;
    seconds = 0;

    if (minutes / 60 == 1) {
      hours++;
      minutes = 0;
    }
  }
  // setting values in timer properly

  if (seconds < 10) {
    leadingseconds = "0" + seconds.toString();
  } else {
    leadingseconds = seconds;
  }

  if (minutes < 10) {
    leadingminutes = "0" + minutes.toString();
  } else {
    leadingminutes = minutes;
  }
  if (hours < 10) {
    leadinghours = "0" + hours.toString();
  } else {
    leadinghours = hours;
  }

  time.textContent =
    leadinghours + ":" + leadingminutes + ":" + leadingseconds;
}

// window.setInterval(countTime, 1);



// adding event listeners

play.addEventListener('click', function(){

    // console.log("PLAY");
    if (btnclicked === 'playing'){
        timepause =    window.setInterval(countTime, 100);
    play.textContent = 'pause';

    console.log(timepause);
    btnclicked ='stopped';

    }else  {
        window.clearInterval(timepause);
        btnclicked ='playing';
        play.textContent = 'play';

    }
});

// reset btn
reset.addEventListener('click', function(){
    window.clearInterval(timepause);
    minutes = 0;
    seconds = 0;
    hours  = 0;
    time.textContent ='00:00:00';
    play.textContent = 'play';
})

// console.log(timepause);
