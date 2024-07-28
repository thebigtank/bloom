import Swiper from "swiper";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css/bundle";

export default function sliderOne() {
  const blocks = document.querySelectorAll(".block.basic-content-slider");

  // Initialise swiper
  function initializeSwiper(selector, options) {
    const swiper = new Swiper(selector, {
      loop: true,
      modules: [Autoplay, Navigation, Pagination, EffectFade],
      ...options,
    });

    swiper.init();
    return swiper;
  }

  if (blocks.length > 0) {
    blocks.forEach((block) => {
      if (block) {
        const swiperPagination = block.querySelector(".swiper-pagination");

        const swiperBg = initializeSwiper(
          block.querySelector(".swiper.background"),
          {
            pagination: {
              el: swiperPagination,
            },
            slidesPerView: 1,
            autoplay: false,
          }
        );

        const swiperCopy = initializeSwiper(
          block.querySelector(".swiper.copy"),
          {
            pagination: {
              el: swiperPagination,
            },
            slidesPerView: 1,
            autoplay: false,
          }
        );
      }
    });
  }
}
