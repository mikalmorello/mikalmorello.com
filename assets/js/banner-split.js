/* MAIN MENU */

(function(){
  
  // VARIABLES
  
  var bannerButton = document.getElementsByClassName('banner__button');
  var banner = document.getElementById('banner');
  
  // FUNCTIONS
  function bannerButtonClick(){
    event.preventDefault();
    console.log(this + " has been clicked");
    if (this.classList.contains('banner__button--designer')){ 
      banner.classList.add('banner--designer');
    } else if (this.classList.contains('banner__button--developer')){
      banner.classList.add('banner--developer');
    } else if (this.classList.contains('banner__button--strategist')) {
      banner.classList.add('banner--strategist');
    } else {
      console.log('no match');
    }
  }
  
  
  // CLICK EVENT
  for (i = 0; i < bannerButton.length; i++) {
    bannerButton[i].addEventListener("click", bannerButtonClick);
  }

   
})();