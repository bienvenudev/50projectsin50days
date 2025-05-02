const jokeButton = document.querySelector("#jokeBtn");
const jokeText = document.querySelector("#joke");

generateJoke();

jokeButton.addEventListener("click", generateJoke);

async function generateJoke() {
  jokeButton.disabled = true;
  jokeButton.textContent = "Loading...";

  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const response = await fetch("https://icanhazdadjoke.com/", config);
    const data = await response.json();

    displayJoke(data.joke);
  } catch (err) {
    displayJoke("Failed to fetch a joke. Please try again.");
    console.error("Error:", err);
  } finally {
    jokeButton.disabled = false;
    jokeButton.textContent = "Get Another Joke";
  }
}

function displayJoke(joke) {
  jokeText.textContent = joke;
}
