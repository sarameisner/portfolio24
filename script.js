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
