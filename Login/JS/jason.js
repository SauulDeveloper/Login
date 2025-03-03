document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        // Adicione aqui a lógica de autenticação
        console.log('Login:', username, password);
    });

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;
        const email = document.getElementById('registerEmail').value;
        // Adicione aqui a lógica de cadastro
        console.log('Register:', username, password, email);
    });
});