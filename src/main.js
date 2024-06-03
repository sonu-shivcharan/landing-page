const select = (elem)=>document.querySelector(elem);
const selectAll = (elem)=>document.querySelectorAll(elem);
const header = select("#header");
const home = select("#home");
const navBar = select("#header #nav-bar");
const elements = selectAll(".headline-container .slide-up-animation");
const menuIcon = select("#header .menu-icon");
const sidenav = select("#side-nav");


menuIcon.onclick = () => {
  sidenav.style.transform = "translateX(0%)";
};
document.addEventListener("click", (e) => {
  if (e.target !== sidenav && e.target !== menuIcon) {
    sidenav.style.transform = "translateX(-100%)";
  }
});

for (let elem of elements) {
  elem.style.opacity = '0';
}
function slideUpAnimation() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.animation = `slideUp ${0.3*(i+1)}s ease-out 1`
    elements[i].style.opacity = '1';
  }
}

window.addEventListener("load", slideUpAnimation)


function handleScroll() {
  const title = header.getElementsByTagName("h1")[0];
  const scrollTop = window.scrollY;

  if (scrollTop >= 100) {
    // Show the title and change header styles for scrolled state
    title.style.display = "block";
    header.style.backgroundColor = "#fff";
    header.style.color = "#000";
  } else {
    // Hide the title and change header styles for non-scrolled state
    title.style.display = "none";
    header.style.backgroundColor = "transparent";
    header.style.color = "#fff";
  }
}

window.addEventListener("scroll", handleScroll);