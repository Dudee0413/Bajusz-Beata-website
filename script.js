function toggleMenu() {
    const menu = document.querySelector('.menu');
    if (menu) {
      menu.classList.toggle('active');
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // Menü gombra kattintásra nyit/zár
    document.querySelector('.menu-toggle')?.addEventListener('click', toggleMenu);
  
    // Menüpontra kattintás után zárjon be
    document.querySelectorAll('.menu a').forEach(link => {
      link.addEventListener('click', () => {
        document.querySelector('.menu')?.classList.remove('active');
      });
    });
  });
  