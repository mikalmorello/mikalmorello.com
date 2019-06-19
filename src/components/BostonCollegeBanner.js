import React from 'react';

class BostonCollegeBanner extends React.Component {
  
  render(){
    return (
      <section id="banner" className="banner banner--project">
        <div className="banner__container">
          <div className="banner__introduction">
            <h1 className="banner__title">Boston College Website Redesign</h1>
            <div className="banner__description">
              A leader among institutions of higher education, Boston College, the first institution in the Boston area, set the stage for what would become one of the most college rich cities in the world. In a crowded field, however, it’s important to make a lasting impression. With a decade having passed since the site’s last redesign, a lifetime in technology terms, a refresh was necessary to help them break through the noise.
            </div>
          </div>
          <div className="banner__introduction-sidebar">
            <div className="banner__divider">
              <img src="/assets/images/wave-divider.svg" alt=""/>
            </div>
            <div className="banner__role">
              <div className="banner__role-title">PROJECT ROLE</div>
              <ul className="banner__role-position">
                <li>User Experience,</li>
                <li>Technical Strategist</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
}

export default BostonCollegeBanner;