(() => {
  "use strict";

  // Set current year in footer
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Optional: smooth scroll for #links (remove if you don't use it)
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;

    const id = a.getAttribute("href");
    if (!id || id === "#") return;

    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
