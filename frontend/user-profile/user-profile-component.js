class UserProfileComponent extends HTMLElement {

    removeFromFavourites(){
      console.log(this.parentElement.innerText.split("R",1));

      fetch('http://localhost:3000/user/profile/removeFavourites', {
        method: 'POST',
        headers: new Headers({ auth: `${this.getCookie('token')}` }),
        body: JSON.stringify({ favourite:this.parentElement.innerText.split("R",1)})
      })
        .then((res) => {
          return res.json();
        });
      

    }
    generate(){

      // console.log('generate function');
      //  let dicti = [{username:'Costel',favourites:['Baterie1','Baterie2']}];
      //var paymentHistory = [{name:"Drone - Baterie reincarcabila Lipo",payed:40},{name:"Drone - Baterie reincarcabila Lipo",payed:44},{name:"Drone - Baterie reincarcabila Lipo",payed:46}]
      //console.log(dicti);

      fetch('http://localhost:3000/user/nameAndFavourites', {
        method: 'GET',
        headers: new Headers({ auth: `${this.getCookie('token')}` })
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          data.forEach((el) =>{
          const userName = document.createElement('p');
          userName.innerText=el.username;
          document.querySelector('.nameAndFavourites').appendChild(userName);
          const myFav = document.createElement('p');
          myFav.innerText = 'My favourites:';
          document.querySelector('.nameAndFavourites').appendChild(myFav);
          const ulList = document.createElement('ul');
          document.querySelector('.nameAndFavourites');
          for(var i = 0; i< el.favourites.length;i++){
            var liEl = document.createElement('li');
            var button = document.createElement('button');
            button.addEventListener('click',this.removeFromFavourites);
            button.innerText = 'Remove';
            liEl.innerText = el.favourites[i];
            liEl.appendChild(button);
            ulList.appendChild(liEl);
  
          }
          document.querySelector('.nameAndFavourites').appendChild(ulList);
        });

        });
      
        fetch('http://localhost:3000/user/profile/mypayments', {
          method: 'GET',
          headers: new Headers({ auth: `${this.getCookie('token')}` })
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            data.forEach((el) =>{
              var newEl = document.createElement('p');
              newEl.innerText = el.name;
              newEl.innerText += ' -Payed: ' + el.payed.toString() + '$';
              document.querySelector('.paymentHistory').appendChild(newEl);
            });
          });

          // <p> Drone - Baterie reincarcabila Lipo - 15.10.2020 -Payed:40$ </p>
          // <p> Drone - Baterie reincarcabila Lipo - 15.10.2020 -Payed:40$ </p>
          // <p> Drone - Baterie reincarcabila Lipo - 15.10.2020 -Payed:40$ </p>
          // <p> Drone - Baterie reincarcabila Lipo - 15.10.2020 -Payed:40$ </p>

    }
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


              </div>
              <div class="paymentHistory" >
                <p>My payments history </p>

              </div>
            </div>


          `;
        this.generate();
    } 
  }
  
  customElements.define("user-profile-component", UserProfileComponent);
  