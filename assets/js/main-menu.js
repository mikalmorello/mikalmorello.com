/* MAIN MENU */

(function(){
  
  // VARIABLES
  
  const body = document.getElementsByTagName('body')[0],
        header = document.getElementById('header'),
        headerMenuButton = document.getElementById('headerMenuButton'),
        mainMenu = document.getElementById('mainMenu');

  // FUNCTIONS
  
  function showMenu(callback){
    mainMenu.classList.add('main-menu--is-visible');
    header.classList.add('header--menu-light');
    body.classList.add('body--menu-open');
    setTimeout(callback, 400);
  }
  
  function hideMenu(callback){
    mainMenu.classList.remove('main-menu--is-visible');
    header.classList.remove('header--menu-light');
    body.classList.remove('body--menu-open');
    callback();
  }
  
  function bodyOverflowHide(){
    body.classList.add('body--overflow-hidden');
  }
  
  function bodyOverflowShow(){
    body.classList.remove('body--overflow-hidden');
  }
  
  // EVENTS
  
  headerMenuButton.addEventListener('click', function() {
    if(mainMenu.classList.contains('main-menu--is-visible') ) {
      hideMenu(bodyOverflowShow);
    } else {
      showMenu(bodyOverflowHide);
    }
  });
  
})();