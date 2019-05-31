/* HEADER SCROLL */

(function(){
  
  // VARIABLES

  const header = document.getElementById('header'),
        headerTop = header.offsetTop,
        headerHeight = header.clientHeight;


  // FUNCTIONS
  
  function stickyNavigation() {
    var scrollAmount = window.scrollY,
        windowHeight = window.innerHeight,
        headerOffset = windowHeight;

    // Make the navigation fixed but hidden after scrolling past navigation
    if (scrollAmount >= headerHeight) {
      header.classList.add('header--scroll');
    } else {
      header.classList.remove('header--scroll');
    }
    
    // Make the navigation sticky after scrolling past the header offset
    if (scrollAmount > headerOffset) {
      header.classList.add("header--sticky");
    } else {
      header.classList.remove("header--sticky");
    }
  }

  // EVENTS
  
  window.addEventListener('scroll', stickyNavigation);

})();