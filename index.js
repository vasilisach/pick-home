(function () {
  
  $(document).ready(function () {
    
    //main menu
    const menuButton = document.querySelector('.menu-icon');
    const mainMenu = document.querySelector('.menu');
    const navBar = document.querySelector('.main-page-header__wrapper');


    if (menuButton) {
      menuButton.addEventListener('click', clickMenuButton);
    }

    function clickMenuButton(event) {
      let element = document.querySelector('.menu-icon__button');
      element.classList.toggle('menu-icon__button--toggle');
      navBar.classList.toggle('main-page-header__wrapper--active');
      if (mainMenu) {
        mainMenu.classList.toggle('menu--active');
      }
    }

    //review slider
    $('#review-slides').slick({
      dots: false
    });

    const prevBtn = document.querySelector('.slider-nav__slider-button--prev');
    const nextBtn = document.querySelector('.slider-nav__slider-button--next');
    
    if (nextBtn && prevBtn) {
      prevBtn.addEventListener('click', clickPrevSlideBtn);
      nextBtn.addEventListener('click', clickNextSlideBtn);
    }
   
    function clickPrevSlideBtn(event) {
      $("#review-slides").slick('slickPrev');
    }
    function clickNextSlideBtn(event) {
      $("#review-slides").slick('slickNext');
    }

    const reviewSliderControl = document.querySelector('.slider-reviews__slider-controls')
    if (reviewSliderControl) {
      reviewSliderControl.addEventListener('click', reviewSliderButtonsClickHandler)
    }
    function reviewSliderButtonsClickHandler(event) {
      let element = event.target;
      let sliderButtons = Array.from(reviewSliderControl.querySelectorAll('.slider-controls__button'));
      if (element.classList.contains('slider-controls__button')) {
        switchSlide(sliderButtons, element)
      }
    }

    //price table slider
    const priceSliderControl = document.querySelector('.price__slider-controls');
    if (priceSliderControl) {
      priceSliderControl.addEventListener('click', clickPriceSliderControls);
    }

    function clickPriceSliderControls(evt) {
      let element = evt.target;

      if (element.classList.contains('slider-controls__button')) {
        let sliderButtons = Array.from(priceSliderControl.querySelectorAll('.slider-controls__button'));
        switchSlide(sliderButtons, element)
      }
    }
  })
  //slider functions
  function findActiveSliderButton(element) {
    return element.classList.contains('slider-controls__button--active');
  }
  function switchSlide(sliderButtons, element) {
    let indexCurrentButton = sliderButtons.indexOf(sliderButtons.find(findActiveSliderButton));
    let indexNextButton = sliderButtons.indexOf(element);

    sliderButtons[indexCurrentButton].classList.remove('slider-controls__button--active');
    sliderButtons[indexNextButton].classList.add('slider-controls__button--active');
    if (element.parentElement.classList.contains('slider-reviews__slider-controls')) {
      $("#review-slides").slick('slickGoTo', indexNextButton);
    } else {
      let priceTable = document.querySelector('.price__table');
      priceTable.style.left = `${(150 - indexNextButton * 100)}%`;
    }
  }
})()