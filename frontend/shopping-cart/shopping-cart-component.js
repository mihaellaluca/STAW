import { CartProductComponent } from "./../shopping-cart/cart-products.js";

export class ShoppingCartComponent extends HTMLElement {
  static cartProducts = [];
  priceSum = 0;

  render() {
    let shoppingList = localStorage.getItem("shopping-list");
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

  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  async addInvoice(data) {
    console.log("Invoice datas to send:", data);
    let token = this.getCookie("token");
    const response = await fetch("http://localhost:3000/invoices/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        auth: token
      },
      body: JSON.stringify({
        userId: data.userId,
        products: data.products,
        totalPrice: data.totalPrice,
        date: ""
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
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
              <p id="total">TOTAL: ${this.priceSum + 5}$</p>
              <p id="price">Products: ${this.priceSum}$</p>
              <p id="transport">Transport: 5$ </p>
              <button id="placeOrder">Place Order</button>
            </div>
          `;

    this.render();

    document.getElementById("placeOrder").addEventListener("click", e => {
      console.log("Plasez comanda...");
      this.invoice = {
        userId: this.getCookie("userId"),
        products: ShoppingCartComponent.cartProducts,
        totalPrice: this.priceSum + 5,
        date: ""
      };
      this.addInvoice(this.invoice);
      window.alert("Order placed succesfully!");
      ShoppingCartComponent.cartProducts;
      const myNode = document.querySelector("#my-cart");
      while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
      }
      myNode.innerHTML = "No product added";
      myNode.style.backgroundColor = "transparent";
      document.getElementById("shoppingPrice").style.display = "none";
    });
  }
}

customElements.define("shopping-cart-component", ShoppingCartComponent);
