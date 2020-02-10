class HeaderComponent extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <link rel="stylesheet" href="header/header-style.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <div class="header">
            <img height="70" width="70" src = "./logo_transparent.png" alt="logo">
            <div class="header-right">
              <a href="/frontend/home">Home</a>
              <a href="/frontend/user-profile">My Account</a>
              <a href="/frontend/shopping-cart">My Cart</a>
              <a href="/frontend/product">Notifications</a>
              <a href="/frontend/rss">Feed</a>
              <a href="#leave"><i class="fa fa-sign-out" aria-hidden="true"></i></a>
            </div>
          </div>
          `;
	}
}

customElements.define('header-component', HeaderComponent);
