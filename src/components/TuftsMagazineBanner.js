import React from 'react';

class TuftsMagazineBanner extends React.Component {
  
  render(){
    return (
      <section id="banner" className="banner banner--project">
        <div className="banner__container">
          <div className="banner__introduction">
            <h1 className="banner__title">Tufts Magazine</h1>
            <div className="banner__description">
              After decades of existing as a primarily print publication, in 2017 Tufts’ award-winning alumni magazine began the process of reinventing itself, adopting a new, “digital first” strategy. Seeking to support this strategy by adding compelling, web-only features to their arsenal, the success of this shift in approach was dependent on the development of a robust, dynamic web platform, capable of showcasing enhanced multimedia storytelling.
            </div>
          </div>
          <div className="banner__introduction-sidebar">
            <div className="banner__divider">
              <img src="/assets/images/wave-divider.svg" alt="" />
            </div>
            <div className="banner__role">
              <div className="banner__role-title">Project Role</div>
              <ul className="banner__role-position">
                <li>Front-end Web Developer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
}

export default TuftsMagazineBanner;