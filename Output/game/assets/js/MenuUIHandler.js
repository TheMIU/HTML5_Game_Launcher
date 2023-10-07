let start = document.getElementById("start");
let game = document.getElementById("game");
let failed = document.getElementById("failed");
let btnPlay = document.getElementById("btnPlay");
let btnRestart = document.getElementById(`btnRestart`);

// begin
start.style.display = "block";
game.style.display = "none";
failed.style.display = "none";

// start
btnPlay.addEventListener("click", function () {
    playBGMusic();

    spawnDivEveryTimout(1000);

    start.style.display = "none";
    game.style.display = "block";
    failed.style.display = "none";
});

// restart
btnRestart.addEventListener("click", function () {
    location.reload();
});


//////////////////////////////

// fullscreen
const elementToFullscreen = document.documentElement;

btnPlay.addEventListener("click", enterFullscreen);

function enterFullscreen() {
    if (elementToFullscreen.requestFullscreen) {
        elementToFullscreen.requestFullscreen();
    } else if (elementToFullscreen.mozRequestFullScreen) {
        elementToFullscreen.mozRequestFullScreen();
    } else if (elementToFullscreen.webkitRequestFullscreen) {
        elementToFullscreen.webkitRequestFullscreen();
    } else if (elementToFullscreen.msRequestFullscreen) {
        elementToFullscreen.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

// Disable the right-click context menu
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});