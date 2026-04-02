document.addEventListener("DOMContentLoaded",()=>{

const elements=document.querySelectorAll(".reveal");

function show(){
elements.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add("show");
}
});
}

window.addEventListener("scroll",show);
show();

});
