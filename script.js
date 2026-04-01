// SCROLL ANIMATION
const elements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// IMAGE MODAL
const modal = document.createElement("div");
modal.classList.add("modal");
document.body.appendChild(modal);

modal.addEventListener("click", () => modal.style.display = "none");

document.querySelectorAll("img").forEach(img => {
  img.addEventListener("click", () => {
    modal.innerHTML = `<img src="${img.src}">`;
    modal.style.display = "flex";
  });
});
