const select = (elem)=>document.querySelector(elem);
const selectAll = (elem)=>document.querySelectorAll(elem);
const header = select("#header");
const home = select("#home");
const navBar = select("#header #nav-bar");
const elements = selectAll(".headline-container .slide-up-animation");
const menuIcon = select("#header .menu-icon");
const sidenav = select("#side-nav");
const featureCardContainer = select(".feature-card-container");
let featureCards = [];
for (let i = 0; i < 5; i++) {
  featureCards.push( `<div class="feature-card flex flex-wrap">
  <div class="feature-img m-2">
    <img class="rounded" src="" alt="Feature ${i + 1}"> 
  </div>
  <div class="p-6 mx-auto bg-white">
    <h3 class="text-xl font-bold text-gray-800">Feature One</h3>
    <p class="text-gray-600 mt-2">Description of feature one.</p>
  </div>
</div>`);
}
changeFeatureCard(0);

function changeFeatureCard(currentCardIdx){
    featureCardContainer.innerHTML = featureCards[currentCardIdx]; 
    const currentCard = featureCardContainer.querySelector(".feature-card");
     
    console.log(featureCards);
    setTimeout(() => {
      currentCard.style.transform = "translateX(-100%)";
      currentCard.style.opacity = "0";
    }, 4000);
    setTimeout(() => {
      featureCardContainer.removeChild(currentCard);
      currentCardIdx = (currentCardIdx +1) % (featureCards.length);
      changeFeatureCard(currentCardIdx);
    }, 4000);
    

}







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
    elements[i].style.animation = `slideUp ${0.3*(i+0.6)}s ease-out 1`
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