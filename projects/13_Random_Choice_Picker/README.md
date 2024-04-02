# 50 projects in 50 days - Random Choice Picker

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Enter choices and separate them by a period.
- Hit Enter when done and the app randomly selects a choice.

For example, a user could enter 'Pizza, Movie, Book' as their choices, and the app would randomly pick one for them.

### Screenshot

![desktop](./assets/desktop.webm)
![mobile](./assets/mobile.webm)

### Links

// not yet

- Live Site URL: [Live Site](https://your-live-site-url.com)

## My process

### Built with

- HTML5 markup
- Flexbox
- Mobile-first workflow
- Javascript (setInterval, setTimeout, .trim())

### What I learned

As web developers sometimes we don't get to choose what people enter into our forms we just have to deal with it. This project emphasized the importance of handling unexpected user input. I learned how to use .trim() to effectively remove any leading or trailing whitespace from user entries, ensuring the app processes the choices accurately.

```js
const tags = input
  .split(".")
  .filter((tag) => tag.trim() != "")
  .map((tag) => tag.trim());
```

### Continued development

I'd like to keep exploring how to use .filter() and .map() for more complex data manipulation tasks in future projects.

### Useful resources

- [What is .trim() String Method](https://www.youtube.com/watch?v=akv8ejM9nTU)
- [Trim method on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)

## Author

- Linkedin - [Bienvenu Cyuzuzo](https://www.linkedin.com/in/bienvenu-cyuzuzo/)

**Note: This readme is heavily inspired by the frontend mentor readme template (https://www.frontendmentor.io/challenges/).**
