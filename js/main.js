// TO OPEN AND CLOSE NAV BAR

const navbar = document.querySelector(".nav-bar");
const topbar = document.querySelector(".top-bar");
const midbar = document.querySelector(".mid-bar");
const bottombar = document.querySelector(".bottom-bar");

let navClosed = true;

navbar.onclick = () => {
  if (navClosed) {
    ResizeBar(0);
    setTimeout(() => {
      RotateBar(topbar, 45);
      RotateBar(bottombar, -45);
    }, 100);
    navClosed = false;
  } else {
    RotateBar(topbar, 0);
    RotateBar(bottombar, 0);
    setTimeout(() => {
      ResizeBar(100);
    }, 100);
    navClosed = true;
  }
};

const RotateBar = (bar, angle) => {
  bar.style.transform = `rotate(${angle}deg)`;
  // bar.style.width = `${width}%`;
};

const ResizeBar = (width) => {
  midbar.style.width = `${width}%`;
};
