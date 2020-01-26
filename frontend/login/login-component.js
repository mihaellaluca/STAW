class LoginComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <link rel="stylesheet" href="login/login-style.css">
          <div class="login-comp">
            <img src = "./logo_transparent.png" alt="logo">
            <div class="container">
            <form>
                <label for="email">Email:</label>
                <input name="email" id="email" />
                
                <label for="pass">Password:</label>
                <input name="pass" id="pass"/>
            
                <button type="submit">Submit</button>
            </form>
            </div>
          </div>
        `;
  }
}

customElements.define("login-component", LoginComponent);
