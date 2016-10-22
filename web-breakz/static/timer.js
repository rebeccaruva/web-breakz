var audio = new Audio('get-onto-the-dancefloor.wav');
var isPlaying = false;

// function updateTime(){
//     // var currentTime = new Date();
//     // var hello = 'hi';
//     // var hours = currentTime.getHours();
//     // var minutes = currentTime.getMinutes();
//     // var seconds = currentTime.getSeconds();
//     //
//     // var minutes_remaining = minutes.valueOf();
//     //
//     // if (!isPlaying && minutes == minutes + 5) {
//     //     audio.play();
//     //     isPlaying = true;
//     //     setTimeout(function() { audio.pause(); isPlaying = false; }, 600000);
//     // }
//
//
//     document.querySelector('.clockdiv .valueh').innerHTML = hours;
//     document.querySelector('.clockdiv .valuem').innerHTML = minutes;
//     document.querySelector('.clockdiv .values').innerHTML = seconds;
// }
// setInterval(updateTime, 1000);

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / (60 * 24), 10);
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
    var thirtyMinutes = 60 * 30,
        display = document.querySelector('#time');
    startTimer(thirtyMinutes, display);
};
