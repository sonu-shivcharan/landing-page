const select =(elem)=>document.querySelector(elem);
const selectAll=(elem)=>document.querySelectorAll(elem);
const header = select("#header");
const home = select("#home");
const elements = selectAll(".headline-container .slide-up-animation")
for(let elem of elements){
  elem.style.opacity='0';
}
function slideUpAnimation(){
  for(let i=0; i<elements.length; i++){
    elements[i].style.animation=`slideUp ${0.3*(i+0.5)}s ease 1`
    elements[i].style.opacity='1';
   console.log(elements[i].classList)
  }
}
window.onload=slideUpAnimation;
function handleScroll(){
    const homeSectionHeight = home.clientHeight;
    const scrollTop = window.scrollY;
    if(scrollTop>=100){
        header.style.display="block";
    }
    else{
        header.style.display="none";
      
    }
    if(scrollTop==0){
      console.log('scroll 0')
        slideUpAnimation();
    }
  //window.removeEventListener('scroll', handleScroll);
}
window.addEventListener("scroll", handleScroll);