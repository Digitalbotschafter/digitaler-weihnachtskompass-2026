(function () {
  const placeholder = document.querySelector("[data-contact-invitation]");
  if (!placeholder) return;

  const formUrl = window.WEIHNACHTSKOMPASS_CONFIG?.contactFormUrl;
  if (!formUrl) {
    console.error("Die Formular-URL fehlt in assets/config.js.");
    return;
  }

  const card = document.createElement("aside");
  card.className = "content-card contact-invitation";
  card.setAttribute("aria-labelledby", "contact-invitation-title");
  card.innerHTML = `
    <h3 id="contact-invitation-title">❓ Noch Fragen?</h3>
    <p>Manchmal bleiben trotz eines Kapitels noch Fragen offen.</p>
    <p>Vielleicht ist Deine Situation etwas anders oder Du möchtest einfach sicher sein, bevor Du eine Entscheidung triffst.</p>
    <p>Dann schreib mir gerne eine Nachricht.</p>
    <p>Viele Inhalte des Weihnachtskompasses entstehen direkt aus den Fragen der Community.</p>
    <a class="primary-link" target="_blank" rel="noopener noreferrer">📨 Frage stellen</a>
    <p class="contact-note">🎄 Deine Frage hilft möglicherweise auch anderen Leserinnen und Lesern und kann in zukünftige Kapitel einfließen.</p>
  `;

  card.querySelector("a").href = formUrl;
  placeholder.replaceWith(card);
})();
