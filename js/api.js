// Simulated API functions
const API = {
    getUserData: function() {
        return {
            username: 'Player123',
            coins: 1000,
            rank: 15,
            gamesPlayed: 42,
            highScore: 12450
        };
    },
    
    getLeaderboard: function() {
        return [
            { rank: 1, username: 'ProGamer', score: 25600 },
            { rank: 2, username: 'GameMaster', score: 23450 },
            { rank: 3, username: 'Player123', score: 12450 }
        ];
    },
    
    getGames: function() {
        return [
            { id: 1, name: 'Space Adventure', description: 'Navigate through asteroid fields' },
            { id: 2, name: 'Treasure Hunt', description: 'Find hidden treasures' }
        ];
    }
};

// Example usage in dashboard
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.dashboard-container')) {
        const userData = API.getUserData();
        const leaderboard = API.getLeaderboard();
        const games = API.getGames();
        
        // Update UI with real data would go here
    }
});
