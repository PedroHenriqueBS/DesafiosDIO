const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelectorAll(".emeny"), 
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        lives: document.querySelector("#live"),
        vida: document.getElementsByClassName('vida')
    },
    values: {
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        curretTime: 20,
        lives: 3,
        maximo: [],
    }, 
    actions: {
        timerId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000),
    }
};
let btn = document.getElementById('btn');

function countDown(){
    state.values.curretTime--;
    state.view.timeLeft.textContent = state.values.curretTime;

    if(state.values.curretTime < 0) {
        resetCountDown();
        alert("PARABÉNS! o seu Score foi: " + state.values.result);
        reset();
    }
}

function resetCountDown(){
    clearInterval(state.actions.countDownTimerId);
    clearInterval(state.actions.timerId);
}

function reset() {
    state.view.squares.forEach((square) => {
      square.classList.remove("enemy");
    });

    state.actions.timerId = setInterval(randomSquare, 1000);
    state.actions.countDownTimerId = setInterval(countDown, 1000);

    state.values.lives = 3;
    state.values.result = 0;
    state.values.curretTime = 20;

    state.view.score.textContent = state.values.result;
    state.view.lives.textContent = state.values.lives;
    state.view.timeLeft.textContent = state.values.curretTime;
}

function playSound(audioName, volume){
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = volume;
    audio.play();
}

function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];

    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function addListenerHitBox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if(square.id === state.values.hitPosition){
                state.values.result++
                state.values.hitPosition = null;
                state.view.score.textContent = state.values.result;
                playSound("hit", 0.2);
                square.classList.remove("enemy");
            } else {
                playSound("game-over", 0.8)
                state.values.lives--;
                state.view.lives.textContent =  state.values.lives;

                if (state.values.lives <= 0) {
                    resetCountDown();
                    alert("Game Over! O seu resultado foi: " + state.values.result);
                    reset();
            }; 
        }
        });
     });
    };

btn.addEventListener('click', () => { 
    location.reload()
})

function initialize() {
    state.view.score.textContent = state.values.result;
    state.view.lives.textContent = state.values.lives;
    state.view.timeLeft.textContent = state.values.curretTime;
    addListenerHitBox();
}

initialize()
