// let currentIndex = 0;
// const slides = document.querySelectorAll(".slide");
// const totalSlides = slides.length;

// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.style.transform = `translateX(${(i - index) * 100}%)`;
//   });
// }

// function prevSlide() {
//   currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//   showSlide(currentIndex);
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % totalSlides;
//   showSlide(currentIndex);
// }

// function autoSlide() {
//   nextSlide();
// }

// setInterval(autoSlide, 5000);

document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slider-container img");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.style.display = "none";
    });
    slides[index].style.display = "block";
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 5000); // Change slide every 5 seconds
});
