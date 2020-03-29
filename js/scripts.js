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


document.querySelector('.js-choices').addEventListener('choice', function(e) {
  localStorage.setItem('lang', e.detail.choice.value);
})

const choice = document.querySelector('.js-choice');