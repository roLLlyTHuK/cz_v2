import AOS from 'aos';
import 'aos/dist/aos.css';

// init Swiper:
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  navigation: true,
  pagination: true,
  mousewheel: {
    forceToAxis: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

AOS.init({
  once: true,
});
