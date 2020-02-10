import { ShoppingCartComponent } from "./../shopping-cart/shopping-cart-component.js";

class ProductsComponent extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
        <div class="product-container" id="product-id">
            <p id="name">
            Product name here - Producer - Type
            </p>
            <p id="description">
            Incarcator pentru baterii drone Hubsan, Syma, Wltoys, cu 5 sloturi
            </p>
            <div class="down">
              <div class="left">
                <p id="status">
                 available
                </p>
                <p id="price">
                Price: 20$
                </p>
              </div>
            <button class="btn" id="btn">Add to cart</button>
            </div>
        </div>
        <hr>
        
        `;

    document.getElementById("btn").addEventListener("click", e => {
      e.preventDefault();
      var product = {
        name: document.getElementById("name").innerText,
        description: document.getElementById("description").innerText,
        status: document.getElementById("status").innerText,
        price: document.getElementById("price").innerText,
        pieces: 1
      };
      ShoppingCartComponent.cartProducts.push(product);
      window.alert("Product added to cart!");
      console.log("array:", ShoppingCartComponent.cartProducts);
      localStorage.setItem('shopping-list', JSON.stringify(ShoppingCartComponent.cartProducts));
    });
  }
}

customElements.define("products-component", ProductsComponent);
