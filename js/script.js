import { menuOperation } from './sections/header.js';

// element selecting
const header = document.querySelector('header');
const list = document.querySelectorAll('.menu-click');
const menuChecking = document.querySelectorAll('.menu-items');
const arrowDown = document.querySelectorAll('.arrow');

const burger = document.querySelector('.menu-burger');
const menuClose = document.querySelector('.menu-close');
const menuParent = document.querySelector('.header-mobile__container');

const slider = document.querySelectorAll('.hero__left');

const sliderButton = document.querySelectorAll('.hero__button');

// scroll event adding class header
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('header-fixed');
  } else {
    header.classList.remove('header-fixed');
  }
});

// menu dropdown event listener
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', (el) => {
    if (el.currentTarget.children[1].classList.contains('menu--open')) {
      el.currentTarget.children[1].classList.remove('menu--open');
      el.currentTarget.children[0].children[1].classList.remove('rotate');
      el.currentTarget.children[1].setAttribute('aria-hidden', true);
    } else {
      for (const menu of menuChecking) {
        if (menu.classList.contains('menu--open')) {
          menu.classList.remove('menu--open');
          menu.setAttribute('aria-hidden', true);
        }
      }
      for (const arrow of arrowDown) {
        if (arrow.classList.contains('rotate')) {
          arrow.classList.remove('rotate');
        }
      }
      el.currentTarget.children[1].classList.toggle('menu--open');
      el.currentTarget.children[0].children[1].classList.toggle('rotate');
      el.currentTarget.children[1].setAttribute('aria-hidden', false);
    }
  });
}

//mobile: hamburger-menu event listener
burger.addEventListener('click', (el) => {
  menuOperation(el.currentTarget, menuParent);
});

//mobile: menu-close event listener
menuClose.addEventListener('click', (el) => {
  menuOperation(el.currentTarget, menuParent);
});

for (let i = 0; i < sliderButton.length; i++) {
  sliderButton[i].addEventListener('click', (el) => {
    if (!el.currentTarget.classList.contains('active')) {
      // removing class active in previous element
      for (let i = 0; i < sliderButton.length; i++) {
        if (sliderButton[i].classList.contains('active')) {
          sliderButton[i].classList.toggle('active');
          break;
        }
      }
      el.currentTarget.classList.toggle('active');

      if (sliderButton[0].classList.contains('active')) {
        slider[1].classList.add('translate-100__plus');
        slider[2].classList.add('translate-100__plus');
        slider[0].classList.remove(
          'translate-100__plus',
          'translate-100__minus'
        );
      }
      if (sliderButton[1].classList.contains('active')) {
        slider[0].classList.add('translate-100__minus');
        slider[2].classList.add('translate-100__plus');
        slider[1].classList.remove(
          'translate-100__plus',
          'translate-100__minus'
        );
      }
      if (sliderButton[2].classList.contains('active')) {
        slider[0].classList.add('translate-100__minus');
        slider[1].classList.add('translate-100__minus');
        slider[2].classList.remove(
          'translate-100__plus',
          'translate-100__minus'
        );
      }
    }
  });
}

window.addEventListener('load', () => {
  fetch('./templates/coding.html')
    .then((res) => res.text())
    .then(
      (text) => (document.getElementById('coding').innerHTML = text.trim())
    );
});
