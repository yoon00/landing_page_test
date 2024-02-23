const swiper = new Swiper(".swiper", {
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

// let idx = 0;
// let startX, startY, endX;
// let isScrolling = false;

// const select = document.querySelector(".background");
// const inner = select.querySelectorAll(".page1, .page2, .page3, .page4");

// $(window).on("touchstart", function (e) {
//   startX = e.originalEvent.touches[0].scrollX;
//   startY = e.originalEvent.touches[0].scrollY;
// });

// $(window).on("touchmove", function (e) {
//   if (isScrolling) return; // 이미 스크롤 중이면 무시
//   isScrolling = true;

//   const deltaX = e.originalEvent.touches[0].scrollX - startX;
//   const deltaY = e.originalEvent.touches[0].scrollY - startY;
//   const scrollAmount = 100; // 스크롤 감도 조절

//   // if (startX - deltaX < 30 || deltaX - startX < 30) {
//   if (deltaY > 0) {
//     idx = Math.max(idx - 1, 0);
//   } else {
//     idx = Math.min(idx + 1, inner.length - 1);
//   }

//   debounce(() => {
//     $("html,body")
//       .stop()
//       .animate(
//         {
//           scrollTop: $(inner[idx]).offset().top, // 다음 페이지의 시작 위치로 스크롤
//         },
//         600,
//         function () {
//           isScrolling = false;
//         }
//       );
//   }, 600);

//   startX = e.originalEvent.touches[0].scrollX;
//   startY = e.originalEvent.touches[0].scrollY;
// });

// // 디바운싱 함수 정의
// function debounce(func, delay) {
//   let timeout;
//   return function () {
//     const context = this;
//     const args = arguments;
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func.apply(context, args);
//     }, delay);
//   };
// }
let idx = 0;
let startX, startY, endX;
let isScrolling = false;

const select = document.querySelector(".background");
const inner = select.querySelectorAll(".page1, .page2, .page3, .page4");

$(window).on("touchstart", function (e) {
  startX = e.originalEvent.touches[0].scrollX;
  startY = e.originalEvent.touches[0].scrollY;
});

$(window).on("touchmove", function (e) {
  if (isScrolling) return; // 이미 스크롤 중이면 무시
  isScrolling = true;

  const deltaX = e.originalEvent.touches[0].scrollX - startX;
  const deltaY = e.originalEvent.touches[0].scrollY - startY;
  const scrollAmount = 100; // 스크롤 감도 조절

  if (deltaY > 0) {
    idx = Math.max(idx - 1, 0);
  } else {
    idx = Math.min(idx + 1, inner.length - 1);
  }

  debounce(() => {
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: $(inner[idx]).offset().top, // 다음 페이지의 시작 위치로 스크롤
        },
        600,
        function () {
          isScrolling = false;
        }
      );

    // 화살표 이미지의 표시 여부 설정
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
  }, 600);

  startX = e.originalEvent.touches[0].scrollX;
  startY = e.originalEvent.touches[0].scrollY;
});

// 디바운싱 함수 정의
function debounce(func, delay) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
