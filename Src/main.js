const play = document.getElementById('play');
const pause = document.getElementById('pause');
const delay = document.getElementById('delay');
const video = document.querySelector("video");

function playvideo(){
    document.body.style.backgroundcolor = 'black';
    video.play();

    document.body.style.backgroundcolor = 'white';
    video.pause();
}

delay.addEventListener('click', function(){
    setTimeout(playvideo, 5000 );
})

play.addEventListener("dbclick", playvideo);
play.addEventListener("click", playvideo);

pause.addEventListener("click", function)(){
    video.pause();
};