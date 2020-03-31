const burger = document.querySelector('.navigation__toggle');

burger.addEventListener('click', function() {
  burger.classList.toggle('navigation__toggle--active');
});

const choices = new Choices('.js-choices', {
  searchEnabled: false,
  shouldSort: false,
  renderSelectedChoices: 'select-multiple',
  choices: [
    {
      value: 'en',
      label: 'ENG',
      selected: true,
    },
    {
      value: 'ru',
      label: 'RUS',
    },
    {
      value: 'fr',
      label: 'FRA',
    },
    {
      value: 'de',
      label: 'DEU',
    },
  ],
  classNames: {
    containerOuter: 'language',
    containerInner: 'language__inner',
    item: 'language__item',
    input: 'language__input',
    itemSelectable: 'language__item--selectable',
    list: 'language__list',
    listSingle: 'language__list--single',
    listDropdown: 'language__list--dropdown'
  }
});



let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// const swiper = new Swiper('#swiperGallery', {
//   loop: false,
//   // slidesPerView: 3,
//   effect: 'coverflow'
// })

const gallerySlider = document.querySelector('.about__controls');
const images = document.querySelectorAll('.gallery__image')

gallerySlider.addEventListener('click', function(e) {
  if (e.target.tagName !== 'BUTTON') return;
  
  const buttons = gallerySlider.querySelectorAll('.controls__button');

  buttons.forEach(button => button.classList.remove('controls__button--active'));  
  
  e.target.classList.add('controls__button--active');

  const id = e.target.dataset.id;

  images[id].classList = 'gallery__image gallery__image--1';

  if ((images.length - 1) == id) {
    images[0].classList = 'gallery__image gallery__image--2';
    images[1].classList = 'gallery__image gallery__image--3';
  } else if (id == 0) {
    images[1].classList = 'gallery__image gallery__image--2';
    images[2].classList = 'gallery__image gallery__image--3';
  } else {
    images[2].classList = 'gallery__image gallery__image--2';
    images[0].classList = 'gallery__image gallery__image--3';
  }
})