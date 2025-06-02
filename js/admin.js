document.addEventListener('DOMContentLoaded', function() {
    // Simulate fetching users from API
    const users = [
        { id: 1, username: 'admin', email: 'admin@gamezone.com' },
        { id: 2, username: 'player1', email: 'player1@example.com' },
        { id: 3, username: 'player2', email: 'player2@example.com' }
    ];
    
    // Populate user table
    const userTable = document.getElementById('user-table');
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;
        userTable.appendChild(row);
    });
    
    // Update stats
    document.getElementById('total-users').textContent = users.length;
    document.getElementById('total-games').textContent = '125';
});
