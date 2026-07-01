const header = document.querySelector("[data-header]");
const quoteButton = document.querySelector(".contact-form button");

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
