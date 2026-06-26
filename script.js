const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const heroLogo = document.querySelector('.hero-logo');

function onScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 40);

  if (heroLogo) {
    const bottom = heroLogo.getBoundingClientRect().bottom;
    navbar.classList.toggle('logo-visible', bottom < 0);
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});
