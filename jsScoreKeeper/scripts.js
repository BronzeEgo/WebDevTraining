// alert("Hello! I am an alert box!!");
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById('p2');
var resetButton = document.getElementById('reset');
var p1Display = document.querySelector('#p1Display');
var p1Score = 0;
var p2Display = document.getElementById('p2Display');
var p2Score = 0;
var winAt = document.getElementById('winAt');
var playToInput = document.getElementById('playToInput');
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if(p1Score === winningScore){
            // console.log('Game Over.');
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
            gameOver = true;
            
        }
        p1Display.textContent = p1Score;
    }

});

p2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if(p2Score === winningScore){
            // console.log('Game Over.');
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }


});

resetButton.addEventListener('click', function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('winner');
    p2Display.classList.remove('winner');
    p1Display.classList.remove('loser');
    p2Display.classList.remove('loser');
    gameOver = false;
}

playToInput.addEventListener('change', function(){
    // alert('changed');
    winAt.textContent = playToInput.value;
    winningScore = Number(playToInput.value);
});

