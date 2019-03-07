/* MAIN MENU */

(function(){
  
  // VARIABLES
  
  var bannerButton = document.getElementsByClassName('banner__button'),
      banner = document.getElementById('banner'),
      subtitleDesigner = document.getElementById('subtitleDesigner'),
      subtitleDeveloper = document.getElementById('subtitleDeveloper'),
      subtitleStrategist = document.getElementById('subtitleStrategist'),
      bannerSubtitle = document.getElementsByClassName('banner__subtitle');
      
  
  // FUNCTIONS
  function bannerButtonClick(){
    event.preventDefault();
    console.log(this + " has been clicked");
    banner.classList.remove('banner--designer', 'banner--developer', 'banner--strategist' );
    bannerSubtitleClear();
    bannerButtonClear();
    this.classList.add('button--active');
    if (this.classList.contains('banner__button--designer')){ 
      banner.classList.add('banner--designer');
      subtitleDesigner.classList.add('banner__subtitle--active');
    } else if (this.classList.contains('banner__button--developer')){
      banner.classList.add('banner--developer');
      subtitleDeveloper.classList.add('banner__subtitle--active');
    } else if (this.classList.contains('banner__button--strategist')) {
      banner.classList.add('banner--strategist');
      subtitleStrategist.classList.add('banner__subtitle--active');
    } else {
      console.log('no match');
    }
  }
  
  function bannerSubtitleClear(){
    for (var i = 0; i < bannerSubtitle.length; ++i) {
      var item = bannerSubtitle[i];  
      item.classList.remove('banner__subtitle--active');
      console.log('subtitle class loop');
    }
  }
  
  function bannerButtonClear (){
    for (var i = 0; i < bannerButton.length; ++i) {
      var item = bannerButton[i];  
      item.classList.remove('button--active');
      console.log('bannerButton class loop');
    }
  }
  
  
  // CLICK EVENT
  for (i = 0; i < bannerButton.length; i++) {
    bannerButton[i].addEventListener("click", bannerButtonClick);
  }
  
  bannerPortrait.addEventListener("click", function(){
    bannerButtonClick();
  });
  

   
})();