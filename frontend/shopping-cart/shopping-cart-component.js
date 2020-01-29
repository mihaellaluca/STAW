class ShoppingCartComponent extends HTMLElement {

    connectedCallback() {

      this.innerHTML = `
            <link rel="stylesheet" href="shopping-cart/shopping-cart-style.css">
            <header-component></header-component>
            <h1>My Shopping Cart</h1>
            <div id="shoppingListAndPrice">
                <div id="shoppingList">
                    <div id="product">
                        <p id="title">Baterie reincarcabila Lipo</p>
                        <p id="description">Incarcator pentru baterii drone Hubsan, Syma, Wltoys, cu 5 sloturi</p>
                        <p id="price">Price: 20$</p>
                        <p id="pieces">Pieces: 1</p>
                        <button id="remove">Remove</button>
                    </div>
                    <div id="product">
                    <p id="title">Baterie reincarcabila Lipo</p>
                    <p id="description">Incarcator pentru baterii drone Hubsan, Syma, Wltoys, cu 5 sloturi</p>
                    <p id="price">Price: 20$</p>
                    <p id="pieces">Pieces: 2</p>
                    <button id="remove">Remove</button>
                </div>
                </div>
                <div id="shoppingPrice">
                <p id="total">TOTAL: 45$</p>
                <p id="price">Price: 40$</p>
                <p id="transport">Transport: 5$ </p>
                <button id="placeOrder">Place Order</button>
                </div>
            </div>

          `;
    }
  }
  
  customElements.define("shopping-cart-component", ShoppingCartComponent);
  