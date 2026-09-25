/* main.js — LQFalke creator site interactivity
 * Vanilla ES6+, no dependencies.
 * Handles: mobile nav toggle, dynamic year in footer.
 */

document.addEventListener('DOMContentLoaded', () => {
  // (a) Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // (b) Dynamic year in footer
  const yearSpan = document.getElementById('year');

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
