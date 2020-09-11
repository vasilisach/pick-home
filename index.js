(function () {
  const menuButton = document.querySelector('.menu-icon');
  const mainMenu = document.querySelector('.menu')
  const navBar = document.querySelector('.main-page-header__wrapper')


  if (menuButton) {
    menuButton.addEventListener('click', clickMenuButton);
  }

  function clickMenuButton(event) {
    let element = document.querySelector('.menu-icon__button')
    element.classList.toggle('menu-icon__button--toggle');
    navBar.classList.toggle('main-page-header__wrapper--active')
    if (mainMenu) {
      mainMenu.classList.toggle('menu--active');
    }

    /*if (navWrapper) {
      if (navWrapper.dataset.status === 'closed') {
        navWrapper.dataset.status = 'opened';
      } else {
        navWrapper.dataset.status = 'closed';
      }

      if (navWrapper.classList.contains('page-header__nav-wrapper--transparent')) {
        navWrapper.classList.remove('page-header__nav-wrapper--transparent');
      } else {
        if (coordY < SCROLL_Y_VALUE) {
          navWrapper.classList.add('page-header__nav-wrapper--transparent');
        }
      }
    }*/
  }

  function scrollWindow() {
    coordY = window.pageYOffset;

    if (navWrapper.dataset.status === 'closed') {
      if (coordY > SCROLL_Y_VALUE) {
        navWrapper.classList.remove('page-header__nav-wrapper--transparent');
      } else {
        navWrapper.classList.add('page-header__nav-wrapper--transparent');
      }
    }
  }
})();