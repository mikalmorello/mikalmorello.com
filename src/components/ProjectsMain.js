import React from 'react';
import { 
  Link
} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class ProjectsMain extends React.Component {
  
  render(){
    return (
      <main id="main" className="main">
        <Fade>
          <section id="sectionProjects" className="section section--projects">
            <div className="projects projects--horizontal">
              <div className="projects__container">
                <article className="project-card">
                  <Link to="/tufts-magazine" className="project-card__content">
                    <h2 className="project-card__title">Tufts Magazine</h2>
                    <ul className="project-card__tags">
                      <li className="project-card__tag">Development</li>
                    </ul>
                    <div className="project-card__media">
                      <img src="/assets/images/project-tufts-magazine-card.jpg" alt="Tufts Magazine Thumbnail"/>
                    </div>
                  </Link>
                </article>
                <article className="project-card">
                  <Link to="/tufts-university-web-standard" className="project-card__content">
                    <h2 className="project-card__title">Tufts Standard</h2>
                    <ul className="project-card__tags">
                      <li className="project-card__tag">Development</li>
                      <li className="project-card__tag">Strategy</li>
                    </ul>
                    <div className="project-card__media">
                      <img src="/assets/images/project-tufts-standard-card.jpg" alt="Tufts D8 Standard Thumbnail"/>
                    </div>
                  </Link>
                </article>
                <article className="project-card">
                  <Link to="/boston-college-redesign" className="project-card__content">
                    <h2 className="project-card__title">Boston College Website Redesign</h2>
                    <ul className="project-card__tags">
                      <li className="project-card__tag">UX</li>
                      <li className="project-card__tag">Strategy</li>
                    </ul>
                    <div className="project-card__media">
                      <img src="/assets/images/project-boston-college-card.jpg" alt="Boston College Redesign Thumbnail"/>
                    </div>
                  </Link>
                </article>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section id="sectionOtherProject" className="section section--other-projects">
            <div className="other-projects">
              <div className="other-projects__divider">
                <img src="/assets/images/wave-divider.svg" alt=""/>
              </div>
              <h2 className="other-projects__title">Other Projects</h2>
              <ul className="other-projects__list">
                <li className="other-projects__list-item">Tufts.edu</li>
                <li className="other-projects__list-item">Tufts Summer Sessions</li>
                <li className="other-projects__list-item">Tufts Dental</li>
                <li className="other-projects__list-item">Tufts Global</li>
                <li className="other-projects__list-item">Boston College Alumni &amp; Friends</li>
                <li className="other-projects__list-item">BC Social</li>
                <li className="other-projects__list-item">BC Grouper</li>
                <li className="other-projects__list-item">Eagelapps</li>
                <li className="other-projects__list-item">150 on the road</li>
                <li className="other-projects__list-item">CASE District 1</li>
                <li className="other-projects__list-item">Accessibility Analytics</li>
              </ul>
            </div>
          </section>
        </Fade>
        <Fade>
          <section id="sectionContact" className="section section--contact">
            <div className="contact-card contact-card--minimal">
              <div className="contact-card__container">
                <h2 className="contact-card__titles">
                  <Link to="/contact">
                    <span className="contact-card__title">Let's Connect</span> 
                  </Link>
                </h2>
              </div>
            </div>
          </section>
        </Fade>
      </main>
    )
  }
  
}

export default ProjectsMain;