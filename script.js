var btnholder = document.getElementById('ButtonHolder')
var body = document.querySelector('body')

var btn = document.getElementById('playgame')
var pongTable = document.querySelector('.PongTable')

function startGame() {
    console.log('Game Has Started')
    // make pongbox appear
    pongTable.classList.remove('hidden')
// hide button and h1 Words
   // btnholder.classList.add('hidden')
   // body.style.backgroundColor='black'
   // btnholder.style.color='white'
}

btn.onclick = function() {
    startGame()
}
