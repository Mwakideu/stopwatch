//Button variables
var startStopBtn= document.querySelector("#startStopBtn");
var resetBtn= document.querySelector("#reset");

//Time variables
var seconds= 0;
var minutes= 0;
var hours= 0;

//leading "0" variables
var leadingSeconds= 0;
var leadingMinutes= 0;
var leadingHours= 0;

//timerStatus and timerInterval variables
var timerInterval= null;
var timerStatus= "stopped";

//creating the function to enable time count.
function stopWatch(){

    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
        if(minutes === 60){
            minutes= 0;
            hours++;
        }
    }

    if (seconds< 10){
        leadingSeconds= "0" + seconds.toString();
    }else{
        leadingSeconds= seconds;
    }
    if(minutes< 10){
        leadingMinutes= "0"+ minutes.toString();
    }else{
        leadingMinutes= minutes;
    }
    if(hours< 10){
        leadingHours= "0"+ hours.toString();
    }else{
        leadingHours= hours;
    }

    document.getElementById('timer').innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

//Adding Event listeners to the buttons

startStopBtn.addEventListener('click', function(){
    
    if(timerStatus === "stopped"){
        timerInterval = setInterval(stopWatch, 1000);
        timerStatus= "started";
        startStopBtn.innerHTML= '<i class="fa-solid fa-pause" id="pause"></i>';
    }else{
        clearInterval(timerInterval);
        timerStatus= "stopped";
        startStopBtn.innerHTML= '<i class="fa-solid fa-play" id="play"></i>'
    }
})

resetBtn.addEventListener('click', function(){

    clearInterval(timerInterval);
    seconds= 0;
    minutes= 0;
    hours= 0;

    document.getElementById('timer').innerText= "00:00:00";
    startStopBtn.innerHTML= '<i class="fa-solid fa-play" id="play"></i>';
    timerStatus= "stopped";
})