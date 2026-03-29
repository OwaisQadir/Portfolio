// SCROLL REVEAL (SECTIONS)
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

window.addEventListener("scroll", revealOnScroll);

// CARD STAGGER ANIMATION
function animateCards() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();

    if (rect.top < window.innerHeight - 50) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 100);
    }
  });
}

window.addEventListener("scroll", animateCards);
