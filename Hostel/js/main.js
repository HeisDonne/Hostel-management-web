// UniHost — Shared JavaScript

document.addEventListener('DOMContentLoaded', function () {

  // Auto highlight active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Public navbar links
  document.querySelectorAll('.pub-navbar .nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Dashboard sidebar links
  document.querySelectorAll('.dash-nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

});
