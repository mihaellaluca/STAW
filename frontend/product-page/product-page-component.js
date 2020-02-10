class ProductPageComponent extends HTMLElement {
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
  addToFavorite(){
    console.log('addToFavorite');
    console.log(this.getCookie('userId'));
    fetch('http://localhost:3000/users/addFavorite', {
      method: 'POST',
      headers: {'Content-Type':'application/json', auth: `${this.getCookie('token')}` },
      body: JSON.stringify({'Content-Type':'application/json', userId:this.getCookie('userId'),productId:document.querySelector('#productName').innerText })
    })
      .then((res) => {
        return res.json();
      });
    

  }
    generate(){
      var productId = localStorage.getItem('productId');
      fetch(`http://localhost:3000/products/${productId}`, {
        method: 'GET',
        headers: new Headers({auth: `${this.getCookie('token')}`})
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          var data2 =[];
          data2.push(data);
          data2.forEach((el) =>{
            console.log(el);
            var name = document.createElement('p');
            name.innerText = el.type;
            var producer = document.createElement('p');
            producer.innerText = 'Producer:';
            producer.setAttribute('id','producer');
            var producerName = document.createElement('p');
            producerName.innerText = el.producer;
            document.querySelector('.productAndProducer').appendChild(name);
            document.querySelector('.productAndProducer').appendChild(producer);
            document.querySelector('.productAndProducer').appendChild(producerName);

            var price = document.createElement('p');
            price.setAttribute('id','price');
            price.innerText = 'Price: ' + el.price + '$';
            document.querySelector('#priceAddCartAddFav').insertBefore(price,document.querySelector('#priceAddCartAddFav').firstChild);

            document.querySelector('#description').innerText = el.description;
            document.querySelector('#productName').innerText = el.name;
          });
        });
        // <p>HOLY STONE</p>
        // <p id="producer">Producer:</p>
        // <p>YUNIQUE</p>
        // <p id="price">Price: 20$</p>
    }
    connectedCallback() {

      this.innerHTML = `
            <link rel="stylesheet" href="product-page/product-page-style.css">
            <header-component></header-component>
            <h1 id="title">Product Page</h1>
            <div class="productPictureNameAndProduct">
              <img id="productImage"  src = "./profilepic.jpg" alt="logo" />
              <div class="productAndProducer">
              <p id="product">Product</p>

              </div>
              <div id="priceAddCartAddFav">
              
              <button id="addCart">Add to cart</button>
              <button id="addFavourites" onclick="this.parentElement.parentElement.parentElement.addToFavorite()">Add to favorites</button>
              </div>
              <div class="description">
              <p>Product Name </p>
              <p id="productName"></p>
              <p id="productDescription">Product Description</p>
              <p id="description">
              </p>
              </div>
            </div>


          `;
          this.generate();
    }
  }
  
  customElements.define("product-page-component", ProductPageComponent);
  