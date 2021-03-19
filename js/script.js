const sliderSelectorSection = document.querySelector('.slider-selectors');
const sliderSelectorArray = sliderSelectorSection.querySelectorAll('.slider-selector');
const sliderItemArray = document.querySelectorAll('.slider-item');

for (let i = 0; i < sliderSelectorArray.length; i++) {
  sliderSelectorArray[i].addEventListener('click', evt => {
    evt.preventDefault();
    console.log(`нажата кнопка ${i+1}`);
    if (!sliderItemArray[i].classList.contains('slider-show')) {
      //console.log(sliderItemArray[i]);
      for (let j = 0; j < sliderItemArray.length; j++ ) {
        if (sliderItemArray[j].classList.contains('slider-show')) {
          sliderItemArray[j].classList.toggle('slider-show');
          console.log('скрывает слайд:');
          console.log(sliderItemArray[j]);
        }
      }
      sliderItemArray[i].classList.toggle('slider-show');
      console.log('показывает слайд:');
      console.log(sliderItemArray[i]);
    }
  });
}





const deliveryButton = document.querySelector('.delivery-button');
const guaranteeButton = document.querySelector('.guarantee-button');
const creditButton = document.querySelector('.credit-button');
const deliveryInfo = document.querySelector('.delivery-info');
const guaranteeInfo = document.querySelector('.guarantee-info');
const creditInfo = document.querySelector('.credit-info');

deliveryButton.addEventListener('click', evt => {
  evt.preventDefault();
  deliveryInfo.classList.add('del-gr-cr-show');
  guaranteeInfo.classList.remove('del-gr-cr-show');
  creditInfo.classList.remove('del-gr-cr-show');
});

guaranteeButton.addEventListener('click', evt => {
  evt.preventDefault();
  deliveryInfo.classList.remove('del-gr-cr-show');
  guaranteeInfo.classList.add('del-gr-cr-show');
  creditInfo.classList.remove('del-gr-cr-show');
});

creditButton.addEventListener('click', evt => {
  evt.preventDefault();
  deliveryInfo.classList.remove('del-gr-cr-show');
  guaranteeInfo.classList.remove('del-gr-cr-show');
  creditInfo.classList.add('del-gr-cr-show');
})

