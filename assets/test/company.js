/* COMPANY */
(function () {
  // VARIABLES
  const body = document.getElementsByTagName('body')[0],
        logo = document.getElementsByClassName('header__brand')[0];
  let company = window.location.hash.substring(1),
      companyDiv = document.createElement("div"); // FUNCTIONS

  function setCompany(companyName) {
    console.log(companyName + 'existing');
    companyDiv.innerHTML = `
          <div class="header__company">
            <span class="header__company-sign">+ </span>
            <img class="header__company-logo" src="/assets/images/company/edx.svg" alt="edx" />
          </div> 
        `;
    logo.appendChild(companyDiv);
  }

  switch (company) {
    case 'harvard':
      body.classList.add('body--harvard');
      break;

    case 'mit':
      body.classList.add('body--mit');
      break;

    case 'edx':
      body.classList.add('body--edx');
      setCompany(company);
      break;

    case 'hbsp':
      body.classList.add('body--hbsp');
      break;

    case 'wgbh':
      body.classList.add('body--wgbh');
      break;

    case 'massart':
      body.classList.add('body--massart');
      break;

    default:
      break;
  }
})();