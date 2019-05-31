"use strict";

/* SCROLL */
window.onload = function () {
  var easeInCubic = function easeInCubic(t) {
    return t * t * t;
  };

  var scrollElems = document.getElementsByClassName('scroll'); //console.log(scrollElems);

  var scrollToElem = function scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset) {
    //debugger;
    var runtime = stamp - start;
    var progress = runtime / duration;
    var ease = easeInCubic(progress);
    progress = Math.min(progress, 1);
    console.log(startScrollOffset, startScrollOffset + scrollEndElemTop * ease);
    var newScrollOffset = startScrollOffset + scrollEndElemTop * ease;
    window.scroll(0, startScrollOffset + scrollEndElemTop * ease);

    if (runtime < duration) {
      requestAnimationFrame(function (timestamp) {
        var stamp = new Date().getTime();
        scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
      });
    }
  };

  for (var i = 0; i < scrollElems.length; i++) {
    var elem = scrollElems[i];
    elem.addEventListener('click', function (e) {
      e.preventDefault();
      var scrollElemId = e.target.href.split('#')[1];
      var scrollEndElem = document.getElementById(scrollElemId);
      var anim = requestAnimationFrame(function () {
        var stamp = new Date().getTime();
        var duration = 1200;
        var start = stamp;
        var startScrollOffset = window.pageYOffset;
        var scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;
        scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset); // scrollToElem(scrollEndElemTop);
      });
    });
  }
};