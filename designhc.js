(function() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5, // Default value for smaller screens
    spaceBetween: 10,
    centeredSlides: false,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    breakpoints: {
      376: {
        slidesPerView: 3.5, // Adjust for larger screens
        spaceBetween: 10, // Optional: Set spacing between slides
      },
      475:{
      slidesPerView: 4.5, // Adjust for larger screens
      spaceBetween: 10, // Optional: Set spacing between slides
    },
    769:{
      slidesPerView: 6.5, // Adjust for larger screens
      spaceBetween: 10, // Optional: Set spacing between slides
    },

    },
    
  });
})();

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
console.log(tooltipTriggerList);
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

