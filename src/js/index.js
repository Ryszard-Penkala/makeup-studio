// import Swiper from 'swiper/bundle';

const UiSelectors = {
  dataHamburger: '[ data-hamburger ]',
  dataLinks: '[ data-links ]',
  dataLink: '[ data-link ]',
  dataMap: '[ data-map ]',
  // dataSwiperContainer: '[ data-swiper_container ]',
  // dataSwiperPagination: '[ data-swiper_pagination ]',
  // dataSwiperNext: '[ data-button_next ]',
  // dataSwiperPrev: '[ data-button_prev ]',
};

const dataHamburger = document.querySelector(UiSelectors.dataHamburger);
const dataLinks = document.querySelector(UiSelectors.dataLinks);
const dataLink = document.querySelectorAll(UiSelectors.dataLink);
const dataMap = document.querySelector(UiSelectors.dataMap);
// const dataSwiperContainer = document.querySelector(UiSelectors.dataSwiperContainer);
// const dataSwiperPagination = document.querySelector(UiSelectors.dataSwiperPagination);
// const dataSwiperNext = document.querySelector(UiSelectors.dataSwiperNext);
// const dataSwiperPrev = document.querySelector(UiSelectors.dataSwiperPrev);

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

// const swiper = new Swiper(dataSwiperContainer, {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: dataSwiperPagination,
//     clickable: true,
//   },
//   navigation: {
//     nextEl: dataSwiperNext,
//     prevEl: dataSwiperPrev,
//   },
// });
