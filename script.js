console.log("JS LOADED");

// FUNCTION TO REVEAL SECTIONS
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

// CARD ANIMATION
function animateCards() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect().top;

    if (rect < window.innerHeight - 50) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 120);
    }
  });
}

// RUN ON SCROLL
window.addEventListener("scroll", () => {
  revealOnScroll();
  animateCards();
});

// 🔥 RUN ON PAGE LOAD (THIS WAS MISSING)
window.addEventListener("load", () => {
  revealOnScroll();
  animateCards();
});
