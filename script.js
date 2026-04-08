document.addEventListener("DOMContentLoaded", () => {

const images = document.querySelectorAll(".image-grid img, .case-image img");

let currentIndex = 0;
let imageArray = [];

/* CREATE MODAL */
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

/* COLLECT IMAGES */
images.forEach((img, index) => {
imageArray.push(img.src);

img.addEventListener("click", () => {
currentIndex = index;
openModal();
});
});

/* OPEN */
function openModal(){
modal.classList.add("active");
modalImg.src = imageArray[currentIndex];
}

/* CLOSE */
modal.addEventListener("click", e => {
if(e.target === modal){
modal.classList.remove("active");
}
});

/* NEXT */
function nextImage(){
currentIndex = (currentIndex + 1) % imageArray.length;
modalImg.src = imageArray[currentIndex];
}

/* PREV */
function prevImage(){
currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
modalImg.src = imageArray[currentIndex];
}

nextBtn.addEventListener("click", e=>{
e.stopPropagation();
nextImage();
});

prevBtn.addEventListener("click", e=>{
e.stopPropagation();
prevImage();
});

/* KEYBOARD */
document.addEventListener("keydown", e=>{
if(!modal.classList.contains("active")) return;

if(e.key === "ArrowRight") nextImage();
if(e.key === "ArrowLeft") prevImage();
if(e.key === "Escape") modal.classList.remove("active");
});

});
