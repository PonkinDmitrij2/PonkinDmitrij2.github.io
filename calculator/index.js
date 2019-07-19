const menuBtn = document.querySelector('.page-header__btn--menu');
const iconBurger = menuBtn.querySelector('.icon-burger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

const toggleSidebar = () => {
  iconBurger.classList.toggle('icon-burger--open');
  sidebar.classList.toggle('sidebar--show');
  overlay.classList.toggle('overlay--show');
};

menuBtn.addEventListener('click', toggleSidebar);
