// main.js
document.addEventListener('DOMContentLoaded', () => {
  const ham = document.querySelector('.ham');
  const nav = document.querySelector('.header__nav');

  ham.addEventListener('click', () => {
    ham.classList.toggle('is-active');
    nav.classList.toggle('is-open');
  });
});
