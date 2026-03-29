const text = ["Data Analyst", "Dashboard Expert", "Web Scraper"];
let i=0,j=0,current="",isDeleting=false;

function type(){
  current=text[i];
  document.getElementById("typing").textContent=current.substring(0,j);

  if(!isDeleting && j<current.length) j++;
  else if(isDeleting && j>0) j--;
  else{
    isDeleting=!isDeleting;
    if(!isDeleting) i=(i+1)%text.length;
  }

  setTimeout(type,isDeleting?50:100);
}
type();

let index = 0;
const images = document.querySelectorAll(".gallery img");

function show(i){
  images.forEach(img => img.classList.remove("active"));
  images[i].classList.add("active");
}

function next(){
  index = (index + 1) % images.length;
  show(index);
}

function prev(){
  index = (index - 1 + images.length) % images.length;
  show(index);
}

show(index);
