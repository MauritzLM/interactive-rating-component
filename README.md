# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot
![mobile1](./images/screenshot-mobile1.png)
![mobile2](./images/screenshot-mobile2.png)
![desktop1](./images/screenshot-dekstop1.png)
![desktop2](./images/screenshot-desktop2.png)

### Links

- Solution URL: (https://your-solution-url.com)
- Live Site URL: (https://mauritzlm.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- javascript

### What I learned

Building the rating system with radio buttons was really fun to learn.

Using appearance: none to reset default browser styles.

```css
form input {
  appearance: none;
}
```
Using display grid on the radio button to center align :before content: 

```css
input[type="radio"] {
  display: grid;
  place-content: center;
}
```
### Continued development

1. I want to keep getting better with css and learning how to solve various problems with it.
2. I also want to keep learning about best practices for css and html.

### Useful resources

- [modern css solutions article](https://moderncss.dev/pure-css-custom-styled-radio-buttons/) - This article taught me how to create custom radio buttons.
- [rating-system with radio buttons](https://dev.to/grahamthedev/5-star-rating-system-actually-accessible-no-js-no-wai-aria-3idl) - This article showed me that one can create a custom rating system using radio buttons.

## Author

- Frontend Mentor - [@MauritzLM](https://www.frontendmentor.io/profile/MauritzLM)




