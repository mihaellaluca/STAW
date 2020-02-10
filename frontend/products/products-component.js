import { ShoppingCartComponent } from "./../shopping-cart/shopping-cart-component.js";

export class ProductsComponent extends HTMLElement {
  constructor(product) {
    super();
    this.newProduct = product;
  }

  connectedCallback() {
    if (this.newProduct.stock) {
      this.status = "available";
    } else {
      this.status = "not available";
    }
    this.innerHTML = `
        <div class="product-container" id="product-id">
            <p id="name">
           ${this.newProduct.name}
            </p>
            <p id="description">
            ${this.newProduct.description}
            </p>
            <div class="down">
              <div class="left">
                <p id="status">
                ${this.status}
                </p>
                <p id="price">
                ${this.newProduct.price}$
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
      localStorage.setItem(
        "shopping-list",
        JSON.stringify(ShoppingCartComponent.cartProducts)
      );
    });
  }
}

customElements.define("products-component", ProductsComponent);
