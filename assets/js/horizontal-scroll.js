"use strict";

(function () {
  // VARIABLES
  var slider = document.querySelector('.horizontal-scroll__items');
  var isDown = false;
  var startX;
  var scrollLeft; // EVENTS

  slider.addEventListener('mousedown', function (e) {
    isDown = true;
    slider.classList.add('horizontal-scroll__items--active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', function () {
    isDown = false;
    slider.classList.remove('horizontal-scroll__items--active');
  });
  slider.addEventListener('mouseup', function () {
    isDown = false;
    slider.classList.remove('horizontal-scroll__items--active');
  });
  slider.addEventListener('mousemove', function (e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - slider.offsetLeft;
    var walk = (x - startX) * 3; //scroll-fast

    slider.scrollLeft = scrollLeft - walk;
  });
})();