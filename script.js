/* ================= DEBUG ================= */
console.log("JS LOADED");

/* ================= SCROLL REVEAL ================= */
function revealSections() {
  const sections = document.querySelectorAll(".reveal");

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;

    if (top < trigger) {
      section.classList.add("active");
    }
  });
}

/* ================= CARD ANIMATION ================= */
function animateCards() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;
    const trigger = window.innerHeight - 50;

    if (top < trigger) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 100); // stagger effect
    }
  });
}

/* ================= IMAGE MODAL ================= */

// Create modal dynamically
const modal = document.createElement("div");
modal.classList.add("modal");

const modalImg = document.createElement("img");

modal.appendChild(modalImg);
document.body.appendChild(modal);

// Add click to all images
function enableImageZoom() {
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.classList.add("active");
      modalImg.src = img.src;
    });
  });
}

// Close modal
modal.addEventListener("click", () => {
  modal.classList.remove("active");
});

/* ================= EVENTS ================= */

// Run on scroll
window.addEventListener("scroll", () => {
  revealSections();
  animateCards();
});

// Run on page load
window.addEventListener("load", () => {
  revealSections();
  animateCards();
  enableImageZoom();
});
