//var audio = new Audio('get-onto-the-dancefloor.wav');
//var isPlaying = false;

//function updateTime(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

    if (!isPlaying && hours == 12 && minutes == 40) {
        audio.play();
        isPlaying = true;
        setTimeout(function() { audio.pause(); isPlaying = false; }, 600000);
    }
}
//setInterval(updateTime, 20000);


// function initializeClock(id, endtime){
//   var clock = document.getElementById(id);
//   var timeinterval = setInterval(function(){
//     var t = getTimeRemaining(endtime);
//     clock.innerHTML = 'days: ' + t.days + '<br>' +
//                       'hours: '+ t.hours + '<br>' +
//                       'minutes: '+ t.minutes + '<br>'+
//                       'seconds: '+ t.seconds;
//     if(t.total<=0){
//       clearInterval(timeinterval);
//     }
//   }, 1000);
// }
//
// deadline = 30
// initializeClock('clockdiv', deadline);
