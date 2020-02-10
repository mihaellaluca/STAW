class UserProfileComponent extends HTMLElement {
  getCookie(cname) {
		var name = cname + '=';
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return '';
	}
      //http://localhost:3000/users/id-ul userului
      //http://localhost:3000/invoices/id-ul userului
    // removeFromFavourites(){
    //   console.log(this.parentElement.innerText.split("R",1));
    //   var au= this.getCookie('token');
    //   console.log(au);
    //   fetch('http://localhost:3000/users/removeFavorite', {
    //     method: 'POST',
    //     headers: {'Content-Type':'application/jsnon',auth: this.getCookie('token') },
    //     body: JSON.stringify({ userId:this.getCookie('userId'),productId:this.parentElement.innerText.split("R",1)})
    //   })
    //     .then((res) => {
    //       return res.json();
    //     });
      

    // }
    generate(){
      const userId = this.getCookie('userId');
      fetch(`http://localhost:3000/users/${userId}`, {
        method: 'GET',
        headers: new Headers({ auth: `${this.getCookie('token')}` })
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          var data2=[];
          data2.push(data);
          console.log(data2);
          data2.forEach((el) =>{
          const userName = document.createElement('p');
          userName.innerText=el.firstName + ' ' + el.lastName;
          document.querySelector('.nameAndFavourites').appendChild(userName);
          const myFav = document.createElement('p');
          myFav.innerText = 'My favorites:';
          document.querySelector('.nameAndFavourites').appendChild(myFav);
          const ulList = document.createElement('ul');
          document.querySelector('.nameAndFavourites');
          for(var i = 0; i< el.favoriteProducts.length;i++){
            var liEl = document.createElement('li');
            var button = document.createElement('button');
            button.addEventListener('click',function(){
              console.log(this.parentElement.innerText.split("R",1));
              var au= this.parentElement.parentElement.parentElement.parentElement.parentElement.getCookie('token');
              console.log(au);
              console.log(this.parentElement.parentElement.parentElement.parentElement.parentElement.getCookie('userId'));
              console.log(this.parentElement.innerText.split("Remove",1)[0]);
              fetch('http://localhost:3000/users/removeFavorite', {
                method: 'POST',
                headers: {'Content-Type':'application/json',auth: this.parentElement.parentElement.parentElement.parentElement.parentElement.getCookie('token').toString() },
                body: JSON.stringify({userId:this.parentElement.parentElement.parentElement.parentElement.parentElement.getCookie('userId'),productId:this.parentElement.innerText.split("Remove",1)[0]})
              })
                .then((res) => {
                  return res.json();
                });
              
        
            });
            button.innerText = 'Remove';
            liEl.innerText = el.favoriteProducts[i];
            liEl.appendChild(button);
            ulList.appendChild(liEl);
  
          }
          document.querySelector('.nameAndFavourites').appendChild(ulList);
        });

        });

        fetch(`http://localhost:3000/invoices/${userId}`, {
          method: 'GET',
          headers: new Headers({ auth: `${this.getCookie('token')}` })
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            data.forEach((el) =>{
              console.log(el);
              for(var i=0;i<el.products.length;i++){

                var newEl = document.createElement('p');
                newEl.innerText =  ' -Nume Produs: ' + el.products[i].name;
                newEl.innerText += ' -Model: ' + el.products[i].model.toString();
                newEl.innerText += ' -Producator: ' + el.products[i].producer.toString();
                newEl.innerText += ' -Payed: ' + el.products[i].price.toString() + '$';
                document.querySelector('.paymentHistory').appendChild(newEl);
              }
            });
          });

          // <p> Drone - Baterie reincarcabila Lipo - 15.10.2020 -Payed:40$ </p>
          // <p> Drone - Baterie reincarcabila Lipo - 15.10.2020 -Payed:40$ </p>
          // <p> Drone - Baterie reincarcabila Lipo - 15.10.2020 -Payed:40$ </p>
          // <p> Drone - Baterie reincarcabila Lipo - 15.10.2020 -Payed:40$ </p>

    }
    connectedCallback() {
      this.tk = this.getCookie('token');
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
  