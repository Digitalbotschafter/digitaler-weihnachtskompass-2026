(function () {
  const config = window.WEIHNACHTSKOMPASS_CONFIG || { activeChapters: ["00"] };
  const activeChapters = new Set(config.activeChapters);

  document.querySelectorAll(".chapter-card").forEach((card) => {
    const chapter = card.dataset.chapter;
    const isActive = activeChapters.has(chapter);

    if (isActive) {
      card.classList.remove("is-inactive");
      card.removeAttribute("aria-disabled");
      return;
    }

    card.classList.add("is-inactive");
    card.removeAttribute("href");
    card.setAttribute("aria-disabled", "true");
    card.setAttribute("tabindex", "-1");

    const copy = card.querySelector(".chapter-copy");
    if (copy && !copy.querySelector(".chapter-status")) {
      const status = document.createElement("span");
      status.className = "chapter-status";
      status.textContent = "🚧 Erscheint bald";
      copy.appendChild(status);
    }
  });
})();
