import React from 'react';

class ContactThanksBanner extends React.Component {
  
  render(){
    return (
      <section id="banner" className="banner banner--contact">
        <div className="banner__container">
          <div className="banner__content">
            <div className="banner__content-container">
              <div className="banner__divider">
                <img src="/assets/images/wave-divider.svg" alt=""/>
              </div>
              <h1 class="banner__title">Success!</h1>
              <div class="banner__subtitle">
                Thanks for getting in touch. I will respond shortly.
              </div>
            </div>
          </div>
          <div className="banner__media">
            <img src="/assets/images/watertown-arsenal.jpg" alt="Watertown Arsenal" />
          </div>
        </div>
      </section>
    )
  }
  
}
 
export default ContactThanksBanner;