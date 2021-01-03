import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const UiSelectors = {
  dataHamburger: '[ data-hamburger ]',
  dataLinks: '[ data-links ]',
  dataLink: '[ data-link ]',
  dataMap: '[ data-map ]',
  dataScrollTrigger: '[ data-scroll_trigger ]',
  dataImage: '[data-image]',
  dataLightbox: '[data-lightbox]',
};

const dataHamburger = document.querySelector(UiSelectors.dataHamburger);
const dataLinks = document.querySelector(UiSelectors.dataLinks);
const dataLink = document.querySelectorAll(UiSelectors.dataLink);
const dataScrollTrigger = document.querySelectorAll(UiSelectors.dataScrollTrigger);
const dataMap = document.querySelector(UiSelectors.dataMap);
const dataImage = document.querySelectorAll(UiSelectors.dataImage);

let map;

const lightbox = document.querySelector(UiSelectors.dataLightbox);

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

window.initMap = () => {
  map = new google.maps.Map(dataMap, {
    center: { lat: 52.3915729, lng: 17.3839114 },
    zoom: 10,
  });
};

dataHamburger.addEventListener('click', () => {
  dataHamburger.classList.toggle('hamburger--active');
  dataLinks.classList.toggle('links--active');
});

dataImage.forEach((image, index) => {
  image.addEventListener('click', () => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    const next = document.createElement('button');
    const prev = document.createElement('button');
    let imgIndex = index;
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
    // adding new features
    const button = document.createElement('button');
    lightbox.appendChild(button);
    lightbox.lastChild.classList.add('close');
    lightbox.appendChild(next);
    lightbox.lastChild.classList.add('next');
    lightbox.appendChild(prev);
    lightbox.lastChild.classList.add('prev');
    button.addEventListener('click', (e) => {
      if (e.target !== e.currentTarget) return;
      lightbox.classList.remove('active');
    });
    next.addEventListener('click', () => {
      imgIndex = (imgIndex += 1) % dataImage.length;
      img.src = dataImage[imgIndex].src;
    });
    prev.addEventListener('click', () => {
      imgIndex -= 1;
      if (imgIndex < 0) {
        imgIndex = dataImage.length - 1;
      }
      img.src = dataImage[imgIndex].src;
    });
    // finish of new features
  });
});

const masonry = require('./gallery.js');
