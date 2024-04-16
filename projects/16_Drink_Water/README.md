# 50 projects in 50 days - Drink Water

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

This project is a drink water app that helps you track your water consumption throughout the day. You can click on the small water cup icons to signify how many glasses of water you've had, and the app will visually represent your progress towards your daily goal of 2 liters.

### Screenshot

[Demo](https://github.com/jwben1/50projectsin50days/assets/132217074/f48fcb43-195f-4d14-a4bf-af3f7866372b)

## My process

### Built with

- HTML5 markup
- Flexbox
- Javascript

### What I learned

I leveraged JavaScript's nextElementSibling property in this project. This property allowed me to efficiently determine which small water cup icon should be highlighted next when a user clicks on a cup.
This ensures the highlighting stays accurate and reflects the user's intended selection.

```js
if (
  smallCups[idx].classList.contains("full") &&
  !smallCups[idx].nextElementSibling.classList.contains("full")
) {
  idx--;
}
```

### Continued development

I'll continue to learn more about Javascript Logic and DOM Manipulation.

## Author

- Linkedin - [Bienvenu Cyuzuzo](https://www.linkedin.com/in/bienvenu-cyuzuzo/)

**Note: This readme is heavily inspired by the frontend mentor readme template (https://www.frontendmentor.io/challenges/).**
