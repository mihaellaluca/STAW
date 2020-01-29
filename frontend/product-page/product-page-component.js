class ProductPageComponent extends HTMLElement {

    connectedCallback() {

      this.innerHTML = `
            <link rel="stylesheet" href="product-page/product-page-style.css">
            <header-component></header-component>
            <h1 id="title">Batteries for drones</h1>
            <div class="productPictureNameAndProduct">
              <img id="productImage"  src = "./profilepic.jpg" alt="logo" />
              <div class="productAndProducer">
              <p id="product">Product</p>
              <p>HOLY STONE</p>
              <p id="producer">Producer:</p>
              <p>YUNIQUE</p>
              </div>
              <div id="priceAddCartAddFav">
              <p id="price">Price: 20$</p>
              <button id="addCart">Add to cart</button>
              <button id="addFavourites">Add to favourites</button>
              </div>
              <div class="description">
              <p id="productDescription">Product Description</p>
              <p id="description">Pachetul include: 1 baterie De inalta calitate si controlate 
              in depozitele noastre Pachet: 2 x 750mAh baterie de 3.7V Incarcare 
              rapida - usor de utilizat chiar si pentru incepatori Baterie compatibila 
              cu randament excelent si producator de calitate italiana - bateria cu baterie 
              - quadrocopter - cu barca - radio controlat
              </p>
              </div>
            </div>


          `;
    }
  }
  
  customElements.define("product-page-component", ProductPageComponent);
  