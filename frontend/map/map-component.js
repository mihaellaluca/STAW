class MapComponent extends HTMLElement {
  addMapScript(){
    var scriptNode;
    var scriptText;
    console.log('adding Map Scripts');
    // fetch('http://127.0.0.1:5505/frontend/map')
    // .then((res)=>{return res.json()})
    // .then((data)=>{
    //   let result = `    function initMap() {
    //     var uluru = {lat: 47.151726, lng: 27.587914};
    //     var map = new google.maps.Map(
    //         document.getElementById('map'), {zoom: 8, center: uluru});
    //     var marker = new google.maps.Marker({position: uluru, map: map});`;
    //     data.forEach((coord)=>{
    //       const {lat,lng} = coord;
    //       result +=`var marker = new google.maps.Marker({position:{${lat},${lng}},map:map});`
    //     });
    //     result +='}';
    //     scriptNode = document.createElement('script');
    //     scriptText = document.createTextNode(result);
    //     scriptNode.appendChild(scriptText);
    // });
    var scriptNode = document.createElement('script');
    var scriptText = document.createTextNode(`
    function initMap() {
      var uluru = {lat: 47.151726, lng: 27.587914};
      var map = new google.maps.Map(
          document.getElementById('map'), {zoom: 8, center: uluru});
      var marker = new google.maps.Marker({position: uluru, map: map});
    }`);
    scriptNode.appendChild(scriptText);
    var scriptNode2= document.createElement('script');

    var scriptNode2= document.createElement('script');

    scriptNode2.setAttribute('src','https://maps.googleapis.com/maps/api/js?key=AIzaSyBVpNtqt0RlR9f8zKAHeUdYgbJiEHV8jCM&callback=initMap');

    document.querySelector("body").appendChild(scriptNode);
    document.querySelector("body").appendChild(scriptNode2);

  }

    connectedCallback() {
      this.innerHTML = `
      <link rel="stylesheet" href="map/map-style.css">
    <header-component></header-component>
    <style>
      #map{
        height: 400px;  /* The height is 400 pixels */
        width: 100%;  /* The width is the width of the web page */
       }
    </style>
    <h3>My Google Maps Demo</h3>
    <h5 onclick="this.parentElement.addMapScript()">Click here to generate the map</h5>
    <div id="map" ></div>
    

`;
  
    }
  }
  
  customElements.define("map-component", MapComponent);
  