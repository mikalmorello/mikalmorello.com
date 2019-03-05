jQuery(document).ready(function($){
  
	//on desktop, switch from product intro div to product mockup div
	$('#mockupButton').on('click', function(event){
		event.preventDefault();
		//detect the CSS media query using .cd-product-intro::before content value
		var mediaQuery = window.getComputedStyle(document.querySelector('.mockup__intro'), '::before').getPropertyValue('content');
		if(mediaQuery == 'mobile') {
			$('body,html').animate({'scrollTop': $($(this).attr('href')).offset().top }, 200); 
		} else {
			$('.mockup__container').addClass('mockup__container--open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('.mockup__close-button').addClass('is-visible');
			});
		}
	});
	//on desktop, switch from product mockup div to product intro div
	$('.mockup__close-button').on('click', function(){
		$('.mockup__container').removeClass('mockup__container--open');
		$('.mockup__close-button').removeClass('is-visible');
	});
});