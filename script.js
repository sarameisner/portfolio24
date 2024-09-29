document.querySelectorAll(".scroll-container").forEach((container) => {
  container.addEventListener("scroll", () => {
    const cards = container.querySelectorAll(".project-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const visible = rect.left >= 0 && rect.right <= window.innerWidth;
      if (visible) {
        card.style.transform = "translateY(-5px)";
      } else {
        card.style.transform = "translateY(0)";
      }
    });
  });
});

// Håndter klik på billederne for at åbne modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".project-card img").forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = image.src;
  });
});

// Luk modal, når man klikker på "×"
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Luk modal, når man klikker uden for billedet
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Håndter scroll-knapperne
document.querySelectorAll(".scroll-wrapper").forEach((wrapper) => {
  const leftBtn = wrapper.querySelector(".left-btn");
  const rightBtn = wrapper.querySelector(".right-btn");
  const scrollContainer = wrapper.querySelector(".scroll-container");

  leftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: -300, // Scroll til venstre (justér denne værdi efter behov)
      behavior: "smooth",
    });
  });

  rightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: 300, // Scroll til højre (justér denne værdi efter behov)
      behavior: "smooth",
    });
  });
});

window.addEventListener("load", function () {
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 1200);
});
