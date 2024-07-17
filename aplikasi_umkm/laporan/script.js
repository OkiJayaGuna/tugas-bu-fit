function navigateTo(url) {
    window.location.href = url;
}

function checkLogin() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
        navigateTo('laporan/index.html');
    } else {
        navigateTo('login.html');
    }
}
