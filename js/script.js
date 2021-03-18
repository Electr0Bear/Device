const firstSlideButton = document.querySelector('.first-slide-button');
const secondSlideButton = document.querySelector('.second-slide-button');
const thirdSlideButton = document.querySelector('.third-slide-button');
const firstSlide = document.querySelector('.first-slide');
const secondSlide = document.querySelector('.second-slide');
const thirdSlide = document.querySelector('.third-slide');

firstSlideButton.addEventListener('click', evt => {
  firstSlide.classList.add('slider-show');
  secondSlide.classList.remove('slider-show');
  thirdSlide.classList.remove('slider-show');
});

secondSlideButton.addEventListener('click', evt => {
  firstSlide.classList.remove('slider-show');
  secondSlide.classList.add('slider-show');
  thirdSlide.classList.remove('slider-show');
});

thirdSlideButton.addEventListener('click', evt => {
  firstSlide.classList.remove('slider-show');
  secondSlide.classList.remove('slider-show');
  thirdSlide.classList.add('slider-show');
});