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
    
})()