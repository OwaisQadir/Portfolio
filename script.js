// TYPING ANIMATION
const roles = ["Data Analyst", "Dashboard Expert", "Web Scraper"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = roles[i];
  document.getElementById("typing").textContent = current.substring(0, j);

  if (!isDeleting && j < current.length) j++;
  else if (isDeleting && j > 0) j--;
  else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

if (document.getElementById("typing")) {
  type();
}

// IMAGE SLIDERS (MULTIPLE SUPPORT)
document.querySelectorAll(".gallery").forEach((gallery) => {
  let index = 0;
  const images = gallery.querySelectorAll("img");

  function show(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
  }

  const nextBtn = gallery.querySelector(".next");
  const prevBtn = gallery.querySelector(".prev");

  if (nextBtn && prevBtn) {
    nextBtn.onclick = () => {
      index = (index + 1) % images.length;
      show(index);
    };

    prevBtn.onclick = () => {
      index = (index - 1 + images.length) % images.length;
      show(index);
    };
  }

  show(index);
});

// ACTIVE NAV HIGHLIGHT
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav a");

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 120;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        }
      });
    }
  });
});
