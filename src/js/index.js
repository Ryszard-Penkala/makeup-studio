import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { google } from 'google-maps';

const UiSelectors = {
  dataHamburger: '[ data-hamburger ]',
  dataLinks: '[ data-links ]',
  dataLink: '[ data-link ]',
  dataMap: '[ data-map ]',
  dataScrollTrigger: '[ data-scroll_trigger ]',
  dataImage: '[data-image]',
};

const dataHamburger = document.querySelector(UiSelectors.dataHamburger);
const dataLinks = document.querySelector(UiSelectors.dataLinks);
const dataLink = document.querySelectorAll(UiSelectors.dataLink);
const dataScrollTrigger = document.querySelectorAll(UiSelectors.dataScrollTrigger);
const dataMap = document.querySelector(UiSelectors.dataMap);
const dataImage = document.querySelectorAll(UiSelectors.dataImage);

let map;

const lightbox = document.createElement('div');

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

// window.initMap = function () {
//   map = new google.maps.Map(dataMap, {
//     center: { lat: 52.3915729, lng: 17.3839114 },
//     zoom: 10,
//   });
// };

window.initMap = () => {
  map = new google.maps.Map(dataMap, {
    center: { lat: 52.3915729, lng: 17.3839114 },
    zoom: 10,
  });
};

// initMap();

dataHamburger.addEventListener('click', () => {
  dataHamburger.classList.toggle('hamburger--active');
  dataLinks.classList.toggle('links--active');
});

lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

dataImage.forEach((image) => {
  image.addEventListener('click', () => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
});

const masonry = require('./gallery.js');
