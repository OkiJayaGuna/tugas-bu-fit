document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '123456') {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'laporan/index.html';
    } else {
        alert('Username atau password salah!');
    }
});
