const UiSelectors = {
  dataHamburger: '[ data-hamburger ]',
  dataLinks: '[ data-links ]',
  dataLink: '[ data-link ]',
  dataMap: '[ data-map ]',
};

const dataHamburger = document.querySelector(UiSelectors.dataHamburger);
const dataLinks = document.querySelector(UiSelectors.dataLinks);
const dataLink = document.querySelectorAll(UiSelectors.dataLink);
const dataMap = document.querySelector(UiSelectors.dataMap);

let map;

function initMap() {
  map = new google.maps.Map(dataMap, {
    center: { lat: 52.3915729, lng: 17.3839114 },
    zoom: 10,
  });
}

dataHamburger.addEventListener('click', () => {
  dataHamburger.classList.toggle('hamburger--active');
  dataLinks.classList.toggle('links--active');
});

dataLink.forEach((link) => {
  link.addEventListener('click', () => {
    dataHamburger.classList.toggle('hamburger--active');
    dataLinks.classList.toggle('links--active');
  });
});

initMap();

console.log(map);

const swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
