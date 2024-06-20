
function addAnimation(observedElement, animationClass = "shiftLeft") {
  // Configure Intersection Observer
  const options = {
    threshold: 0.2, // Adjust threshold as needed
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove(animationClass);
      }
    });
  }, options);

  // Apply animation after a delay (adjust as needed)
  setTimeout(() => {
    const elementsToAnimate = document.querySelectorAll(observedElement);
    elementsToAnimate.forEach((element) => {
      observer.observe(element);
      element.classList.add(animationClass);
      element.style.transition = "0.8s ease";
    });
  }, 1000);
}
export default addAnimation;
