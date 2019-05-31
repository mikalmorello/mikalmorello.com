(function(){
  
  // VARIABLES
  
  var body = document.getElementsByTagName('body')[0],
      modal = document.getElementsByClassName('modal')[0],
      modalImage = document.getElementsByClassName("modal__content")[0],
      modalCaption = document.getElementsByClassName("modal__caption")[0],
      modalButton = document.getElementsByClassName("modal__button")[0],
      modalImages = Array.from(document.querySelectorAll('.media--lightbox'));
  
  
  // FUNCTIONS
  function bodyOverflowHide(){
    body.classList.add('body--overflow-hidden');
  }
  
  function bodyOverflowShow(){
    body.classList.remove('body--overflow-hidden');
  }
  
  
  // EVENTS
  
  modalImages.forEach((arrayElement, index) => {
    modalImages[index].onclick = function(){
      modalImage.src = modalImages[index].src;
      modalCaption.innerHTML = modalImages[index].alt;
      modal.classList.remove('modal--closed');
      modal.classList.add('modal--open');
      bodyOverflowHide();
    }
  });
  
  // When the user clicks on <span> (x), close the modal
  modalButton.onclick = function() { 
    modal.classList.remove('modal--open')
    modal.classList.add('modal--closed');
    bodyOverflowShow(); 
  }

})();