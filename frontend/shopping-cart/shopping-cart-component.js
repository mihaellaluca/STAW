import { CartProductComponent } from "./../shopping-cart/cart-products.js";

export class ShoppingCartComponent extends HTMLElement {
  static cartProducts = [];
  priceSum = 0;

  render() {
    let shoppingList = localStorage.getItem('shopping-list');
    // console.log(typeof(shoppingList));
    if (ShoppingCartComponent.cartProducts.length === 0) {
      const cartProduct = document.querySelector("#my-cart");
      cartProduct.innerHTML = "No product added";
      cartProduct.style.backgroundColor = "transparent";
      document.getElementById("shoppingPrice").style.display = "none";
    } else {
      ShoppingCartComponent.cartProducts.forEach(product => {
        const cartProduct = document.querySelector("#my-cart");
        const comp = new CartProductComponent(product);
        comp.content = product;
        cartProduct.appendChild(comp);
      });
    }
  }

  connectedCallback() {
    ShoppingCartComponent.cartProducts.forEach(product => {
      let productPrice = product.price.match(/\d/g).join("");
      this.priceSum += parseFloat(productPrice);
    });

    this.innerHTML = `
            <link rel="stylesheet" href="shopping-cart/shopping-cart-style.css">
            <header-component></header-component>
            <h1>My Shopping Cart</h1>
            <div class="cart-products" id="my-cart"></div>
            <br>
            <div id="shoppingPrice">
              <p id="total">TOTAL: ${this.priceSum+5}$</p>
              <p id="price">Products: ${this.priceSum}$</p>
              <p id="transport">Transport: 5$ </p>
              <button id="placeOrder">Place Order</button>
            </div>
          `;

    this.render();
  }
}

customElements.define("shopping-cart-component", ShoppingCartComponent);
