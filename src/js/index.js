const UiSelectors = {
  dataHamburger: '[ data-hamburger ]',
  dataLinks: '[ data-links ]',
};

const dataHamburger = document.querySelector(UiSelectors.dataHamburger);
const dataLinks = document.querySelector(UiSelectors.dataLinks);

dataHamburger.addEventListener('click', () => {
  dataHamburger.classList.toggle('hamburger--active');
  dataLinks.classList.toggle('links--active');
});
