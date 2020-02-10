import { ShoppingCartComponent } from "./../shopping-cart/shopping-cart-component.js";

export class ProductsComponent extends HTMLElement {
  constructor(product) {
    super();
    this.newProduct = product;
    console.log("newProduct!!", this.newProduct);
  }

  connectedCallback() {
    if (this.newProduct.stock) {
      this.status = "available";
    } else {
      this.status = "not available";
    }

    this.innerHTML = `
        <div class="product-container" id=${this.newProduct._id}>
            <a href="/frontend/product" id="name">
           ${this.newProduct.name}
            </a>
            <p id="description">
            ${this.newProduct.description}
            </p>
            <div class="down">
              <div class="left">
                <p id="status">
                ${this.status}
                </p>
                <p id="price">
                ${this.newProduct.price}
                </p>
              </div>
            <button class="btn" id="btn${this.newProduct._id}">Add to cart</button>
            </div>
        </div>
        <hr>
        
        `;

    // console.log("product", typeof(this.newProduct._id),this.newProduct._id);
    // console.log("parent element: ", document.getElementById(this.newProduct._id));
    // console.log("child element: ", document.getElementById(this.newProduct._id).children[2].children[0].children[1].innerText);
    document
      .getElementById("btn" + this.newProduct._id)
      .addEventListener("click", e => {
        e.preventDefault();
        var product = {
          id: this.newProduct._id,
          name: document.getElementById(this.newProduct._id).children[0]
            .innerText,
          description: document.getElementById(this.newProduct._id).children[1]
            .innerText,
          status: document.getElementById(this.newProduct._id).children[2]
            .children[0].children[0].innerText,
          price: document.getElementById(this.newProduct._id).children[2]
            .children[0].children[1].innerText,
          model: this.newProduct.type,
          producer: this.newProduct.producer,
          pieces: 1
        };
        ShoppingCartComponent.cartProducts.push(product);
        window.alert("Product added to cart!");
        localStorage.setItem(
          "shopping-list",
          JSON.stringify(ShoppingCartComponent.cartProducts)
        );
      });

    document
      .getElementById(this.newProduct._id)
      .children[0].addEventListener("mouseover", e => {
        console.log("putem adauga");
        localStorage.setItem("productId", this.newProduct._id);
      });
  }
}

customElements.define("products-component", ProductsComponent);
