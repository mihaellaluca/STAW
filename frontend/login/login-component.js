class LoginComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <link rel="stylesheet" href="login/login-style.css">
          <div class="login-comp">
            <img src = "./logo_transparent.png" alt="logo">
            <div class="form-container">
            <form>
                <label for="email">Email:</label> <br>
                <input name="email" id="email" />
                <br>
                <br>
                <label for="pass">Password:</label><br>
                <input name="pass" id="pass"/>
                <br>
                <br>
                <br>
                <button type="submit">Login</button>
            </form>
            <p> <a href='/frontend/register'>Create account.</a> </p>
            </div>
          </div>
        `;
  }
}

customElements.define("login-component", LoginComponent);
