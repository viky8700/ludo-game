document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    const scoreDisplay = document.getElementById('score-display');
    const pauseBtn = document.getElementById('pause-btn');
    
    let score = 0;
    let gameRunning = true;
    
    // Game objects
    const player = {
        x: 50,
        y: canvas.height / 2,
        width: 50,
        height: 30,
        color: '#ff6f00'
    };
    
    // Game loop
    function gameLoop() {
        if (!gameRunning) return;
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw player
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.width, player.height);
        
        // Update score
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        
        requestAnimationFrame(gameLoop);
    }
    
    // Controls
    window.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowUp') player.y -= 10;
        if (e.key === 'ArrowDown') player.y += 10;
    });
    
    pauseBtn.addEventListener('click', function() {
        gameRunning = !gameRunning;
        pauseBtn.textContent = gameRunning ? 'Pause' : 'Resume';
        if (gameRunning) gameLoop();
    });
    
    // Start game
    gameLoop();
});
