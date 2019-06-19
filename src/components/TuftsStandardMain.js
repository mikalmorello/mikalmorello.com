import React from 'react';
import { 
  Link
} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class TuftsStandardMain extends React.Component {
  
  render(){
    return (
      <main id="main" className="main project">
        <Fade>
          <section className="section section--project-banner project__section">
            <div className="project__banner">
              <picture>
                <source srcSet="/assets/images/tufts-standard-project-banner.jpg" media="(min-width: 1025px)" />
                <source srcSet="/assets/images/tufts-standard-project-banner--tablet.jpg" media="(min-width: 769px)" />
                <img srcSet="/assets/images/tufts-standard-project-banner--mobile.jpg" alt="Tufts Standard design System" />
              </picture>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--text-block project__section">
            <div className="section__container">
              <div className="text-block text-block--intro text-block--title">
                <div className="text-block__side">
                  <h2 className="text-block__verticle-title">Rapid Recreation</h2>
                </div>
                <div className="text-block__main">
                  <p>Unlike WordPress, Drupal 7 doesn’t provide a clear path for this type of site configuration. Using a multi-site style approach for managing Drupal sites, we developed a starter theme and a preset list of configurations that we could duplicate with each new site. This became what we refer to as the university “standard”.</p>
                  <p>The strategy behind this approach was to standardize many aspects of our site development process, refining a list of common modules, applying consistent front-end tooling, and reusing base functionality across sites. As an added bonus, applying our “standard” created a consistent user and brand experience across our sites.</p>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--project-media project__section">
            <div className="media-block media-block--fullwidth">
              <img src="/assets/images/tufts-standard-devices-desktop.jpg" alt="Laptop with Global site displayed" />
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--text-block project__section">
            <div className="section__container">
              <div className="text-block-wrapper text-block-wrapper--sidebar">
                <div className="text-block">
                  <div className="text-block__main">
                    <p>While this model gave us the capability to rapidly launch new sites, adding improvements and new functionality along the way, we rarely had an opportunity to backport enhancements to previous versions of the build. In turn, this lead to slight variations between sites and made it impossible to upgrade or test the sites in any unified way.</p>
                  </div>
                </div>
                <div className="text-block text-block--title">
                  <div className="text-block__side">
                    <h2 className="text-block__verticle-title">The “Standard” Revisited</h2>
                  </div>
                  <div className="text-block__main">
                    <p>With the release of Drupal 8, we had the unique opportunity to once again revisit our approach for building a scalable Drupal platform, utilizing the integration of composer to manage project dependencies. First step; rebuilding our Drupal 7 offering in Drupal 8.</p>
                    <p>Having shifted to a component-based structure for our later site builds, Drupal 8 allowed us to isolate our components using libraries, while the paragraphs module helped us create flexible page layouts with reusable elements, aligning perfectly to a “standard” based web framework. Over time, we could seamlessly incorporate new components and add additional functionality, shifting our time and effort toward serving the community as whole, instead of one site at time.</p>
                  </div>
                </div>
              </div>
              <div className="text-sidebar">
                <div className="text-sidebar__divider">
                  <img src="/assets/images/wave-divider.svg" alt=""/>
                </div>
                <div className="text-sidebar__section">
                  <div className="text-sidebar__section-title">Client</div>
                  <ul className="text-sidebar__section-list">
                    <li>Digital Services, Tufts University</li>
                  </ul>
                </div>
                <div className="text-sidebar__section">
                  <div className="text-sidebar__section-title">Technologies</div>
                  <ul className="text-sidebar__section-list">
                    <li>Drupal 8</li>
                  </ul>
                </div>
                <div className="text-sidebar__section">
                  <div className="text-sidebar__section-title">SITE</div>
                  <ul className="text-sidebar__section-list">
                    <li><a href="http://global.tufts.edu">global.tufts.edu</a></li>
                    <li><a href="http://summer.tufts.edu">summer.tufts.edu</a></li>
                    <li><a href="http://dental.tufts.edu">dental.tufts.edu</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--media-text project__section">
            <div className="media-text media-text--left">
              <div className="media-text__container">
                <div className="media-text__introduction">
                  <h2 className="media-text__title">
                    Modular Design
                  </h2>
                  <div className="media-text__description">
                    We developed our sites in a modular way, isolating functionality and allowing for ease of replication across projects.
                  </div>
                </div>
                <div className="media-text__media">
                  <img src="/assets/images/tufts-standard-modular-design.svg" alt="Modular site design with multiple sections" />
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--text-block project__section">
            <div className="section__container">
              <div className="text-block">
                <div className="text-block__main">
                  <p>Reusable site features were stored in a base theme, allowing for site overrides and customizations to be stored in a child theme, which would only be used if absolutely necessary. All site functionality requests were to be vetted against the needs of the community and ported into the base theme regularly, allowing for an iterative development cycle. Isolating common site functionality by setting up unique repositories for our base theme and custom modules, allowed us to pull these remote repositories to each site using composer.</p>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--text-block project__section">
            <div className="media-background media-background--grid">
              <h2 className="media-background__title">Common Code Base</h2>
              <div className="media-background__content">
                <img src="/assets/images/tufts-standard-theme-structure.svg" alt="Theme structure, base theme with multiple child themes" />
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--text-block project__section">
            <div className="section__container">
              <div className="text-block text-block--title">
                <div className="text-block__side">
                  <h2 className="text-block__verticle-title">Scaling Sustainably</h2>
                </div>
                <div className="text-block__main">
                  <p>Creating a scalable framework has ensured our ability to develop new sites rapidly, while supporting and growing the functionality of existing sites and adhering to DRY principles of not maintaining the same code in multiple locations. With limited customizations, we can confidently push core and module upgrades to all sites without worrying about independently testing each one.</p>
                  <p>Although this is still a work in progress, we have made great strides in building out a web development process that can help a small team stay agile with the ever-changing needs of the university.</p>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--text-block project__section">
            <div className="text-block text-block--contact">
              <div className="text-block__main">
                <p>Interested in learning more about Drupal 8 development?</p>
              </div>
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

export default TuftsStandardMain;