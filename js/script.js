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

const servicesSelectorSection = document.querySelector('.services-buttons');
const servicesSelectorArray = servicesSelectorSection.querySelectorAll('.button');
const servicesInfoArray = document.querySelectorAll('.service-info');

for (let i = 0; i < servicesSelectorArray.length; i++) {
  servicesSelectorArray[i].addEventListener('click', evt => {
    evt.preventDefault();
    if(!servicesInfoArray[i].classList.contains('services-info-show') && !servicesSelectorArray[i].classList.contains('button-black')) {
      for (let j = 0; j < servicesInfoArray.length; j++) {
        if (servicesInfoArray[j].classList.contains('services-info-show') && servicesSelectorArray[j].classList.contains('button-black')) {
          servicesInfoArray[j].classList.toggle('services-info-show');
          servicesSelectorArray[j].classList.toggle('button-black')
        }
      }
      servicesInfoArray[i].classList.toggle('services-info-show');
      servicesSelectorArray[i].classList.toggle('button-black');
    }
  });
}



