# 50 projects in 50 days - Movie App

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

This project is a movie browser app that fetches data from the TMDB (The Movie Database) API to display popular movies and allows users to search for specific titles.

### Screenshot

![Demo](https://github.com/jwben1/50projectsin50days/assets/132217074/9286938c-e3a6-4827-92e0-feba1085bcac)

## My process

### Built with

- HTML5 markup
- CSS
- Javascript (Fetch API, async/await)

### What I learned

- Fetching Data with Async/Await: I learned how to use async/await syntax for asynchronous programming with the Fetch API. This made my code cleaner and easier to read compared to using promises directly.

- Formatting Numbers with toFixed(1): I learned how to use the toFixed(1) method to round a number to one decimal place. This was helpful for displaying the vote average of movies with a single decimal point.

```js
`<span class="${getVoteAverage(vote_average)}">${vote_average.toFixed(
  1
)}</span>`;
```

### Continued development

Environment Variables: I'll delve deeper into using environment variables to store sensitive information like API keys. This will keep my code secure and avoids exposing the key directly in the code.

### Useful resources

- [Fetch API in JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [TMDB API](https://www.themoviedb.org/settings/api)

## Author

- Linkedin - [Bienvenu Cyuzuzo](https://www.linkedin.com/in/bienvenu-cyuzuzo/)

**Note: This readme is heavily inspired by the frontend mentor readme template (https://www.frontendmentor.io/challenges/).**
