var songs = ["static/another-loud-no.wav",
            "static/dragon_ball_z.mp3",
            "static/evillaugh.mp3",
            "static/for-shame.wav"
            "static/get-onto-the-dancefloor.wav",
            "static/zombie-yell2.wav"
            ]

var audio = new Audio(songs[Math.floor((Math.random()*6)+1);
]);
var stop_audio = false;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;

        var myVar = setInterval(function () {
        var hours = document.getElementsByName("hours")[0].value;
        var minutes = document.getElementsByName("minutes")[0].value;
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
          clearInterval(myVar);
        }
        else if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


function button_function () {

    stop_audio = false;
    var time = 0.25;
    var thirtyMinutes = 60 * time,
    display = document.querySelector('#time');
    startTimer(thirtyMinutes, display);
};

function stop_function (){
  stop_audio = true
};

// // while(stop_audio = False){
// //   document.getElementById("stop").style.display = 'none';
// // }
