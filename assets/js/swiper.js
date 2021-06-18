// ===== JS SWIPER ==== //
var mySwiper = new Swiper('.swiper-containers', {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 10,
    direction: 'horizontal',
    loop: true,
  
    //AutoPlay
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    
     //Min-width
     breakpoints: {
      900: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      604:{
          slidesPerView: 2,
          spaceBetween: 40,
      }  
  }
  });
  
  mySwiper.init();