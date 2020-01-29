import './login/login-component.js'
import './header/header-component.js'
import './register/register-component.js'
import './shopping-cart/shopping-cart-component.js'
window.addEventListener('load', async () => {
    await login();
});


function login() {
    const main = document.querySelector('main');
    const element = document.createElement('shopping-cart-component');
    main.appendChild(element);

}