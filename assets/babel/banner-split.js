/* MAIN MENU */

(function(){
  
  // VARIABLES
  
  var header = document.getElementById('header'),
      bannerButton = document.getElementsByClassName('banner__button'),
      banner = document.getElementById('banner'),
      subtitleDesigner = document.getElementById('subtitleDesigner'),
      bannerSubtitle = document.getElementsByClassName('banner__subtitle'),
      subtitleDeveloper = document.getElementById('subtitleDeveloper'),
      subtitleStrategist = document.getElementById('subtitleStrategist');

      
  
  // FUNCTIONS
  function bannerButtonClick(){
    event.preventDefault();
    console.log(this + " has been clicked");
    banner.classList.remove('banner--designer', 'banner--developer', 'banner--strategist' );
    header.classList.remove('header--light', 'header--dark'),
    bannerSubtitleClear();
    bannerButtonClear();
    if (this.classList.contains('banner__button--designer')){ 
      banner.classList.add('banner--designer');
      subtitleDesigner.classList.add('banner__subtitle--active');
      header.classList.add('header--light');
      this.classList.add('button--active');
    } else if (this.classList.contains('banner__button--developer')){
      banner.classList.add('banner--developer');
      subtitleDeveloper.classList.add('banner__subtitle--active');
      header.classList.add('header--dark');
      this.classList.add('button--active');
    } else if (this.classList.contains('banner__button--strategist')) {
      banner.classList.add('banner--strategist');
      subtitleStrategist.classList.add('banner__subtitle--active');
      header.classList.add('header--light');
      this.classList.add('button--active');
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
  for (var i = 0; i < bannerButton.length; i++) {
    bannerButton[i].addEventListener("click", bannerButtonClick);
  }
  
  bannerPortrait.addEventListener("click", bannerButtonClick);
  
   
})();