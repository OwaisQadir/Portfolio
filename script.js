/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", () => {

  /* ===== SCROLL REVEAL ===== */
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // run on load


  /* ===== IMAGE MODAL ===== */
  const modal = document.createElement("div");
  modal.classList.add("modal");
  document.body.appendChild(modal);

  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  const images = document.querySelectorAll(".image-grid img, .single-image img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.innerHTML = `<img src="${img.src}">`;
      modal.style.display = "flex";
    });
  });

});
