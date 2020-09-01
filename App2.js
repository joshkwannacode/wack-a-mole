const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-Left')
let score  = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent


function randomSquare(){
    square.forEach(className=>{
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}

function moveMole(){
    let timerId = setInterval(randomSquare,500)
}

moveMole()