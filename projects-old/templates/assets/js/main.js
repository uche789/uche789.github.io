(function () {
  function countrySelectionEvent() {
    var countrySelectionLink = document.querySelector('.js-country-selection-link');
    var countrySelectionModal = document.querySelector('.js-country-selection');
    var closebutton = document.querySelector('.js-close-modal');

    countrySelectionLink.addEventListener('click', function () {
      countrySelectionModal.classList.add('open');
    });

    closebutton.addEventListener('click', function () {
      countrySelectionModal.classList.remove('open');
    });
  }

  function navigationMobileEvent() {
    var navIcon = document.querySelector('.js-nav-icon');
    var navItemContainer = document.querySelector('.js-nav-items-mobile');
    var navItems = document.querySelectorAll('.js-nav-items-mobile');

    var clickOutsideArea = function clickOutsideArea(event) {
      if (navIcon !== event.target && navItemContainer !== event.target && !event.target.contains(navItemContainer)) {
        navItemContainer.classList.remove('open');
      }
    }


    navIcon.addEventListener('click', function openCountryModal() {
      document.body.addEventListener('click', clickOutsideArea);
      navItemContainer.classList.add('open');
    });

    navItems.forEach(function (element) {
      element.addEventListener('click', function selectItem() {
        document.body.removeEventListener('click', clickOutsideArea);
        navItemContainer.classList.remove('open');
      })
    });
  }

  navigationMobileEvent();
  countrySelectionEvent();
})();