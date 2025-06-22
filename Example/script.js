const menuIcon = document.querySelector('.humber');
const navLinks = document.querySelector('.nav-link');

menuIcon.addEventListener('click', () => {
  navLinks.style.display =
    navLinks.style.display === 'flex' ? 'none' : 'flex';
});