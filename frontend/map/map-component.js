class MapComponent extends HTMLElement {
	getCookie(cname) {
		var name = cname + '=';
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return '';
	}
	addMapScript() {
		var scriptNode;
		var scriptText;
		console.log('adding Map Scripts');
		fetch('http://localhost:3000/products/coords', {
			method: 'GET',
			headers: new Headers({ auth: `${this.getCookie('token')}` })
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				let result = `    function initMap() {
        var uluru = {lat: 47.151726, lng: 27.587914};
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 8, center: uluru});
        var marker = new google.maps.Marker({position: uluru, map: map});`;
				data.forEach((coord) => {
					const { lat, lng } = coord;
					result += `var marker = new google.maps.Marker({position:{lat:${lat},lng:${lng}},map:map});`;
				});
				result += '}';
				scriptNode = document.createElement('script');
				scriptText = document.createTextNode(result);
				scriptNode.appendChild(scriptText);
				document.querySelector('body').appendChild(scriptNode);
			});
		console.log(this.getCookie('token'));
		// var scriptNode = document.createElement('script');
		// var scriptText = document.createTextNode(`
		// function initMap() {
		//   var uluru = {lat: 47.151726, lng: 27.587914};
		//   var map = new google.maps.Map(
		//       document.getElementById('map'), {zoom: 8, center: uluru});
		//   var marker = new google.maps.Marker({position: uluru, map: map});
		// }`);
		//scriptNode.appendChild(scriptText);
		var scriptNode2 = document.createElement('script');

		var scriptNode2 = document.createElement('script');

		scriptNode2.setAttribute(
			'src',
			'https://maps.googleapis.com/maps/api/js?key=AIzaSyBVpNtqt0RlR9f8zKAHeUdYgbJiEHV8jCM&callback=initMap'
		);

		document.querySelector('body').appendChild(scriptNode2);
	}

	connectedCallback() {
		this.innerHTML = `
      <link rel="stylesheet" href="map/map-style.css">
    <header-component></header-component>
    <style>
      #map{
        height: 570px;  /* The height is 400 pixels */
        width: 100%;  /* The width is the width of the web page */
       }
    </style>
    <h3>My Google Maps Demo</h3>
    <h5 onclick="this.parentElement.addMapScript()">Click here to generate the map</h5>
    <div id="map" ></div>
    

`;
	}
}

customElements.define('map-component', MapComponent);
