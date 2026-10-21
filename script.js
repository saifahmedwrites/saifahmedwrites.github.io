const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!motionPreference.matches) {
  const typingText = document.querySelector("[data-typing-text]");

  if (typingText) {
    const text = typingText.textContent;
    const description = typingText.closest(".hero-description");
    let characterIndex = 0;

    typingText.setAttribute("aria-label", text);
    description.classList.add("typing-active");
    typingText.textContent = "";

    const typingTimer = window.setInterval(() => {
      characterIndex += 1;
      typingText.textContent = text.slice(0, characterIndex);

      if (characterIndex >= text.length) {
        window.clearInterval(typingTimer);
      }
    }, 75);
  }

  const cards = document.querySelectorAll(".work-card.reveal-card");

  if ("IntersectionObserver" in window) {
    const cardObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0 });

    cards.forEach((card) => cardObserver.observe(card));
  } else {
    cards.forEach((card) => card.classList.add("is-visible"));
  }
}
