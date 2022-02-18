# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![screenshot](images/screenshot1.png)
![screenshot](images/screenshot2.png)

### Links

- Solution URL: [Solution](https://github.com/jkellerman/interactive-pricing-component)
- Live Site URL: [Live Site](https://jkellerman.github.io/interactive-pricing-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- ES6 JavaScript

### What I learned

In this project I learned how to create a custom range slider. To do this you have to remove the webkit slider thumb and set webkit-appearance to "none". For firefox, you have to take this a step further and remove moz-range-thumb and add styles to the mozilla-range-progress. If you don't do the latter the progress bar that you create on top will overlap the range thumb in mozilla and z-index will not fix this. See code snippet css below.

I also learned how to create a toggle switch using CSS. I believe you could also create this with css & js and using click event to toggle active class. However using :checked instead seemed simple and easy to access in JS. See code below.

Another handy tool I learned was the replace method. With this you can return a new string with or all matches of a pattern replaced by a replacement. See js snippet below where I replaced a dollar sign with "".

```css
.slider::-moz-range-progress {
  background: var(--Soft-Cyan-Full-Slider-Bar);
  height: 8px;
  border-radius: 5px;
}
```

```css
input[type="checkbox"] {
  width: 43px;
  height: 22px;
  -webkit-appearance: none;
  background: var(--Light-Grayish-Blue-Toggle-Background);
  outline: none;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  transform: translateY(3px);
}

input:checked[type="checkbox"] {
  background: var(--Toggle-Active-Background);
  transition: 0.25s ease-in-out;
}

input[type="checkbox"]::before {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  top: 4px;
  left: 4px;
  border-radius: 50%;
  background: #fff;
  transition: 0.25s;
}

input:checked[type="checkbox"]::before {
  left: 25px;
}
```

```js
const replacedAmount = output.innerText.replace(/\$/g, "")
};
```

### Useful resources

- [w3 schools](https://www.w3schools.com/howto/howto_js_rangeslider.asp) - This helped creating a range slider.
- [code grepper](https://www.codegrepper.com/code-examples/javascript/frameworks/dist/js+remove+dollar+sign+from+string) - This shows how to remove something from a string, in this case a dollar sign ($).

## Author

- Frontend Mentor - [@jkellerman](https://www.frontendmentor.io/profile/yourusername)
