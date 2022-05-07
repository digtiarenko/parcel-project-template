import itemTemplate from '../templates/menuItem';
import menu from '../menu.json';
const refs = {
  menu: document.querySelector('.menu.js-menu'),
};

const menuTemplate = itemTemplate(menu);
refs.menu.insertAdjacentHTML('beforeend', menuTemplate);
