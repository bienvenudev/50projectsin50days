const jokeEl = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

generateJoke();

jokeBtn.addEventListener('click', generateJoke);

// Using async/await
async function generateJoke() {
	const config = {
		headers : {
		'Accept': 'application/json'
	}
};

	const response =	await fetch('https://icanhazdadjoke.com/', config);
	const data = await response.json();

	jokeEl.innerText = data.joke
} 

// Using .then()
/* 
function generateJoke() {
	const config = {
		headers : {
		'Accept': 'application/json'
	}
};

	fetch('https://icanhazdadjoke.com/', config)
	.then(response => response.json())
	.then(data => {
		jokeEl.innerText = data.joke
	});
} 
*/
