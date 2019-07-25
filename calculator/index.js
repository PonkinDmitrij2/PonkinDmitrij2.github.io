"use strict";

var menuBtn = document.querySelector(".page-header__btn--menu");
var overlay = document.querySelector(".overlay");
var navigation = document.querySelector(".nav");
var NAV_BTN_ACTIVE = "nav__btn--active";

var switchSidebar = function switchSidebar() {
  var iconBurger = menuBtn.querySelector(".icon-burger");
  var sidebar = document.querySelector(".sidebar");
  iconBurger.classList.toggle("icon-burger--open");
  sidebar.classList.toggle("sidebar--show");
  overlay.classList.toggle("overlay--show");
};

var calculator = {
  result: 0,
  calc: function calc() {
    var values = []
      .concat(document.querySelectorAll(".calculator__field"))
      .sort(function(a, b) {
        return Number(a.dataset.field) - Number(b.dataset.field);
      })
      .map(function(field) {
        return Number(field.value);
      });
    this.result =
      values[0] -
      values[1] * values[2] +
      values[3] -
      (values[4] + values[5]) / 2;
    return this.result;
  }
};
var screen = {
  render: function render(template) {
    switch (template) {
      case "screen1":
        return '<div class="page-header__content">\n        <p class="page-header__text">\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440</p>\n      </div>';

      case "screen2":
        return (
          '<div class="page-header__content">\n        <p class="page-header__text">\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ' +
          calculator.result +
          " \u0433\u0440.</p>\n      </div>"
        );

      case "screen3":
        return (
          '<div class="page-header__content">\n        <p class="page-header__text">\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ' +
          calculator.result +
          " \u0433\u0440.</p>\n      </div>"
        );

      case "screen4":
        return (
          '<div class="page-header__content">\n        <p class="page-header__text">\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ' +
          calculator.result +
          " \u0433\u0440.</p>\n      </div>"
        );

      case "screen5":
        return '<div class="page-header__content">\n        <p class="page-header__text">\u0421\u0442\u0430\u0442\u044C\u044F 1</p>\n      </div>';

      case "screen6":
        return '<div class="page-header__content">\n        <p class="page-header__text">\u0421\u0442\u0430\u0442\u044C\u044F 2</p>\n      </div>';

      default:
        return "";
    }
  },
  switch: function _switch(screenId) {
    var mainContent = document.querySelector(".main-content");
    var SCREEN_ACTIVE = "screen--show";
    document.querySelector(".page-header__content").remove();
    document
      .querySelector(".page-header__layout")
      .insertAdjacentHTML("beforeend", this.render(screenId));

    var toggleActive = function toggleActive(
      container,
      toggleClass,
      targetElemSelector
    ) {
      container.querySelector("." + toggleClass).classList.remove(toggleClass);
      container.querySelector(targetElemSelector).classList.add(toggleClass);
    };

    toggleActive(mainContent, SCREEN_ACTIVE, "[id=" + screenId + "]");
    window.scroll(0, 0);
    toggleActive(navigation, NAV_BTN_ACTIVE, "[data-screen=" + screenId + "]");
  }
};

var navBtnHandler = function navBtnHandler(_ref) {
  var target = _ref.target;
  var button = target.closest(".nav__btn:not(." + NAV_BTN_ACTIVE + ")");

  if (button) {
    screen["switch"](button.dataset.screen);
  }

  switchSidebar();
};

menuBtn.addEventListener("click", switchSidebar);
overlay.addEventListener("click", switchSidebar);
navigation.addEventListener("click", navBtnHandler);
var calcBtn = document.querySelector(".calculator__calc-btn");
var moreInfoBtn = document.querySelector(".toast__btn");

var calcBtnHandler = function calcBtnHandler() {
  var calcResultShow = document.querySelector(
    ".calculator__calc-btn .toast__result"
  );
  calcResultShow.textContent = calculator.calc();
};

var moreInfoHandler = function moreInfoHandler() {
  var caseOne = calculator.result < 300;
  var caseTwo = calculator.result >= 300 && calculator.result <= 380;

  if (caseOne) {
    screen["switch"]("screen2");
  } else if (caseTwo) {
    screen["switch"]("screen3");
  } else {
    screen["switch"]("screen4");
  }
};

calcBtn.addEventListener("click", calcBtnHandler);
moreInfoBtn.addEventListener("click", moreInfoHandler);
