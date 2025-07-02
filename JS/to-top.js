document.addEventListener('DOMContentLoaded', function() {
  const toTop = document.querySelector('.to-top');
  const showThreshold = 500;

  window.addEventListener('scroll', () => {
    if (window.scrollY > showThreshold) {
      toTop.classList.add('active');
    } else {
      toTop.classList.remove('active');
    }
  });

  toTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
