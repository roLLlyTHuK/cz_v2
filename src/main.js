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

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.about-gallery img');

  images.forEach(function (image) {
    image.addEventListener('click', function () {
      // Дублируем изображение, чтобы отобразить его увеличенным
      const enlargedImage = image.cloneNode(true);
      enlargedImage.classList.add('enlarged');

      // Добавляем увеличенное изображение в body
      document.body.appendChild(enlargedImage);

      // При клике на увеличенное изображение убираем его
      enlargedImage.addEventListener('click', function () {
        enlargedImage.remove();
      });
    });
  });
});
