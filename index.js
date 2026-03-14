//variables for button

var startStopBtn = document.querySelector("#startStopBtn");
var reset = document.querySelector("#reset")

//variables for time value

var seconds = 0;
var minutes = 0;
var hours = 0;

//variables for leading 0

var leadingSeconds = 0;
var leadingMinutes = 0;
var leadingHours = 0;

//stop watch function

function stopWatch(){

    seconds++;
    if (seconds/60 === 1){
        seconds = 0;
        minutes++;
        if(minutes/60 === 1){
            minutes= 0;
            hours++;
        }
    }
    var displayTimer= document.getElementById('timer').innerText= 
    hours+ ":" +minutes+ ":" +seconds;
}

//window.setInterval(stopWatch, 1000)