//var audio = new Audio('get-onto-the-dancefloor.wav');
//var isPlaying = false;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;

    setInterval(function () {
        hours = parseInt(timer / (60 * 60), 10);
        minutes = parseInt(timer / 60, 10) - hours * 60;
        seconds = parseInt(timer % 60, 10);

        // hours = hours < 10 ? "0" + hours : hours;
        // minutes = minutes < 10 ? "0" + minutes : minutes;
        // seconds = seconds < 10 ? "0" + seconds : seconds;


        document.querySelector('.clockdiv .valueh').innerHTML = hours;
        document.querySelector('.clockdiv .valuem').innerHTML = minutes;
        document.querySelector('.clockdiv .values').innerHTML = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var time = 320
    var thirtyMinutes = 60 * time,
        display = document.querySelector('#time');
    startTimer(thirtyMinutes, display);
};
