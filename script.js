function reveal() {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

function cards() {
  document.querySelectorAll(".card").forEach((c, i) => {
    if (c.getBoundingClientRect().top < window.innerHeight - 50) {
      setTimeout(() => c.classList.add("show"), i * 100);
    }
  });
}

window.addEventListener("scroll", () => {
  reveal();
  cards();
});

window.addEventListener("load", () => {
  reveal();
  cards();
});
