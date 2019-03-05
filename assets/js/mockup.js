/* MOCKUP */

(function(){
  
  // VARIABLES
  
  const mockupCloseButton = document.getElementById('mockupCloseButton'),
        mockupContainer = document.getElementById('mockupContainer'),
        mockupButton = document.getElementById('mockupButton');
  
  
  // FUNCTION
  
  function showOverlay(callback){
    mockupContainer.classList.add('mockup__container--open');
    setTimeout(callback);
  }
  
  function showCloseButton(){
    mockupCloseButton.classList.add('is-visible');
  }
  
  
  // CLICK EVENTS
  
  mockupButton.addEventListener('click', function() {
    event.preventDefault();
    showOverlay(showCloseButton);
  });

  mockupCloseButton.addEventListener('click', function() {
    mockupContainer.classList.remove('mockup__container--open');
    mockupCloseButton.classList.remove('is-visible');
  });

})();