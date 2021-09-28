$(function(){
  
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
    readOnly: true
  });

  // Таймер обратного отсчёта
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



});