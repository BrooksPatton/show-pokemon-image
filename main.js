var form = document.getElementById('pokemon');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	var num = e.target.elements.id.value;

	getPokemon(num)
		.then(function(data) {
			var url = data.sprites.front_default;

			addImageToDom(url);
		});
});

function getPokemon(id) {
	var url = 'http://pokeapi.co/api/v2/pokemon/' + id;

	return fetch(url)
		.then(function(res) {
			return res.json();
		});
}

function addImageToDom(url) {
	var main = document.getElementsByTagName('main')[0];
	var img = document.createElement('img');

	img.setAttribute('src', url);
	main.append(img);
}
