(function () {
  //review slider
  $(document).ready(function () {
    
    if (document.body.clientWidth > 1023) {
      $('#review-slides').slick({
        dots: false,
        infinite: true,
      });
    } else {
      $('#review-slides').slick({
        dots: true,
        infinite: true,
      });
    }
    
    $('#price-slider').slick()

    const prevBtn = document.querySelector('.slider-nav__slider-button--prev');
    const nextBtn = document.querySelector('.slider-nav__slider-button--next');
    
    if (nextBtn && prevBtn) {
      prevBtn.addEventListener('click', clickPrevSlideBtn);
      nextBtn.addEventListener('click', clickNextSlideBtn);
    }

  })

  function clickPrevSlideBtn(event) {
    $("#review-slides").slick('slickPrev');
  }
  function clickNextSlideBtn(event) {
    $("#review-slides").slick('slickNext');
  }

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

  //price-table
  const priceBlock = document.getElementById('price');
  let sliderButtons, priceTable;

  if (priceBlock) {
    const sliderControls = priceBlock.querySelector('.slider-controls');
    priceTable = priceBlock.querySelector('.price__table');

    sliderButtons = Array.from(sliderControls.querySelectorAll('.slider-controls__button'));

    if (sliderButtons) {
      sliderControls.addEventListener('click', clickSliderControls);
    }
  }

  function findCurrentButton(element) {
    return element.classList.contains('slider-controls__button--current');
  }

  function clickSliderControls(evt) {
    let element = evt.target;

    if (element.classList.contains('slider-controls__button')) {
      let indexCurrentButton = sliderButtons.indexOf(sliderButtons.find(findCurrentButton));
      let indexNextButton = sliderButtons.indexOf(element);

      sliderButtons[indexCurrentButton].classList.remove('slider-controls__button--current');
      sliderButtons[indexNextButton].classList.add('slider-controls__button--current');
      priceTable.style.left = `${(150 - indexNextButton * 100)}%`;
    }
  }
    
})()