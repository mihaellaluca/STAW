import "./../products/products-component.js";
import { ProductsComponent } from "./../products/products-component.js";
import "./../map/map-component.js";

class HomeComponent extends HTMLElement {
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
  async getAllProducts() {
    let token = this.getCookie("token");
    const response = await fetch("http://localhost:3000/products/", {
      headers: { auth: token }
    })
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
        data.forEach(product => {
          const comp = new ProductsComponent(product);
          comp.content = product;
          const items = document.querySelector("#items");
          items.appendChild(comp);
        });
      })
      .catch(err => console.log(err));
  }

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
            <a href="/frontend/map">See the map of charging stations >></a>
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
    
        <div class="items" id="items">
          
        </div>
          `;

    this.getAllProducts();
  }
}

customElements.define("home-component", HomeComponent);
