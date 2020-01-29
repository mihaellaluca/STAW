class ProductsComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <link rel="stylesheet" href="products/products-component.css">
        <div class="product-container">
            <p id="specific-product">
            Product name here - Producer - Type
            </p><br>
            <p id="description">
            Incarcator pentru baterii drone Hubsan, Syma, Wltoys, cu 5 sloturi
            </p><br>
            
            <p id="status">
            available
            </p><br>
            <p id="price">
            Price: 20$
            </p>
            <button id="add">Add to cart</button>
        </div>
        
        `;
  }
}

customElements.define("products-component", ProductsComponent);
