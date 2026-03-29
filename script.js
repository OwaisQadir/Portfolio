console.log("JS WORKING");

// SECTION REVEAL
function reveal() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

// CARD ANIMATION
function animateCards() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 50) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 120);
    }
  });
}

// RUN EVENTS
window.addEventListener("scroll", () => {
  reveal();
  animateCards();
});

window.addEventListener("load", () => {
  reveal();
  animateCards();
});
