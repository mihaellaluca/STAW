import './login/login-component.js'
import './header/header-component.js'
import './register/register-component.js'

window.addEventListener('load', async () => {
    await login();
});


function login() {
    const main = document.querySelector('main');
    const element = document.createElement('register-component');
    main.appendChild(element);

}