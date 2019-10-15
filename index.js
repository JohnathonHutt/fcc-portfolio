//jshint esversion:6

//hide navbar when scrolling down

//keep track of scrolling position
let lastScrollPos = 0;
let haveScrolledUp = false;

document.addEventListener('scroll', function(e) {
  //if Y value decreasing change haveScrolledUp to true
  if (window.scrollY < lastScrollPos) {
    haveScrolledUp = true;
  } else {
    haveScrolledUp = false;
  }

  lastScrollPos = window.scrollY;
});

//get the navbar
const navbar = document.getElementById("navbar");

function hideOrRevealNavbar() {
  //Reveals on scroll up
  if (haveScrolledUp) {
    if (navbar.classList.contains("hide")) {
      navbar.classList.remove("hide");
    }
  }
  //adds hide class to navbar on scroll down
  if (!haveScrolledUp) {
    if (!navbar.classList.contains("hide")) {
      navbar.classList.add("hide");
    }
  }
}

setInterval(hideOrRevealNavbar, 100);
