const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
  loop: true,
});

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-nav__btn--active') });
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const content = self.querySelector('.accordion__content');

      self.classList.toggle('open')

      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        control.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        control.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    })
  })
})

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

const searchOpen = document.querySelector('.header__btn');
const search = document.querySelector('.search__form');
const searchClose = document.querySelector('.search__close');

searchOpen.addEventListener('click', function () {
  search.classList.add('search__show');
});

searchClose.addEventListener('click', function () {
  search.classList.remove('search__show');
});

document.addEventListener('click', function (e) {
  const target = e.target;
  if (!search.contains(target) && !searchOpen.contains(target)) {
    search.classList.remove('search__show');
  }
});

// const searchOpen = document.querySelector('.header__btn');
// const search = document.querySelector('.search__form');
// const searchClose = document.querySelector('.search__close');


// searchOpen.addEventListener('click', function () {
//   search.classList.add('search__show')
// })

// searchClose.addEventListener('click', function () {
//   search.classList.remove('search__show')
// })
