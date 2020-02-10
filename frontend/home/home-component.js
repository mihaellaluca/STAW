import './../products/products-component.js';

class HomeComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="home/home-style.css">
    <link rel="stylesheet" href="./products/products-component.css">

    <header-component></header-component>
    <div class="title">
        
        <h3> World of batteries and energy trades </h3>
        
    </div>
    <div class="container">
        <div class="filter-side">
            <a href="">See the map of charging stations >></a>
            <br><br>
            <input type="text" placeholder="Search.." onkeyup="filter()">
            <br><br>
            <div class="first-box">
                <label>Categories:</label><br>
                <input type="checkbox" name="Drones" value="Drones">Drones
                <input type="checkbox" name="Bicycles" value="Bicycles">Bicycles
                <input type="checkbox" name="Cars" value="Cars">Cars
                <br><label>Brands:</label><br>
                <input type="checkbox" name="brand1" value="brand1">Brand1
                <input type="checkbox" name="brand2" value="brand2">Brand2
                <input type="checkbox" name="brand3" value="brand3">Brand3
                
            </div>
            <br>
            <div class="second-box">
                <label class="price">Price(currency):</label><br>
                <input type="checkbox" name="first" value="first">10-100 <br>
                <input type="checkbox" name="second" value="second">100-300 <br>
                <input type="checkbox" name="third" value="third">300-500 <br>
                <input type="checkbox" name="third" value="third">500 + <br>

            </div>
        </div>
    
        <div class="items">
          <products-component></products-component>
        </div>
          `;


  }
}

customElements.define("home-component", HomeComponent);
