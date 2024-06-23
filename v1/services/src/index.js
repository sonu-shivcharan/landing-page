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
window.addEventListener("scroll", handleScroll);
