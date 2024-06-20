
function addAnimation(observedElement, animationClass = "shiftLeft") {
  // Configure Intersection Observer
  console.log(observedElement)
  const options = {
    threshold: 0.2, // Adjust threshold as needed
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove(animationClass);
      }else{
        entry.target.classList.add(animationClass);
      }
    });
  }, options);

  // Apply animation after a delay (adjust as needed)

    const elementsToAnimate = document.querySelectorAll(observedElement);
    console.dir(elementsToAnimate)
    if(elementsToAnimate.length==0) setTimeout(()=>{addAnimation(observedElement, animationClass)},200);
    elementsToAnimate.forEach((element) => {
      observer.observe(element);
      element.classList.add(animationClass);
      element.style.transition = "0.5s ease";
    });

}
export default addAnimation;
