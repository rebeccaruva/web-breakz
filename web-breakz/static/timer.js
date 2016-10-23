var audio = new Audio('static/get-onto-the-dancefloor.wav');
var stop_audio = false;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;

    setInterval(function () {
        hours = parseInt(timer / (60 * 60));
        minutes = parseInt(timer / 60) - hours * 60;
        seconds = parseInt(timer % 60);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.querySelector('.clockdiv .valueh').innerHTML = hours;
        document.querySelector('.clockdiv .valuem').innerHTML = minutes;
        document.querySelector('.clockdiv .values').innerHTML = seconds;

        if(seconds === 0 && minutes === 0) {
          if(!stop_audio){
            audio.play();
          }else{
            audio.pause();
          }
        }

        if(timer === 0){

        }
        else if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function button_function () {

    stop_audio = false;
    var time = .25;
    var thirtyMinutes = 60 * time,
    display = document.querySelector('#time');
    startTimer(thirtyMinutes, display);

    isPlaying = False
};

function stop_function (){
  stop_audio = true
};

// while(stop_audio = False){
//   document.getElementById("stop").style.display = 'none';
// }
