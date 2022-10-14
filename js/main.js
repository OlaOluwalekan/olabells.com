// DOM ELEMENT SELECTION
const navbar = document.querySelector(".nav-bar");
const topbar = document.querySelector(".top-bar");
const midbar = document.querySelector(".mid-bar");
const bottombar = document.querySelector(".bottom-bar");
const navItems = document.querySelector(".nav-items");
const overlay = document.querySelector(".overlay");

// TO OPEN AND CLOSE NAV BAR
let navClosed = true;

window.onresize = () => {
  let windowWidth = window.innerWidth;
  console.log(windowWidth);

  if (windowWidth > 600 && !navClosed) {
    RemoveOverlay();
  } else if (windowWidth < 600 && !navClosed) {
    AddOverlay();
  }
};

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
    CloseNav();
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
  AddOverlay();
};

const CloseNav = () => {
  navItems.style.top = "-600px";
  RemoveOverlay();
};

const AddOverlay = () => {
  overlay.style.display = "flex";
  document.body.style.overflow = "hidden";
};

const RemoveOverlay = () => {
  overlay.style.display = "none";
  document.body.style.overflow = "unset";
};
