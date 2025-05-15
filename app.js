document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const toggleBtn = document.querySelector('.toggle-menu');
  const navItems = document.querySelectorAll('.nav-item');

  function openMenu() {
    menu.classList.add('open');
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
    if (menu.classList.contains('open')) {
      if (!menu.contains(e.target) && e.target !== toggleBtn) {
        closeMenu();
      }
    }
  });

  menu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});