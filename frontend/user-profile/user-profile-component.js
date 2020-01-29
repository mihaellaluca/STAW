class UserProfileComponent extends HTMLElement {

    connectedCallback() {

      this.innerHTML = `
            <link rel="stylesheet" href="user-profile/user-profile-style.css">
            <header-component></header-component>
            <h1>My Account</h1>
            <div class="profilePictureNameAndMyFavourites">
              <img id="userProfile"  src = "./microservices.jpeg" alt="logo" />
              <div class="nameAndFavourites">
              <p id="profile">Profile</p>
              <p>User Name</p>
              <p>My favourites:</p>
              <ul>
                <li>Baterie reincarcabila Lipo <button>Remove </button></li>
                <li>Baterie reincarcabila Lipo <button>Remove </button></li>
              </ul>


              </div>
              <div class="paymentHistory" >
                <p>My payments history </p>
                <p> Drone - Baterie reincarcabila Lipo - 15.10.2020 -Payed:40$ </p>
                <p> Drone - Baterie reincarcabila Lipo - 15.10.2020 -Payed:40$ </p>
                <p> Drone - Baterie reincarcabila Lipo - 15.10.2020 -Payed:40$ </p>
                <p> Drone - Baterie reincarcabila Lipo - 15.10.2020 -Payed:40$ </p>
              </div>
            </div>


          `;
    }
  }
  
  customElements.define("user-profile-component", UserProfileComponent);
  