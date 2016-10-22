var audio = new Audio('static/get-onto-the-dancefloor.wav');


function startTimer(duration, display) {
    audio.play();
    var timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = 00;
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.querySelector('.clockdiv .valueh').innerHTML = hours;
        document.querySelector('.clockdiv .valuem').innerHTML = minutes;
        document.querySelector('.clockdiv .values').innerHTML = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var thirtyMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(thirtyMinutes, display);
};
