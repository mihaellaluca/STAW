class RegisterComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
            <link rel="stylesheet" href="register/register-style.css">
            <div class="register-comp">
              <img src = "./logo_transparent.png" alt="logo">
              <div class="form-container">
              <form>
                  <label for="firstName">First Name:</label> <br>
                  <input name="firstName" id="firstName" />
                  <br>
                  <br>
                  <label for="lastName">Last Name:</label> <br>
                  <input name="lastName" id="lastName" />
                  <br>
                  <br>
                  <label for="email">Email:</label> <br>
                  <input name="email" id="email" />
                  <br>
                  <br>
                  <label for="pass">Password:</label><br>
                  <input name="pass" id="pass"/>
                  <br>
                  <br>
                  <br>
                  <button type="submit">Register</button>
              </form>
              <p>Already have an account.</p>
              </div>
            </div>
          `;
    }
  }
  
  customElements.define("register-component", RegisterComponent);
  