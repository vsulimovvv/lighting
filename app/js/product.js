// * ==== Single Product
(function verticalSlider() {
  let mySwiperNav = new Swiper('#slider-nav', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    direction: 'vertical',
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

    breakpoints: {
      320: {
        direction: 'horizontal',
      },
      991: {
        direction: 'vertical',
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let mySwiper = new Swiper('#slider-main', {
    spaceBetween: 10,
    loopedSlides: 4,
    thumbs: {
      swiper: mySwiperNav,
    },
  });
})();

function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
  const header = document.querySelectorAll(headerSelector);
  const tab = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);
  if (header) {
    hideTabContent();
    showTabContent();
    function hideTabContent() {
      content.forEach((item) => {
        item.classList.remove('active');
      });
      tab.forEach((item) => {
        item.classList.remove(activeClass);
      });
    }
    function showTabContent(i = 0) {
      content[i].classList.add('active');
      tab[i].classList.add(activeClass);
    }
    header.forEach((item) => {
      if (item) {
        item.addEventListener('click', (e) => {
          const target = e.target;
          if (target.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item, i) => {
              if (target == item || target.parentNode == item) {
                hideTabContent();
                showTabContent(i);
              }
            });
          }
        });
      }
    });
  }
}
someTabs('.tabs', '.tabs__top-btn', '.tabs__content', 'tabs__top-btn--active');

//* Change Background Header
function scrollHeader() {
  const nav = document.querySelector('header');

  if (this.scrollY >= 100) {
    nav.classList.add('scroll-header');
  } else {
    nav.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);
