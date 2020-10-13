import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Macy } from 'macy';

const UiSelectors = {
  dataHamburger: '[ data-hamburger ]',
  dataLinks: '[ data-links ]',
  dataLink: '[ data-link ]',
  dataMap: '[ data-map ]',
  dataScrollTrigger: '[ data-scroll_trigger ]',
};

const dataHamburger = document.querySelector(UiSelectors.dataHamburger);
const dataLinks = document.querySelector(UiSelectors.dataLinks);
const dataLink = document.querySelectorAll(UiSelectors.dataLink);
const dataScrollTrigger = document.querySelectorAll(UiSelectors.dataScrollTrigger);
const dataMap = document.querySelector(UiSelectors.dataMap);

let map;

const macyInstance = Macy({
  container: '.galleryContainer',
  mobileFirst: true,
  columns: 1,
  breakAt: {
    400: 2,
    700: 3,
    1100: 4,
  },
  margin: {
    x: 10,
    y: 30,

  },
});

window.initMap = function () {
  map = new google.maps.Map(dataMap, {
    center: { lat: 52.3915729, lng: 17.3839114 },
    zoom: 10,
  });
};

initMap();

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

gsap.registerPlugin(ScrollTrigger);

dataScrollTrigger.forEach((section) => {
  gsap.fromTo(section.children, { y: '+=100', opacity: 0 }, {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1,
    ease: 'easeInOut',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
    },
  });
});
