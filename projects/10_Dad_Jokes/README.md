# 50 projects in 50 days - Dad Jokes Generator

This project builds a Dad Jokes Generator where users click a button to be presented with a pun.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Generate a dad joke by clicking the Generate Joke button

### Screenshot

![desktop](https://github.com/jwben1/50projectsin50days/assets/132217074/4f75b5bf-3c4f-486c-bcc9-7ffe2f02601d)


### Links

// not yet

- Live Site URL: [Live Site](https://your-live-site-url.com)

### Built with

- HTML5 markup
- Flexbox
- Mobile-first workflow
- The Fetch API in JavaScript

### What I learned

In this project, I gained valuable insights into fetching APIs using different methods:

#### Using `.then()`

I learned how to fetch APIs using the get method and handle asynchronous operations with `.then()`.

Initially, I struggled to understand why we need to call `.then()` twice:

```js
fetch("https://icanhazdadjoke.com/", config)
  .then((response) => response.json())
  .then((data) => (jokeEl.innerText = data.joke));
```

#### Using `async/await` for cleaner asychronous code:

By labeling the function as async and using await inside it, The code becomes cleaner and easier to read compared to chaining multiple `.then()` calls.

```js
async function fetchJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", config);
  const data = await response.json();
  jokeEl.innerText = data.joke;
}
```

### Continued development

I'm still not comfortable with fetching APIs and different methods of doing it, but I will continue using these methods to achieve it.
In this course, I was also introduced to the Postman API platform, and I'll check it out.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - Fetch API in JavaScript documentation.
- [Dad Jokes](https://icanhazdadjoke.com/api) - Dad joke APIs.

## Author

- Linkedin - [Bienvenu Cyuzuzo](https://www.linkedin.com/in/bienvenu-cyuzuzo/)

**Note: This readme is heavily inspired by the frontend mentor readme template (https://www.frontendmentor.io/challenges/).**
