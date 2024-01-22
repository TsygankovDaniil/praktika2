const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu__btn');
const menuItems = menu.querySelectorAll('.menu__link');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('open');
    menuBtn.classList.remove('open');
  })
})

const toggleMenu = (e) => {
  e.preventDefault();
  menu.classList.toggle('open');
  menuBtn.classList.toggle('open');
}

menuBtn.addEventListener('click', toggleMenu)

document.addEventListener('click', (e) => {
  if (e.target === menu) {
    menu.classList.remove('open');
    menuBtn.classList.remove('open');
  }
})