function handleScroll() {
  const title = header.getElementsByTagName("h1")[0];
  let scrollTop = window.scrollY;
  if (scrollTop >= 50) {
    // Show the title and change header styles for scrolled state
    title.classList.add("text-gradient-primary");
    header.style.backgroundColor = "#fff";
    header.style.color = "#000";
    header.classList.add("shadow-md");
  } else {
    // Hide the title and change header styles for non-scrolled state
    title.classList.remove("text-gradient-primary");
    header.style.backgroundColor = "transparent";
    header.style.color = "#fff";
    header.classList.remove("shadow-md");
  }
}
const carousel = document.getElementById('carousel');
const items = carousel.querySelectorAll('li');
let scrollAmount = 0;
const scrollSpeed = 2; 
const totalWidth = Array.from(items).reduce((acc, item) => acc + item.offsetWidth + 20, 0); // Calculate total width including margins
function scrollCarousel() {
  scrollAmount += scrollSpeed;
  // Seamless transition: When reaching the end, reset scroll position
  if (scrollAmount >= totalWidth) {
    scrollAmount = 0;
  }
  carousel.scrollTo(scrollAmount, 0); 
}
setInterval(scrollCarousel, 30);   
window.addEventListener("scroll", handleScroll);
