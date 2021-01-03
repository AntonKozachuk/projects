let grid = document.querySelector('.grid'),
    popup = document.querySelector('.popup'),
    playAgain = document.querySelector('.playAgain'),
    left = document.querySelector('.left'),
    bottom = document.querySelector('.bottom'),
    right = document.querySelector('.right'),
    up = document.querySelector('.top'),
    width = 10,
    currentIndex = 0,
    appleIndex = 0,
    currentSnake = [2, 1, 0],
    direction = 1,
    score = 0,
    speed = 0.8,
    intervalTime = 0,
    interval = 0;

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keyup', control);
    createBoard();
    startGame();
    playAgain.addEventListener('click', replay);
});


function createBoard() {
    popup.style.display = 'none';
    for(let i = 0; i < 100; i++) {
        let div = document.createElement('div');
        grid.appendChild(div);
    }
};

function startGame() {
    let squares = document.querySelectorAll('.grid div');
    randomApple(squares);
    //random apple
    direction = 1;
    scoreDisplay.innerHTML = score;
    intervalTime = 1000;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    currentSnake.forEach(index => squares[index].classList.add('snake'));
    interval = setInterval(moveOutcome, intervalTime);
};

function moveOutcome() {
    let squares = document.querySelectorAll('.grid div');
    if(checkForHits(squares)) {
        alert('You hit something!');
        popup.style.display = 'flex';
        return clearInterval(interval);
    } else {
        moveSnake(squares);
    }
};

