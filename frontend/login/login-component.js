class LoginComponent extends HTMLElement {

  loginUser() {
		console.log('loginUser');
		const email = document.querySelector('#email').value;
		const password = document.querySelector('#pass').value;
		console.log(email);
    console.log(password);
    
		fetch('http://localhost:3000/users/login', {
			method: 'POST',
			headers: new Headers(),
			body: JSON.stringify({email: email, password: password })
		})
			.then((res) => res.json())
			.then((data) => {console.log(data);
        document.cookie = `userId=${data.id}`;
        document.cookie = `token=${data.token}`;})
      .catch((err) => console.log(err));
      // window.location.href = "/frontend/home";
	}

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
                <input name="pass" id="pass" type="password"/>
                <br>
                <br>
                <br>
            </form>
            <button type="submit" onclick="this.parentElement.parentElement.parentElement.loginUser()"><a href="/frontend/home">Login</a></button>
            <p> <a href='/frontend/register'>Create account.</a> </p>
            </div>
          </div>
        `;
  }
}

customElements.define("login-component", LoginComponent);
