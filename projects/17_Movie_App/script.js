const API_URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=3fd2be6f0c70a2a598f084ddfb75487c`;

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.querySelector('#main');
const form = document.querySelector('#form');
const search = document.querySelector('#search');

getMovies(API_URL);

async function getMovies(url) {
	const res =	await fetch(url);
	const data = await res.json();

	showMovies(data.results);
}

function showMovies(movies) {
	main.innerHTML = '';

	movies.forEach((movie) => {
		const { title, overview , poster_path, vote_average } = movie;

		const movieEl = document.createElement('div');
		movieEl.classList.add('movie');

		movieEl.innerHTML = `
			<img src="${IMG_PATH + poster_path}" alt="">
		<div class="movie-info">
			<h2>${title}</h2>
		 <span class="${getVoteAverage(vote_average)}">${vote_average.toFixed(1)}</span>
		</div>
		<div class="overview">
		<h2>Overview</h2>
			${overview}
		</div>
		`
		
		main.appendChild(movieEl)
	});

}

function getVoteAverage(vote) {
	if (vote >= 8) {
		return 'green';
	} else if (vote >= 5) {
		return 'orange';
	} else {
		return 'red';
	}
}


form.addEventListener('submit', (e) => {
	e.preventDefault();

	const searchTerm = search.value;

	if (searchTerm && searchTerm !== '') {
		getMovies(SEARCH_API + searchTerm)

		search.value = '';
	} else {
		window.location.reload();
	}
})
