document.addEventListener('DOMContentLoaded', function () {
  const slideContainer = document.getElementById('slideContainer');
  const captionContainer = document.getElementById('captionContainer');
  const sliderArrowLeft = document.getElementById('sliderArrowLeft');
  const sliderArrowRight = document.getElementById('sliderArrowRight');
  const slides = document.querySelectorAll('.slide');
  const captions = document.querySelectorAll('.caption');
  let currentSlide = 0;

  function updateSlide() {
    const transformValue = `translateX(-${currentSlide * 100}%)`;
    slideContainer.style.transform = transformValue;
    captions.forEach((caption, index) => {
      if (index === currentSlide) {
        caption.style.display = 'block';
      } else {
        caption.style.display = 'none';
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
  }

  sliderArrowLeft.addEventListener('click', prevSlide);
  sliderArrowRight.addEventListener('click', nextSlide);

  updateSlide(); 
});
