// Home Page Slider "Swiper Plugin"

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoplay: {
      delay: 2500, // Delay between transitions (in ms). 

      disableOnInteraction: false, // Set to false to keep autoplay after user interaction
    },
    // Responsive breakpoints
  breakpoints: {
    // when window width is >= 375px
    375: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    }
    
  }
  });

  // The Swiper plugin is used to configure a slider on a home page.

  // The Swiper constructor is invoked with two argument. .slide-content is a selector targeting the HTML container element of a slider. The second argument is an object containing Swiper configuration options.

  // slidesPerView: 3 sets the number of slides to be shown at the same time in the viewport to 3.
  
  // spaceBetween: 30 defines the space (in pixels) between individual slides to 30.
  
  // loop: true enables looping of slides, so the slider starts over at the beginning after reaching the last slide.

  // pagination: Configures the pagination component of the slider. It makes the pagination bullets clickable for navigation.

  // autoplay: Contains settings for autoplaying the slides, including a delay of 2500 milliseconds between transitions and keeping autoplay active even after user interactions.

  // The breakpoints option allows the Swiper settings to adapt based on the browser window's width, ensuring the slider is responsive and provides a good user experience on different devices.


