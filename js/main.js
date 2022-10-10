// DOM ELEMENT SELECTION
const navbar = document.querySelector(".nav-bar");
const topbar = document.querySelector(".top-bar");
const midbar = document.querySelector(".mid-bar");
const bottombar = document.querySelector(".bottom-bar");
const navItems = document.querySelector(".nav-items");
const overlay = document.querySelector(".overlay");

// let navIsClosed = true;

// TO OPEN AND CLOSE NAV BAR
let navClosed = true;

navbar.onclick = () => {
  if (navClosed) {
    ResizeBar(0);
    setTimeout(() => {
      RotateBar(topbar, 45);
      RotateBar(bottombar, -45);
    }, 100);
    OpenNav();
    navClosed = false;
  } else {
    RotateBar(topbar, 0);
    RotateBar(bottombar, 0);
    setTimeout(() => {
      ResizeBar(100);
    }, 100);
    closeNav();
    navClosed = true;
  }
};

const RotateBar = (bar, angle) => {
  bar.style.transform = `rotate(${angle}deg)`;
};

const ResizeBar = (width) => {
  midbar.style.width = `${width}%`;
};

const OpenNav = () => {
  navItems.style.top = "50px";
  overlay.style.display = "flex";
  document.body.style.overflow = "hidden";
  // document.body.style.display = "none";
};

const closeNav = () => {
  navItems.style.top = "-600px";
  overlay.style.display = "none";
  document.body.style.overflow = "unset";
};
