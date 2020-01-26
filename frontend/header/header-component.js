class HeaderComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
            <link rel="stylesheet" href="header/header-style.css">
            <div class="header">
            <img height="70" width="70" src = "./logo_transparent.png" alt="logo">
            <div class="header-right">
              <a class="active" href="#home">Home</a>
              <a href="#contact">My Account</a>
              <a href="#about">My Cart</a>
              <a href="#contact">Notifications</a>
              <a href="#about">L</a>
            </div>
          </div>
          `;
    }
  }
  
  customElements.define("header-component", HeaderComponent);
  