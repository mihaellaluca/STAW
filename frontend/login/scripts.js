import './login-component.js';
import '../header/header-component.js'
import '../user-profile/user-profile-component.js'

window.addEventListener('load', async () => {
    await login();
});


function login() {
    const main = document.querySelector('main');
    const element = document.createElement('user-profile-component');
    main.appendChild(element);

}