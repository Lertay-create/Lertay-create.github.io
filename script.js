function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
 console.log("Iniciar sesión con:", email, password);
}

function register() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
console.log("Registrar usuario:", username, email, password);
}

function loginWithGoogle() {
console.log("Iniciar sesión con Google");
}
function loginWithFacebook() {
 console.log("Iniciar sesión con Facebook");
}
function loginWithInstagram() {
console.log("Iniciar sesión con Instagram");
}