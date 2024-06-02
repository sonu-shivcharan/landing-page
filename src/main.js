const select =(elem)=>document.querySelector(elem);
const selectAll=(elem)=>document.querySelectorAll(elem);
const header = select("#header");
const home = select("#home");
const elements = selectAll(".headline-container .slide-up-animation")
for(let elem of elements){
  elem.style.opacity='0';
}
window.onload=()=>{
  for(let i=0; i<elements.length; i++){
    elements[i].style.animation=`slideUp ${0.3*(i+1)}s ease 1`
    elements[i].style.opacity='1';
   console.log(elements[i].classList)
  }
}
function handleScroll(){
    const homeSectionHeight = home.clientHeight;
    const scrollTop = window.scrollY;
    if(scrollTop>=100){
        header.style.display="block";
    }else{
        header.style.display="none";
    }
  
}
window.addEventListener("scroll", handleScroll);