class FeedComponent extends HTMLElement {
	connectedCallback() {
		fetch('http://localhost:3000/rss').then((response) => response.text()).then((str) => {
			console.log(str);
			this.render(str);
		});
	}
	render(data) {
		this.innerHTML = `<textarea>${data}</textarea>`;
	}
}
customElements.define('feed-component', FeedComponent);
