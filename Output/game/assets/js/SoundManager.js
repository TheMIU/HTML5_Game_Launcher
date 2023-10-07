//////////////// Sounds
let bgMusicAudio = new Audio("assets/sounds/BGMusic.mp3");
let cry = new Audio("assets/sounds/Cry.wav");

let l1 = new Audio("assets/sounds/1.wav");
let l2 = new Audio("assets/sounds/2.wav");
let l3 = new Audio("assets/sounds/3.wav");
let l4 = new Audio("assets/sounds/4.wav");
let l5 = new Audio("assets/sounds/5.wav");
let l6 = new Audio("assets/sounds/6.wav");
let l7 = new Audio("assets/sounds/7.wav");
let l8 = new Audio("assets/sounds/8.wav");

let girlShout = new Audio("assets/sounds/GirlShouting.wav");

function playRandomGhostSound() {
    const audioFiles = [
        "assets/sounds/GhostDeath1.wav",
        "assets/sounds/GhostDeath2.wav",
        "assets/sounds/GhostDeath3.wav"
    ];

    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const randomSound = new Audio(audioFiles[randomIndex]);
    randomSound.play();
}

function playBGMusic() {
    bgMusicAudio.loop = true;
    bgMusicAudio.volume = 0.2;
    bgMusicAudio.play();

    cry.loop = true;
    cry.volume = 0.08;
    cry.play();
}

function stopBgMusic() {
    if (bgMusicAudio) {
        bgMusicAudio.pause();
    }

    if (cry) {
        cry.pause();
    }
}

function levelSoundsPlay(level) {
    const audioMap = {
        'Level 1': l1,
        'Level 2': l2,
        'Level 3': l3,
        'Level 4': l4,
        'Level 5': l5,
        'Level 6': l6,
        'Level 7': l7,
        'Level 8': l8
    };

    const audioToPlay = audioMap[level];

    if (audioToPlay) {
        audioToPlay.pause();
        audioToPlay.volume = 0.2;
        audioToPlay.play();
    }
}


function gameOverSound() {
    girlShout.volume = 0.5;
    girlShout.play();
}