import { ShoppingCartComponent } from "./../shopping-cart/shopping-cart-component.js";

export class CartProductComponent extends HTMLElement {
  constructor(product) {
    super();
    this.newProduct = product;
  }

  connectedCallback() {
    this.innerHTML = `
        <div id="product">
            <p id="title"> ${this.newProduct.name}</p>
            <p id="description"> ${this.newProduct.description}</p>
            <p id="price"> ${this.newProduct.price}</p>
            <p id="pieces">Pieces: 1 </p>
            <button id="remove">Remove from cart</button>
        </div>
         
    `;

    document.getElementById("remove").addEventListener("click", e => {
        e.preventDefault();
        window.alert("Product removed from cart!");
        for (let index in ShoppingCartComponent.cartProducts) {
            if (ShoppingCartComponent.cartProducts[index] === this.newProduct) {
              console.log("removing item");
              ShoppingCartComponent.cartProducts.splice(index,1);
              break;
            }
            
          }
        localStorage.setItem('shopping-list', JSON.stringify(ShoppingCartComponent.cartProducts));

        
    });

  }
}

customElements.define("cartproduct-comp", CartProductComponent);
