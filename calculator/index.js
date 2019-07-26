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

const calculator = {
  result: 0,

  calc() {
    const values = [...document.querySelectorAll('.calculator__field')]
      .sort((a, b) => Number(a.dataset.field) - Number(b.dataset.field))
      .map((field) => Number(field.value));

    this.result = (values[0] - (values[1] * values[2]) + values[3]) - ((values[4] + values[5]) / 2);

    return this.result;
  },
};

const screen = {
  render(template) {
    switch (template) {
      case 'screen1':
        return `<div class="page-header__content">
        <p class="page-header__text">Калькулятор</p>
      </div>`;
      case 'screen2':
        return `<div class="page-header__content">
        <p class="page-header__text">Результат: ${calculator.result} гр.</p>
      </div>`;
      case 'screen3':
        return `<div class="page-header__content">
        <p class="page-header__text">Результат: ${calculator.result} гр.</p>
      </div>`;
      case 'screen4':
        return `<div class="page-header__content">
        <p class="page-header__text">Результат: ${calculator.result} гр.</p>
      </div>`;
      case 'screen5':
        return `<div class="page-header__content">
        <p class="page-header__text">Статья 1</p>
      </div>`;
      case 'screen6':
        return `<div class="page-header__content">
        <p class="page-header__text">Статья 2</p>
      </div>`;
      default:
        return '';
    }
  },

  switch(screenId) {
    const mainContent = document.querySelector('.main-content');
    const SCREEN_ACTIVE = 'screen--show';

    document.querySelector('.page-header__content')
      .remove();

    document.querySelector('.page-header__layout')
      .insertAdjacentHTML('beforeend', this.render(screenId));

    const toggleActive = (container, toggleClass, targetElemSelector) => {
      container.querySelector(`.${toggleClass}`).classList.remove(toggleClass);
      container.querySelector(targetElemSelector).classList.add(toggleClass);
    };

    toggleActive(mainContent, SCREEN_ACTIVE, `[id=${screenId}]`);
    window.scroll(0, 0);
    toggleActive(navigation, NAV_BTN_ACTIVE, `[data-screen=${screenId}]`);
  },
};

const navBtnHandler = ({ target }) => {
  const button = target.closest(`.nav__btn:not(.${NAV_BTN_ACTIVE})`);

  if (button) {
    screen.switch(button.dataset.screen);
  }

  switchSidebar();
};

menuBtn.addEventListener('click', switchSidebar);
overlay.addEventListener('click', switchSidebar);

navigation.addEventListener('click', navBtnHandler);

const calcBtn = document.querySelector('.calculator__calc-btn');
const calcBtnToast = document.querySelector('.calculator__calc-btn-wrapper .toast');
const moreInfoBtn = calcBtnToast.querySelector('.toast__btn');
const calcToastClose = calcBtnToast.querySelector('.toast__close');
const TOAST_SHOW = 'toast--show';

const calcBtnHandler = () => {
  const calcResultShow = calcBtnToast.querySelector('.toast__result');

  calcResultShow.textContent = calculator.calc();

  calcBtnToast.classList.add(TOAST_SHOW);
};

const handleCloseToast = () => {
  calcBtnToast.classList.remove(TOAST_SHOW);
};

const moreInfoHandler = () => {
  const caseOne = calculator.result < 300;
  const caseTwo = calculator.result >= 300 && calculator.result <= 380;

  if (caseOne) {
    screen.switch('screen2');
  } else if (caseTwo) {
    screen.switch('screen3');
  } else {
    screen.switch('screen4');
  }

  handleCloseToast();
};

calcBtn.addEventListener('click', calcBtnHandler);
moreInfoBtn.addEventListener('click', moreInfoHandler);
calcToastClose.addEventListener('click', handleCloseToast);
