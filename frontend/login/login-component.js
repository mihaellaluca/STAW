class LoginComponent extends HTMLElement {
  connectedCallback() {
    console.log("S-a incarcat");
    this.innerHTML = `
            <img src = "../logo_transparent.png" alt="logo">
            <form>
                <label for="email">Email:</label>
                <input name="email" id="email" />

                <label for="pass">Password:</label>
                <input name="pass" id="pass"/>

                <button type="submit">Submit</button>
            </form>
        `;
  }
}

customElements.define("login-component", LoginComponent);
