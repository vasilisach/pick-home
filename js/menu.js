(function() {
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