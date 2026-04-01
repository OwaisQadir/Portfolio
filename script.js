document.addEventListener("DOMContentLoaded", () => {

  const reveals = document.querySelectorAll(".reveal");

  function reveal() {
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();

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

});
