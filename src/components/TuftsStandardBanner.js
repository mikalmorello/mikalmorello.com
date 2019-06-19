import React from 'react';

class TuftsStandardBanner extends React.Component {
  
  render(){
    return (
      <section id="banner" className="banner banner--project">
        <div className="banner__container">
          <div className="banner__introduction">
            <h1 className="banner__title">Tufts Web Standard</h1>
            <div className="banner__description">
              From a university’s main .edu website to its individual school, department and center sites, in higher ed, the digital footprint for a single institution can be vast. With limited resources and a continuously growing portfolio of Drupal sites, it was clear our existing development model was unsustainable for our small digital team. We needed a solution for scaling development, while simultaneously reducing our maintenance burden.
            </div>
          </div>
          <div className="banner__introduction-sidebar">
            <div className="banner__divider">
              <img src="/assets/images/wave-divider.svg" alt="" />
            </div>
            <div className="banner__role">
              <div className="banner__role-title">PROJECT ROLE</div>
              <ul className="banner__role-position">
                <li>Front-end Web Developer,</li>
                <li>Technical Strategist</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
}

export default TuftsStandardBanner;