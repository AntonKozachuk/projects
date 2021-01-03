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


