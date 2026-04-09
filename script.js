document.addEventListener("DOMContentLoaded", () => {

/* CONTACT FORM */

const form = document.querySelector(".contact-form");

if(form){

const button = form.querySelector(".send-btn");
const success = form.querySelector(".form-success");

form.addEventListener("submit", async function(e){

e.preventDefault();

button.classList.add("loading");

const data = new FormData(form);

await fetch(form.action,{
method:"POST",
body:data,
headers:{ 'Accept':'application/json' }
});

button.classList.remove("loading");

success.classList.add("show");

form.reset();

setTimeout(()=>{
success.classList.remove("show");
},4000);

});

}

/* IMAGE MODAL */

const images = document.querySelectorAll(".image-grid img, .case-image img");

if(images.length){

let currentIndex = 0;
let imageArray = [];

const modal = document.createElement("div");
modal.className = "image-modal";

modal.innerHTML = `
<button class="modal-prev">‹</button>
<img class="modal-img">
<button class="modal-next">›</button>
`;

document.body.appendChild(modal);

const modalImg = modal.querySelector(".modal-img");
const nextBtn = modal.querySelector(".modal-next");
const prevBtn = modal.querySelector(".modal-prev");

images.forEach((img,index)=>{
imageArray.push(img.src);

img.addEventListener("click",()=>{
currentIndex=index;
modal.classList.add("active");
modalImg.src=imageArray[currentIndex];
});
});

modal.addEventListener("click",e=>{
if(e.target===modal){
modal.classList.remove("active");
}
});

function next(){
currentIndex=(currentIndex+1)%imageArray.length;
modalImg.src=imageArray[currentIndex];
}

function prev(){
currentIndex=(currentIndex-1+imageArray.length)%imageArray.length;
modalImg.src=imageArray[currentIndex];
}

nextBtn.addEventListener("click",e=>{
e.stopPropagation();
next();
});

prevBtn.addEventListener("click",e=>{
e.stopPropagation();
prev();
});

}

});
