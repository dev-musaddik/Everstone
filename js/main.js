// Shared JavaScript for Everstone Agency website

function onScroll() {
  const hdr = document.getElementById('hdr');
  if (hdr) {
    hdr.classList.toggle('stuck', window.scrollY > 20);
  }
}

window.addEventListener('scroll', onScroll, { passive: true });

function runReveal() {
  const els = document.querySelectorAll('.rv');
  if (els.length === 0) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
      }
    });
  }, { threshold: 0.12 });

  els.forEach((el) => {
    io.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation burger menu behavior
  const burger = document.querySelector('.burger');
  const navLinks = document.getElementById('navlinks');

  if (burger && navLinks) {
    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });

    // Close menu when clicking links
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // Initialize animations and scroll state
  runReveal();
  onScroll();
});
