//var audio = new Audio('get-onto-the-dancefloor.wav');
//var isPlaying = false;

//function updateTime(){
    var currentTime = new Date();
    var hello = 'hi';
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    if (!isPlaying && minutes == minutes + 5) {
        audio.play();
        isPlaying = true;
        setTimeout(function() { audio.pause(); isPlaying = false; }, 600000);
    }

    document.querySelector('.clockdiv .valueh').innerHTML = hours;
    document.querySelector('.clockdiv .valuem').innerHTML = minutes;
    document.querySelector('.clockdiv .values').innerHTML = seconds;
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
