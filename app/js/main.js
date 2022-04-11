window.addEventListener('DOMContentLoaded', () => {
  // * ===== Custom select
  (function customSelect() {
    const selects = document.querySelectorAll('.select');
    selects.forEach((el) => {
      if (el) {
        const select = new Choices(el, {
          itemSelectText: '',
          searchEnabled: false,
        });
      }
    });
  })();

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      if (el) {
        el.addEventListener('click', (e) => {
          const target = e.target.closest(accordion);
          const content = target.querySelector(accordionContent);
          target.classList.toggle('active');
          if (target.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            content.style.maxHeight = null;
          }
        });
      }
    });
  };
  toggleAccordion('.accordion__control', '.accordion__content', '.accordion');

  // * ===== Slider Handle
  (function handlesSlider() {
    let handlesSlider = document.querySelectorAll('.range-slider__range');
    let minStep = document.querySelectorAll('.range-slider__min');
    let maxStep = document.querySelectorAll('.range-slider__max');
    if (handlesSlider) {
      handlesSlider.forEach((el) => {
        noUiSlider.create(el, {
          start: [10000, 100000],
          connect: true,
          padding: [10, 10],
          range: {
            min: [0],
            max: [120000],
          },
          format: wNumb({
            decimals: 0,
            thousand: ' ',
            suffix: ' руб. ',
          }),
        });

        el.noUiSlider.on('update', function (values, handle) {
          if (handle) {
            maxStep.forEach((el) => {
              el.innerHTML = values[handle];
            });
          } else {
            minStep.forEach((el) => {
              el.innerHTML = values[handle];
            });
          }
        });
      });
    }
  })();

  // // * ==== Single Product
  // (function verticalSlider() {
  //   let mySwiperNav = new Swiper('#slider-nav', {
  //     slidesPerView: 'auto',
  //     spaceBetween: 12,
  //     direction: 'vertical',
  //     watchSlidesVisibility: true,
  //     watchSlidesProgress: true,

  //     breakpoints: {
  //       320: {
  //         direction: 'horizontal',
  //       },
  //       991: {
  //         direction: 'vertical',
  //       },
  //     },

  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //   });

  //   let mySwiper = new Swiper('#slider-main', {
  //     spaceBetween: 10,
  //     loopedSlides: 4,
  //     thumbs: {
  //       swiper: mySwiperNav,
  //     },
  //   });
  // })();

  // * ==== Counter
  (function counter() {
    const counterEl = document.querySelector('.counter');
    const inputEl = document.querySelector('.counter__input');

    if (counterEl) {
      counterEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('counter__btn--increase')) {
          inputEl.value++;
        }

        if (e.target.classList.contains('counter__btn--decrease')) {
          if (inputEl.value > 1) {
            inputEl.value--;
          }
        }
      });
    }
  })();
  // * ===== Sliders
  (function sliderToday() {
    const sliderEl = document.querySelectorAll('.products__slider');
    sliderEl.forEach((item) => {
      if (item) {
        new Swiper(item, {
          slidesPerView: 'auto',
          spaceBetween: 20,
          navigation: {
            nextEl: item.querySelector('.swiper-button-next'),
            prevEl: item.querySelector('.swiper-button-prev'),
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
          },
        });
      }
    });
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.phone-box__call', '.popup--back-call', '.popup__close');
  })();

  (function sliderHero() {
    const sliderEl = document.querySelector('.hero__slider');
    if (sliderEl) {
      new Swiper(sliderEl, {
        slidesPerView: 1,
        navigation: {
          nextEl: document.querySelector('.hero__content .swiper-button-next'),
          prevEl: document.querySelector('.hero__content .swiper-button-prev'),
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  })();

  (function slider() {
    const sliderEl = document.querySelector('.type__slider');
    new Swiper(sliderEl, {
      spaceBetween: 10,
      slidesPerView: 'auto',

      navigation: {
        nextEl: sliderEl.querySelector('.swiper-button-next'),
        prevEl: sliderEl.querySelector('.swiper-button-prev'),
      },
    });
  })();

  (function sliderStyle() {
    const sliderEl = document.querySelector('.style__slider');
    new Swiper(sliderEl, {
      spaceBetween: 25,
      slidesPerView: 'auto',

      navigation: {
        nextEl: sliderEl.querySelector('.swiper-button-next'),
        prevEl: sliderEl.querySelector('.swiper-button-prev'),
      },
    });
  })();

  (function sliderBrands() {
    const sliderEl = document.querySelector('.brands__slider');
    new Swiper(sliderEl, {
      spaceBetween: 0,
      slidesPerView: 'auto',
    });
  })();

  (function sliderToday2() {
    const sliderEl = document.querySelector('.bought-today');

    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
        nextEl: sliderEl.querySelector('.swiper-button-next'),
        prevEl: sliderEl.querySelector('.swiper-button-prev'),
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
    });
  })();

  (function sliderTabs() {
    const sliderEl = document.querySelectorAll('.products-tabs__slider');
    sliderEl.forEach((item) => {
      new Swiper(item, {
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
          nextEl: item.querySelector('.swiper-button-next'),
          prevEl: item.querySelector('.swiper-button-prev'),
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
      });
    });
  })();

  (function sliderTabsNews() {
    const sliderEl = document.querySelectorAll('.products-news__slider');
    sliderEl.forEach((item) => {
      new Swiper(item, {
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
          nextEl: item.querySelector('.swiper-button-next'),
          prevEl: item.querySelector('.swiper-button-prev'),
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
      });
    });
  })();

  // * ===== Show Filters
  (function showFilters() {
    const filterBtn = document.querySelector('.catalog__filter-btn');
    const filters = document.querySelector('.catalog__filters');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    if (filters) {
      filterBtn.addEventListener('click', (e) => {
        filters.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
      });
      overlay.addEventListener('click', (e) => {
        filters.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
      });
    }
  })();

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

  // ! Change
  (function changeHeader() {
    const header = document.querySelector('header');
    if (window.pageYOffset >= 100) {
      console.log(1);
      header.classList.add('scroll-header');
    }
  })();

  // * ===== Toggle Tabs
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
  // someTabs(
  //   '.tabs',
  //   '.tabs__top-btn',
  //   '.tabs__content',
  //   'tabs__top-btn--active'
  // );
  someTabs(
    '.products-tabs__wrapper',
    '.prod-tabs__top-btn',
    '.products-tabs__slider',
    'prod-tabs__top-btn--active'
  );
  someTabs(
    '.products-news__wrapper',
    '.prod-news__top-btn',
    '.products-news__slider',
    'prod-news__top-btn--active'
  );
});
