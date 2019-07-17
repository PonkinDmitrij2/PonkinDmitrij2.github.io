const iconBurger = document.querySelector('.icon-burger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

iconBurger.addEventListener('click', () => {
  iconBurger.classList.toggle('icon-burger--open');
  sidebar.classList.toggle('sidebar--show');
  overlay.classList.toggle('overlay--show');
});

// const main = document.querySelector('.main-content');
// const test = document.querySelector('.test');
// document.querySelector('.calculator__calc')
//   .addEventListener('click', () => {
//     main.innerHTML = '';
//     main.appendChild(test);
//     test.classList.remove('d-none');
//   });
