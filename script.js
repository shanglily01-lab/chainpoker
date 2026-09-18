const header = document.querySelector("[data-header]");
const quoteButton = document.querySelector(".contact-form button");
const playDock = document.querySelector("[data-play-dock]");
const playToggle = playDock?.querySelector(".play-dock-toggle");
const playPanel = playDock?.querySelector(".play-dock-panel");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

quoteButton?.addEventListener("click", () => {
  quoteButton.textContent = "Catalog request noted";
  window.setTimeout(() => {
    quoteButton.textContent = "Prepare quote";
  }, 1800);
});

playToggle?.addEventListener("click", () => {
  const open = playToggle.getAttribute("aria-expanded") !== "true";
  playToggle.setAttribute("aria-expanded", String(open));
  playPanel.hidden = !open;
});

document.addEventListener("click", (event) => {
  if (!playDock || playPanel?.hidden || playDock.contains(event.target)) {
    return;
  }
  playToggle.setAttribute("aria-expanded", "false");
  playPanel.hidden = true;
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || playPanel?.hidden) {
    return;
  }
  playToggle.setAttribute("aria-expanded", "false");
  playPanel.hidden = true;
  playToggle.focus();
});
