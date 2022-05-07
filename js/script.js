var btn = document.getElementById('playgame')
var pongTable = document.querySelector('.PongTable')
var btnHolder = document.getElementById('ButtonHolder')
var restartGameBtn = document.getElementById('restart-game')

anime({
    targets: btn,
    translateY: [200, 0],
    opacity: [0, 1],
    duration: 800,
    scale: [0 , 1],
    delay: 500
})

anime({
    targets: btnHolder.children[0],
    opacity: [0 ,1],
    translateX: [300, 0]
})


function startGame() {
    console.log('Game Has Started')
    // make pongbox appear
    pongTable.classList.remove('hidden')
    // remove pong1 and button when game starts
    btnHolder.classList.add('hidden')
    // show restart game btn
    restartGameBtn.classList.remove('hidden')

    anime({
        targets: restartGameBtn,
        translateY: [200, 0]
    })
    // add on click event listener to the restart game button when the startGame() function has fired
    restartGameBtn.onclick= function() {
        // run the restartGame() function
        restartGame()
    }
}

// create a function to restart the game
function restartGame() {
    // hide the pongbox
    pongTable.classList.add('hidden')
    // show the button holder
    btnHolder.classList.remove('hidden')
    // hide the restart game btn
    restartGameBtn.classList.add('hidden')
}

btn.onclick = function() {
    startGame()
}


