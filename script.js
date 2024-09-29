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
