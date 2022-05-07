var paddle1= document.getElementById('paddle-1')
var paddle2= document.getElementById('paddle-2')

function movePaddle() {


    paddle1.onmouseenter = function() {
        // console.log('hoveringpaddle1')
        handlepaddlemousemove(this, true)
    } 
    paddle2.onmouseenter = function() {
        // console.log('hoveringpaddle2')
        handlepaddlemousemove(this, true)
        
    }
    paddle1.onmouseleave = function() {
        handlepaddlemousemove(this, false)

    }
    paddle2.onmouseleave = function() {
        handlepaddlemousemove(this, false)

    }

    // window.addEventListener('mousemove', function(event) {
    //     //console.log(event.y,event.x)
    // })
}

function handlepaddlemousemove(paddle, entering) {
    // console.log(entering)
    // console.log(paddle)
    if(entering) {
        console.log(document.querySelector('.PongTable').offsetTop)
        window.addEventListener('mousemove', function(event) {
            // var originalYPosition = [event.x, event.y]
            // console.log(event.y,event.x)
        
           if(event.y < 330 && event.y > 80){
            //if(event.target.classList.contains('PongTable')){
            // console.log(event.target)
            paddle.style.top =  event.y  + 'px'
        }
            
        })
    } 
    


}

movePaddle()

