$(function () {

  // Слайдер на главной странице
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  // Звёздный рейтинг
  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    starSvg: '<svg><use xlink:href="images/sprite.svg#star"></use></svg>'
  });

  // Фильтер цены на странице Shop Page
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  // Стилизация выпадающего списка на странице Shop Page
  $('.select-style, .product__num').styler();

  // Переключение стиля отображения товаров на странице Shop Page
  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.products-item').addClass('products-item--list');
  });

  $('.button-grid').on('click', function () {
    $('.products-item').removeClass('products-item--list');
  });

  // Слайдер на странице Product-page
  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false,
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
    fade: true
  });

  // Переквлючатель табов на странице Product-page
  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  // Слайдер на странице Blog page
  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/sprite.svg#angle-left-solid"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/sprite.svg#angle-right-solid"></use></svg></button>',
    infinite: false,
  });

  // Таймер обратного отсчёта на Главной странице
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo-clock');
    const daysSpan = clock.querySelector('.promo-clock__days');
    const hoursSpan = clock.querySelector('.promo-clock__hours');
    const minutesSpan = clock.querySelector('.promo-clock__minutes');
    const secondsSpan = clock.querySelector('.promo-clock__seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  const deadline = $('.promo-clock').attr('data-time');
  initializeClock('promo-clock', deadline);

  // Карта Google map на странице Contacts
  // let map;

  // function initMap() {
  //   map = new google.maps.Map(document.getElementById("map"), {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   });
  // }
});