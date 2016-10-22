var audio = new Audio('get-onto-the-dancefloor.wav');
var isPlaying = false;

function updateTime(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

    if (!isPlaying && hours == 12 && minutes == 40) {
        audio.play();
        isPlaying = true;
        setTimeout(function() { audio.pause(); isPlaying = false; }, 600000);
    }
}
setInterval(updateTime, 20000);
