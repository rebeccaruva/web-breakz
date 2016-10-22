var audio = new Audio('get-onto-the-dancefloor.wav');
var isPlaying = false;

function updateTime(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    if (!isPlaying && minutes == minutes + 5) {
        audio.play();
        isPlaying = true;
        setTimeout(function() { audio.pause(); isPlaying = false; }, 600000);
    }

    return{
      'hours' : hours,
      'minutes' : minutes,
      'seconds' : seconds
    };
}
setInterval(updateTime, 20000);
