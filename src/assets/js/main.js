window.onload = () => {
  // tabEvent.init();
  // owlCarousel.init();
  header.init()
  vanillaTilt.init()
}

const header = {
  init: function() {
    this.expandSearch()
    this.expandMenuMobile()
    this.expandCategoryMobile()
  },
  expandSearch: function() {
    const searchBtnIcon = document.querySelector('.section-header .header-item.search svg')
    const searchMain = document.querySelector('.section-header .header-item.search .search-input')

    if (searchBtnIcon && searchMain) {
      searchBtnIcon.addEventListener('click', () => {
        searchMain.classList.toggle('active')
        if (searchMain.className.includes('active')) {
          searchMain.focus()
        }
      })
    }
  },
  expandMenuMobile: function() {
    const menuBtn = document.querySelector('.section-header .header-item.btn-menu-mobile')
    const menuMain = document.querySelector('.menu-mobile-wrapper')
    const body = document.querySelector('body')
    if (menuBtn && menuMain) {
      const menuOverlay = menuMain.querySelector('.menu-overlay')
      const menuClose = menuMain.querySelector('.menu-close')

      menuBtn.addEventListener('click', () => {
        menuMain.classList.add('active')
        body.style.overflow = 'hidden'
      })

      menuOverlay.addEventListener('click', () => {
        menuMain.classList.remove('active')
        body.style.overflow = 'auto'
      })

      menuClose.addEventListener('click', () => {
        menuMain.classList.remove('active')
        body.style.overflow = 'auto'
      })
    }
  },
  expandCategoryMobile: function() {
    const categoryBtn = document.querySelector('.category-filter-mobile')
    const categoryMain = document.querySelector('.category-sidebar')
    const body = document.querySelector('body')

    if (categoryBtn && categoryMain) {
      const categoryClose = categoryMain.querySelector('.category-close')

      categoryBtn.addEventListener('click', () => {
        categoryMain.classList.add('active')
        body.style.overflow = 'hidden'
      })

      categoryClose.addEventListener('click', () => {
        categoryMain.classList.remove('active')
        body.style.overflow = 'auto'
      })
    }
  }
}

const owlCarousel = {
  init: function () {
    this.setupYourCarousel();
  },
  setupYourCarousel: function () {
    var $owl = $("#banner-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
      },
      loop: true,
      rewind: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 600,
      mouseDrag: true,
      nav: true,
      dots: true,
      navText: [
        "<img src='./assets/icons/icon-angle-left-blue.svg'>",
        "<img src='./assets/icons/icon-angle-right-blue.svg'>",
      ],
    });
    $owl.trigger("refresh.owl.carousel");
  },
};

const tabEvent = {
  init: function () {
    this.setupTabEvent();
  },
  setupTabEvent: function () {
    const main = document.querySelectorAll(".tab-wrapper");
    if (main.length !== 0) {
      main.forEach((mainTarget) => {
        const tabClick = mainTarget.querySelectorAll(".tabs-group .tab-item");
        const tabMain = mainTarget.querySelectorAll(
          ".tabs-main-group .tab-item"
        );

        tabClick.forEach((item, index) =>
          item.addEventListener("click", () => {
            tabClick.forEach((i) => i.classList.remove("active"));
            tabMain.forEach((i) => i.classList.remove("active"));

            tabClick[index].classList.add("active");
            tabMain[index].classList.add("active");
          })
        );
      });
    }
  },
};

const vanillaTilt = {
  init: function() {
    this.config()
  },
  config: function() {
    const options = {
      max: 5,
    }
    VanillaTilt.init(document.querySelectorAll(".target-tilt"), options)
  }
}