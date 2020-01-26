import './login-component.js';
import '../header/header-component.js'

window.addEventListener('load', async () => {
    await login();
});


function login() {
    const main = document.querySelector('main');
    const element = document.createElement('header-component');
    main.appendChild(element);

}