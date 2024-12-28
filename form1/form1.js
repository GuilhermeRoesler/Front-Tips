document.addEventListener('touchstart', event => {
    const inputUser = document.getElementById('user');
    const inputPass = document.getElementById('pass')
    if (event.target !== inputUser) {
        inputUser.blur(); // Remove o foco do input
    }
    if (event.target !== inputPass) {
        inputPass.blur(); // Remove o foco do input
    }
});
