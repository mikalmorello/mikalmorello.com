$('.header__menu').on('click', function(){
  if( $('.main-menu').hasClass('navigation--is-visible') ) {
    $('.main-menu').removeClass('navigation--is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
  $('body').removeClass('body--overflow-hidden');
  });
  } else {
  $('.main-menu').addClass('main-menu--is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
              $('body').addClass('body--overflow-hidden');
            });	
          }
        });