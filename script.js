const swiper_background = new Swiper("#background", {
  direction: "vertical",

  // centerSlide
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 0,

  //loop
  loop: false,

  //nextSlide
  mousewheel: true,

  //slideSpeed
  speed: 1000,
});

const swiper = new Swiper("#page2_swiper", {
  // centerSlide
  slidesPerView: "1.1",
  centeredSlides: false,
  spaceBetween: 10,

  //loop
  loop: false,

  //nextSlide
  mousewheel: true,

  //slideSpeed
  speed: 1500,
});

window.addEventListener("scroll", function () {
  const image = document.getElementById("arrow");
  const scrollPosition = window.scrollY;
  const bottomOfPage = document.body.scrollHeight - window.innerHeight;

  if (scrollPosition >= bottomOfPage - 5) {
    image.style.transition = "visibility 0.1s";
    image.style.visibility = "hidden";
  } else {
    image.style.transition = "visibility 0.1s";
    image.style.visibility = "visible";
  }
});
