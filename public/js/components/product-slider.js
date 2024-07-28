import Swiper from "swiper";
import { Scrollbar } from "swiper/modules";
import "swiper/css/bundle";

export default function productSlider() {
  const blocks = document.querySelectorAll(".block.product-slider");

  // Initialise swiper
  function initializeSwiper(selector, options) {
    const swiper = new Swiper(selector, {
      modules: [Scrollbar],
      ...options,
    });

    swiper.init();
    return swiper;
  }

  if (blocks.length > 0) {
    blocks.forEach((block) => {
      if (block) {
        initializeSwiper(block.querySelector(".swiper"), {
          scrollbar: {
            el: ".swiper-scrollbar",
          },
          speed: 300,
          slidesPerView: 3.2,
          freeMode: true,
          grabCursor: true,
          spaceBetween: 20,
        });

        const likeBtns = block.querySelectorAll(".product-labels .btn-like");

        likeBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
            btn.classList.toggle("liked");
          });
        });
      }
    });
  }
}
