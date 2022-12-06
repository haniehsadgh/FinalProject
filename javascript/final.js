let roll = document.getElementById("roll")
let newgame = document.getElementById("newgame")
let rules = document.getElementById("rules")
let current2 = document.querySelector(".player2 .current")
let current1 = document.querySelector(".player1 .current")
let total2 = document.querySelector(".player2 .total")
let total1 = document.querySelector(".player1 .total")
let i = 0;
const player1 = {
    'score1': 0,
    'score2': 0,
    'total': 0,
    'current': 0
}
const player2 = {
    'score1': 0,
    'score2': 0,
    'total': 0,
    'current': 0
}


let player1Img1 = document.querySelector(".player1 .dice-images").children[0]
let player1Img2 = document.querySelector(".player1 .dice-images").children[1]

let player2Img1 = document.querySelector(".player2 .dice-images").children[0]
let player2Img2 = document.querySelector(".player2 .dice-images").children[1]

function refreshScore() {
    current1.innerHTML = player1['current']
    current2.innerHTML = player2['current']
    total2.innerHTML = player2['total']
    total1.innerHTML = player1['total']

}
refreshScore()

roll.addEventListener("click", function() {
    
    i+=1
    console.log(i)
    
    
        player1.score1 = Math.round(Math.random() * 5) + 1;
    player1.score2 = Math.round(Math.random() * 5) + 1;
    if (player1.score1 == player1.score2) {
        if (player1.score1 == 1) {
            player1.current == 0
        } else {
            player1.current = (player1.score1 + player1.score2) * 2
        }
    } else {
        player1.current = player1.score1 + player1.score2
    }

    player1.total += player1.current
    player1Img1.src = `images/dice_images/inverted-dice-${player1.score1}.svg`
    player1Img2.src = `images/dice_images/inverted-dice-${player1.score2}.svg`


    player2.score1 = Math.round(Math.random() * 5) + 1;
    player2.score2 = Math.round(Math.random() * 5) + 1;
    if (player2.score1 === player2.score2) {
        if (player2.score1 == 1) {
            player2.current == 0
        } else {
            player2.current = (player2.score1 + player2.score2) * 2
        }
    } else {
        player2.current = player2.score1 + player2.score2
    }

    player2.total += player2.current
    player2Img1.src = `images/dice_images/inverted-dice-${player2.score1}.svg`
    player2Img2.src = `images/dice_images/inverted-dice-${player2.score2}.svg`
    // console.log(player2Img1)
    refreshScore();
   
    if (i >= 3){
        if ( player1.total > player2.total ){
            winner_modal_title.innerHTML = `<p>Congratulation player1!!<br>Let's keep winning!</p>`
            
        } else{
            winner_modal_title.innerHTML = `<p>You lost. <br>Maybe next time!</p>`
        }
        roll.setAttribute("disabled", '');
        return winner_modal.style.display = "block"
    }

})

newgame.addEventListener("click", function() {
    window.location.reload();

})

rules.addEventListener("click", function() {
    rules_modal.style.display = "block"
})

// pop up handling
// let modalBtn = document.getElementById("modal-btn")
let rules_modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".modal .close-btn")

// modalBtn.onclick = function () {
//     modal.style.display = "block"
// }
closeBtn.onclick = function() {
    rules_modal.style.display = "none"
}
window.onclick = function(e) {
    if (e.target == rules_modal) {
        rules_modal.style.display = "none"
    }
}

let winner_modal = document.querySelector(".winner-popup")
let winner_modal_title = document.querySelector(".winner-popup .title")
let closeBtn2 = document.querySelector(".winner-popup .close-btn")


// modalBtn.onclick = function () {
//     modal.style.display = "block"
// }
closeBtn2.onclick = function() {
    winner_modal.style.display = "none"
}
