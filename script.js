document.querySelectorAll(".gallery").forEach((gallery) => {
  let index = 0;
  const images = gallery.querySelectorAll("img");

  function show(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
  }

  gallery.querySelector(".next").onclick = () => {
    index = (index + 1) % images.length;
    show(index);
  };

  gallery.querySelector(".prev").onclick = () => {
    index = (index - 1 + images.length) % images.length;
    show(index);
  };

  show(index);
});
