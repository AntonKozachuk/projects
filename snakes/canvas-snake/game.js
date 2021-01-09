let width,
    height,
    fps,
    tileSize,
    canvas, 
    ctx, 
    snake,
    food,
    score,
    isPaused,
    fpsInterval, 
    startTime,
    now,
    then,
    elapsed,
    animationFrame;

// Loading the browser window
window.addEventListener('load', function() {
    game();
});

// Resizing the canvas on window resize
window.addEventListener('resize', function() {
    init();
});

// Adding an event listener for key presses
window.addEventListener('keydown', function(evt) {
    if(evt.key === ' ') {
        evt.preventDefault();
        isPaused = !isPaused;
        showPaused();
    }
    else if(evt.key === 'ArrowUp') {
        evt.preventDefault();
        if(snake.velY != 1 && snake.x >= 0 && snake.x <= width && snake.y >= 0 && snake.y <= height) {
            snake.dir(0, -1);
        }
    }
    else if(evt.key === 'ArrowDown') {
        evt.preventDefault();
        if(snake.velY != -1 && snake.x >= 0 && snake.x <= width && snake.y >= 0 && snake.y <= height) {
            snake.dir(0, 1);
        }
    }
    else if(evt.key === 'ArrowLeft') {
        evt.preventDefault();
        if(snake.velX != 1 && snake.x >= 0 && snake.x <= width && snake.y >= 0 && snake.y <= height) {
            snake.dir(-1, 0);
        }
    }
    else if(evt.key === 'ArrowRight') {
        evt.preventDefault();
        if(snake.velX != -1 && snake.x >= 0 && snake.x <= width && snake.y >= 0 && snake.y <= height) {
            snake.dir(1, 0);
        }
    }
})

