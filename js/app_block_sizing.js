"use strict";

const body = document.querySelector("body");
const div = document.querySelector("div");

let isResizing = false;
let currentX = 0;
let currentY = 0;
let initialWidth = 0;
let initialHeight = 0;
let currentWidth = 0;
let currentHeight = 0;

div.addEventListener("mousedown", (event) => {
  /* checking that event is at the bottom right 50x50 px */
  if (
    event.offsetX > div.offsetWidth - 50 ||
    event.offsetY > div.offsetHeight - 50
  ) {
    body.style.cursor = "move";
    isResizing = true;

    /* current coordinates of the cursor */
    currentX = event.clientX;
    currentY = event.clientY;

    /* current block sizes */
    initialWidth = div.offsetWidth;
    initialHeight = div.offsetHeight;

    /* not to forget to ask Misha about: */
    // initialWidth = parseInt(getComputedStyle(div).width, 10);
    // initialHeight = parseInt(getComputedStyle(div).height, 10);
  }
});

document.addEventListener("mousemove", (event) => {
  if (isResizing) {
    /* resize by adding the difference between the previous and current cursor coordinates */
    currentWidth = initialWidth + event.clientX - currentX;
    currentHeight = initialHeight + event.clientY - currentY;

    /* adding "px" for css rules */
    div.style.width = `${currentWidth}px`;
    div.style.height = `${currentHeight}px`;

    /* some information for the user ))) */
    div.innerText = `Current block size is: ${div.offsetWidth} x ${div.offsetHeight} px`;
  }
});

document.addEventListener("mouseup", (event) => {
  body.style.cursor = "default";
  isResizing = false;
});
