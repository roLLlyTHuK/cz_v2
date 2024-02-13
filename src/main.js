import AOS from 'aos';
import 'aos/dist/aos.css';

// swiper
let swiper = new Swiper('.swiper', {
  spaceBetween: 10,
  centeredSlides: true,
  navigation: true,
  pagination: true,
  loop: true,
  speed: 800,

  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },

  pagination: {
    el: '.swiper-pagination',
    // clickable: true,
    dynamicBullets: true,
  },
});

// aos
AOS.init({
  once: true,
});
