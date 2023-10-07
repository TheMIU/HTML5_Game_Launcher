///////////////////////////////////////////
const enemyContainer = document.getElementById("enemyContainer");
let result = document.getElementById("result");

//spawn a new div every 'timeout' second
let spawner;

function spawnDivEveryTimout(timeout) {
    if (spawner) {
        clearInterval(spawner);
    }
    spawner = setInterval(spawnNewEnemy, timeout);
}


function spawnNewEnemy() {
    console.log('created new enemy');

    const enemy = new Enemy();

    // Animate the div to the center
    enemy.preview.animate(getCenter(enemy.preview), 6000);

    enemyContainer.appendChild(enemy.preview);
}

///////////////////////////////////////////
class Enemy {
    constructor() {
        this.preview = this.createPreviewDiv();
        this.randomizePosition(); // Set random initial position
    }

    createPreviewDiv() {
        const div = document.createElement("div");
        div.classList.add("enemy");

        // Delete div if mouse hovered
        div.addEventListener("mouseover", () => {
            playRandomGhostSound();

            div.classList.add("faded-out");

            // Delete div after animation finished
            div.addEventListener("transitionend", () => {
                div.remove();
                score++;
                updateStatus();
            });
        });

        updateStatus();
        return div;
    }

    randomizePosition() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const xValues = [0, viewportWidth - 140];
        const yValues = [0, viewportHeight - 100];

        let randomIndexX = Math.floor(Math.random() * xValues.length);
        let randomIndexY = Math.floor(Math.random() * yValues.length);

        let xPosition = xValues[randomIndexX];
        let yPosition = yValues[randomIndexY];

        this.preview.style.left = xPosition + "px";
        this.preview.style.top = yPosition + "px";
    }
}

function getCenter(div) {
    // Calculate the center coordinates of the container
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const divWidth = div.clientWidth;
    const divHeight = div.clientHeight;
    const centerX = (viewportWidth - divWidth) / 2;
    const centerY = (viewportHeight - divHeight) / 2;

    //console.log(centerX+" , "+centerY)

    return {left: centerX + "px", top: centerY + "px"};
}

///////////////////////////////////////////
// Update score and level
const scoreElement = document.getElementById("score");
const levelElement = document.getElementById("level");

let score = 0;
let level = 'Level 1';

function updateStatus() {
    updateLevel();
    scoreElement.textContent = String(score);
    levelElement.textContent = level;
    levelSoundsPlay(level);
}

function updateLevel() {
    switch (true) {
        case score < 5:
            level = 'Level 1';
            spawnDivEveryTimout(2000);
            levelElement.style.color = "#ff0000";
            break;
        case score < 20:
            level = 'Level 2';
            spawnDivEveryTimout(1000);
            levelElement.style.color = "#ffb600";
            break;
        case score < 50:
            level = 'Level 3';
            spawnDivEveryTimout(800);
            levelElement.style.color = "#ff0000";
            break;
        case score < 100:
            level = 'Level 4';
            spawnDivEveryTimout(500);
            levelElement.style.color = "#ffb600";
            break;
        case score < 500:
            level = 'Level 5';
            spawnDivEveryTimout(300);
            levelElement.style.color = "#ff0000";
            break;
        case score < 1000:
            level = 'Level 6';
            spawnDivEveryTimout(200);
            levelElement.style.color = "#ffb600";
            break;
        case score < 2000:
            level = 'Level 7';
            spawnDivEveryTimout(100);
            levelElement.style.color = "#ff0000";
            break;
        case score < 3000:
            level = 'Level 8';
            spawnDivEveryTimout(50);
            levelElement.style.color = "#ffb600";
            break;
    }
}


///////////// Game over
checkEnemyPosition();

function checkEnemyPosition() {
    const enemyDiv = document.querySelector(".enemy");
    if (enemyDiv) {
        const enemyRect = enemyDiv.getBoundingClientRect();
        const viewportCenterX = window.innerWidth / 2;
        const viewportCenterY = window.innerHeight / 2;

        // Check if the enemy div's center is within a certain range of the viewport center
        if (
            Math.abs(enemyRect.left + enemyRect.width / 2 - viewportCenterX) < 140 &&
            Math.abs(enemyRect.top + enemyRect.height / 2 - viewportCenterY) < 100
        ) {
            console.log("Game Over");
            result.innerText = "You killed " + score + " Ghosts";
            stopBgMusic();
            gameOverSound();
            clearTimeout(spawner);

            // if in fullscreen then exit
            if (document.fullscreenElement) {
                exitFullscreen();
            }

            start.style.display = "none";
            game.style.display = "none";
            failed.style.display = "block";
        }
    }

    // Continue checking in the next animation frame
    requestAnimationFrame(checkEnemyPosition);
}