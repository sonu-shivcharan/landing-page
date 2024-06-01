const selectElem =(elem)=>document.querySelector(elem);
const header = selectElem("#header");
const home = selectElem("#home");

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