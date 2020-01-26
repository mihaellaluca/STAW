import './login-component.js';

window.addEventListener('load', async () => {
    await login();
});


function login() {
    const main = document.querySelector('main');
    const element = document.createElement('login-component');
    main.appendChild(element);

}