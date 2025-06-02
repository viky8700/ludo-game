document.addEventListener('DOMContentLoaded', function() {
    // Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simulate API call
            setTimeout(() => {
                document.getElementById('message').textContent = 'Login successful!';
                document.getElementById('message').style.backgroundColor = '#4caf50';
                window.location.href = 'dashboard.html';
            }, 1000);
        });
    }

    // Register Form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('regUsername').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            
            // Simulate API call
            setTimeout(() => {
                document.getElementById('message').textContent = 'Registration successful!';
                document.getElementById('message').style.backgroundColor = '#4caf50';
                window.location.href = 'login.html';
            }, 1000);
        });
    }
});
