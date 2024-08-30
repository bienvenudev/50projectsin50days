# 50 projects in 50 days - Template

## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge
The goal of this project was to create a background slider where users can navigate through different images using left and right arrows. I focused on ensuring responsiveness and accurate positioning of elements to create a smooth user experience.

## My process

### Built with

- HTML5
- CSS (Flexbox, Positioning)
- JavaScript (DOM Manipulation, Event Handling)
### What I learned

In this project, I improved my skills in making web pages responsive by working with positioning and transitions. One of the key things I focused on was setting the background image dynamically using JavaScript, ensuring the transitions between slides were smooth.

```js
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
```

The HTML structure supports accessibility with an invisible <h1> to provide structure for screen readers:

```html
<h1 class="sr-only">Background Slider Challenge</h1>
```

### Continued development

I plan to continue exploring more advanced CSS animations and improving the responsiveness of complex layouts. This project has motivated me to experiment further with positioning techniques in CSS.

## Author

- Linkedin - [Bienvenu Cyuzuzo](https://www.linkedin.com/in/bienvenu-cyuzuzo/)

**Note: This readme is heavily inspired by the frontend mentor readme template (https://www.frontendmentor.io/challenges/).**
