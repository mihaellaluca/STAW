import './login/login-component.js';
import './header/header-component.js';
import './register/register-component.js';
import './shopping-cart/shopping-cart-component.js';
import './user-profile/user-profile-component.js';
import './home/home-component.js';
import './product-page/product-page-component.js';
import './map/map-component.js';
import './feed/feed-component.js';
import { Router } from './vaadin-router.js';

const outlet = document.querySelector('main');
const router = new Router(outlet);
router.setRoutes([
	{ path: '/frontend/index.html', component: 'login-component' },
	{ path: '/frontend/user-profile', component: 'user-profile-component' },
	{ path: '/frontend/shopping-cart', component: 'shopping-cart-component' },
	{ path: '/frontend/register', component: 'register-component' },
	{ path: '/frontend/home', component: 'home-component' },
	{ path: '/frontend/product', component: 'product-page-component' },
	{ path: '/frontend/map', component: 'map-component' },
	{ path: '/frontend/rss', component: 'feed-component' }
]);
