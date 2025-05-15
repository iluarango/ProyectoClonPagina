document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const toggleBtn = document.querySelector('.toggle-menu');
  const navItems = document.querySelectorAll('.nav-item');
  const heroText = document.querySelector('.hero-text');

  setTimeout(() => {
    heroText.classList.add('animate');
  }, 300);

  function openMenu() {
    menu.classList.add('open');
    heroText.classList.remove('animate');
    heroText.classList.add('hide');

    navItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('active');
      }, (navItems.length - 1 - index) * 150);
    });
  }

  function closeMenu() {
    navItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.remove('active');
      }, index * 150);
    });

    setTimeout(() => {
      menu.classList.remove('open');
      heroText.classList.remove('hide');
      heroText.classList.add('animate');
    }, navItems.length * 150 + 300);
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (menu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  document.addEventListener('click', (e) => {
    if (menu.classList.contains('open') && !menu.contains(e.target) && !toggleBtn.contains(e.target)) {
      closeMenu();
    }
  });

  menu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});