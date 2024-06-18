const select = (elem) => document.querySelector(elem);
const selectAll = (elem) => document.querySelectorAll(elem);
const header = select("#header");
const home = select("#home");
const aboutSection = select("#about");
const navBar = select("#header #nav-bar");
const elements = selectAll(".headline-container .slide-up-animation");
const menuIcon = select("#header .menu-icon");
const sidenav = select("#side-nav");
const featureCardContainer = select(".feature-card-container");
const serviceCardContainer = select("#service-card-container");
let scrollTop = 0;
menuIcon.onclick = () => {
  sidenav.style.transform = "translateX(0%)";
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);
  overlay.style.backdropFilter="blur(2px)"
  overlay.addEventListener("click",()=>{
    sidenav.style.transform = "translateX(-100%)";
    overlay.style.backdropFilter=""
    overlay.remove();
  })
};


for (let elem of elements) {
  elem.style.opacity = "0";
}
function slideUpAnimation(idx) {
  if (idx > elements.length - 1) return;
  elements[idx].style.animation = `slideUp 0.5s ease 1`;
  elements[idx].style.opacity = "1";
  setTimeout(() => {
    slideUpAnimation(idx + 1);
  }, 100);
}
function handleScroll() {
  const title = header.getElementsByTagName("h1")[0];
  scrollTop = window.scrollY;
  if (scrollTop >= 100) {
    // Show the title and change header styles for scrolled state
    title.style.display = "block";
    header.style.backgroundColor = "#fff";
    header.style.color = "#000";
    header.classList.add("shadow");
  } else {
    // Hide the title and change header styles for non-scrolled state
    title.style.display = "none";
    header.style.backgroundColor = "transparent";
    header.style.color = "#fff";
    header.classList.remove("shadow");
  }
}
function getServises() {
  fetch("./assests/services.json")
  .then((response) => response.json())
  .then((data) => {
    renderServices(data);
  });
}

function renderServices({services}) {
  services.forEach((service, index) => {
    const createCard = document.createElement("div");

    if (index % 2 == 0) {
      createCard.classList.add("service-card", "flex", "flex-row", "justify-center");
    } else {
      createCard.classList.add("service-card", "flex", "flex-row-reverse", "justify-center");
    }
    const image = document.createElement("div");
    image.classList.add("image");
    image.style.backgroundImage = `url(${service.image})`;
    const description = document.createElement("div");
    description.classList.add(
      "description",
      "p-6",
      "flex",
      "flex-col",
      "justify-center"
    );
    const title = document.createElement("h4");
    title.classList.add("text-2xl", "text-green-400", "font-bold");
    title.innerText = service.title;
    description.appendChild(title);
    const text = document.createElement("p");
    text.classList.add("text-gray-600");
    text.innerText = service.description;
    description.appendChild(text);
    createCard.appendChild(image);
    createCard.appendChild(description);
    serviceCardContainer.appendChild(createCard);
  });
  //window.addEventListener("scroll",addAnimationClassToServicse);
}
function addAnimationClassToServicse() {
  const heroHeight = home.offsetHeight;
  const aboutSectionHeight = aboutSection.offsetHeight;
  const serviceCards = serviceCardContainer.querySelectorAll(".service-card");
  const screenHeight10 = window.innerHeight * 0.4; //40% of screen height
  const threshold = (heroHeight +  aboutSectionHeight)- 500;

  serviceCards.forEach((card, index) => {
    const cardImg = card.querySelector(".image");
    const isEven = (index + 1) % 2 === 0;
    const slideClass = isEven ? "slideRight" : "slideLeft";
    const nonSlideClass = isEven ? "shiftRight" : "shiftLeft";
    const shouldSlide = scrollTop >= threshold + (index + 1) * screenHeight10;
    if (scrollTop >= threshold) {
      if (shouldSlide) {
        cardImg.classList.add(slideClass);
        cardImg.classList.remove(nonSlideClass);
        card.style.opacity = 1;
      }
    } else {
      card.style.opacity = 0;
      cardImg.classList.add(nonSlideClass);
      cardImg.classList.remove("slideRight", "slideLeft");
    }
  });
}




window.addEventListener("scroll", handleScroll);
window.addEventListener("load", ()=> {
  slideUpAnimation(0)});
window.addEventListener("load", getServises);

