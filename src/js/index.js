const UiSelectors = {
  dataHamburger: '[ data-hamburger ]',
}

const dataHamburger = document.querySelector(UiSelectors.dataHamburger);

dataHamburger.addEventListener('click', () => {
    dataHamburger.classList.toggle('hamburger--active');
    })