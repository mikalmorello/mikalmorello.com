/* COMPANY */

(function(){
  
  //VARIABLES
  const body = document.getElementsByTagName('body')[0];
  
  let company = window.location.hash.substring(1);
  
  switch(company) {
    case 'harvard': 
      body.classList.add('body--harvard');
      console.log('Harvard ' + company);
      break;
    case 'mit':
      body.classList.add('body--mit');
      console.log('MIT ' + company);
      break;
    case 'massart':
      body.classList.add('body--massart');
      console.log('MassArt ' + company);
      break;
    default:
      break;
  }

})();