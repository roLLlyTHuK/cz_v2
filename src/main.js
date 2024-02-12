import AOS from 'aos';
import 'aos/dist/aos.css';

let swiper = new Swiper('.swiper', {
  spaceBetween: 20,
  centeredSlides: true,
  navigation: true,
  pagination: true,
  loop: true,
  speed: 800,
  // slidesPerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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

AOS.init({
  once: true,
});
