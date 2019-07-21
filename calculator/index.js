const menuBtn = document.querySelector('.page-header__btn--menu');
const overlay = document.querySelector('.overlay');
const navigation = document.querySelector('.nav');
const NAV_BTN_ACTIVE = 'nav__btn--active';

const switchSidebar = () => {
  const iconBurger = menuBtn.querySelector('.icon-burger');
  const sidebar = document.querySelector('.sidebar');

  iconBurger.classList.toggle('icon-burger--open');
  sidebar.classList.toggle('sidebar--show');
  overlay.classList.toggle('overlay--show');
};

const switchScreen = (screenId) => {
  const mainContent = document.querySelector('.main-content');
  const SCREEN_ACTIVE = 'screen--show';

  const toggleActive = (container, toggleClass, targetElemSelector) => {
    container.querySelector(`.${toggleClass}`).classList.remove(toggleClass);
    container.querySelector(targetElemSelector).classList.add(toggleClass);
  };

  toggleActive(mainContent, SCREEN_ACTIVE, `[id=${screenId}]`);
  toggleActive(navigation, NAV_BTN_ACTIVE, `[data-screen=${screenId}]`);
};

const navBtnHandler = ({ target }) => {
  const button = target.closest(`button:not(.${NAV_BTN_ACTIVE})`);

  if (button) {
    switchScreen(button.dataset.screen);
  }

  switchSidebar();
};

menuBtn.addEventListener('click', switchSidebar);
overlay.addEventListener('click', switchSidebar);

navigation.addEventListener('click', navBtnHandler);
