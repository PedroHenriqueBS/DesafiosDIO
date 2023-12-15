const emojis = ["🐵", "🐵", "🐷", "🐷", "🐶", "🐶", "🐸", "🐸", 
                "🐟", "🐟", "🐞", "🐞", "🐔", "🐔", "🦇", "🦇"];
let openCards = [];
let embaralharEmoji = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);

for (let i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = embaralharEmoji[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box)
}

function handleClick(){
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function playSound() {
    let audio = new Audio('./src/audios/notification.mp3');
    audio.volume = 0.5;
    audio.play();
}

function checkMatch(){
    if (openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        playSound()
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Parabéns, você venceu!")
    }
}
