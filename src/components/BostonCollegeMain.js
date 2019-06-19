import React from 'react';
import { 
  Link
} from 'react-router-dom';
import HorizontalScroll from './HorizontalScroll';
import InteractivePrototype from './InteractivePrototype' 
import Fade from 'react-reveal/Fade';

class BostonCollegeMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '/assets/images/cd-app-image.png'
    };
  }
  
  render(){
    return (
      <main id="main" className="main project">
        <Fade>
          <section className="section section--project-banner project__section">
            <div className="project__banner">
              <picture>
                <source srcSet="/assets/images/boston-college-redesign-project-banner.jpg" media="(min-width: 1025px)" />
                <source srcSet="/assets/images/boston-college-redesign-project-banner--tablet.jpg" media="(min-width: 769px)" />
                <img srcSet="/assets/images/boston-college-redesign-project-banner--mobile.jpg" alt="Boston College Website Screenshot" />
              </picture>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--text-block project__section">
            <div className="section__container">
              <div className="text-block text-block--intro">
                <div className="text-block__main">
                  <p>With a beautiful campus, leading academic programs, and unique liberal arts education, Boston College was well positioned for the future. As many student’s first impression of the university, it was imperative to create a robust web presence that:</p>
                  <ul className="text-block__list">
                    <li>Was easy to use and navigate</li>
                    <li>Showcased compelling, media rich storytelling to attract and engage potential students</li>
                    <li>Was mobile responsive to accommodate for an uptick in traffic from mobile and tablet devices</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <HorizontalScroll 
            scrollItems={
              <>
                <div className="horizontal-scroll__item horizontal-scroll__item--1">
                  <div className="horizontal-scroll__item-container">
                    <h2 className="horizontal-scroll__title">
                      Rapid Prototyping
                    </h2>
                    <div className="horizontal-scroll__description">
                      To allow for quick conceptualizing of ideas, we utilized several stages of wireframing, starting with hand drawn prototypes.
                    </div>
                  </div>
                </div>
                <div className="horizontal-scroll__item horizontal-scroll__item--3">
                  <div className="horizontal-scroll__item-container">
                    <img className="horizontal-scroll__item-media" src="/assets/images/boston-college-prototype-stage-2.png" alt="Prototype stage 1, low fidelity" />
                    <div className="horizontal-scroll__item-label">Stage 1</div>
                  </div>
                </div>
                <div className="horizontal-scroll__item horizontal-scroll__item--4">
                  <div className="horizontal-scroll__item-container">
                    <img className="horizontal-scroll__item-media" src="/assets/images/boston-college-prototype-stage-3.png" alt="Prototype stage 2, moderate fidelity" />
                    <div className="horizontal-scroll__item-label">Stage 2</div>
                  </div>
                </div>
                <div className="horizontal-scroll__item horizontal-scroll__item--5">
                  <div className="horizontal-scroll__item-container">
                    <img className="horizontal-scroll__item-media" src="/assets/images/boston-college-prototype-stage-4.png" alt="Prototype stage 3, high fidelity" />
                    <div className="horizontal-scroll__item-label">Stage 3</div>
                  </div>
                </div>
              </>
            } 
          />
        </Fade>
        <Fade>
          <section className="section section--text-block section--jesuit-bg  project__section">
            <div className="section__container">
              <div className="text-block-wrapper text-block-wrapper--sidebar">
                <div className="text-block text-block--title">
                  <div className="text-block__side">
                    <h2 className="text-block__verticle-title">Discovery</h2>
                  </div>
                  <div className="text-block__main">
                    <div className="text-block__circle text-block__circle--left"></div>
                    <p>The 2016 relaunch of BC’s website was part of a two-year, campus-wide effort. Understanding the value of a good discovery process, we didn’t want to make the mistake of jumping straight into design without performing sufficient research and user experience testing. We spent the better part of a year analyzing site analytics, interviewing peer institutions, surveying our site visitors and editors, as well as conducting user experience tests.</p>
                    <p>As with most large institutions, our existing website’s navigation was based upon organizational structure, instead of our user’s needs. With 230 sites and over 40,000 pages, one of the most complex aspects of the project was creating a navigational structure that was cohesive and intuitive for a variety of audiences.</p>
                  </div>
                </div>
              </div>
              <div className="text-sidebar">
                <div className="text-sidebar__divider">
                  <img src="/assets/images/wave-divider.svg" alt="" />
                </div>
                <div className="text-sidebar__section">
                  <div className="text-sidebar__section-title">Client</div>
                  <ul className="text-sidebar__section-list">
                    <li>Tufts Technology Services, Boston College</li>
                  </ul>
                </div>
                <div className="text-sidebar__section">
                  <div className="text-sidebar__section-title">Technologies</div>
                  <ul className="text-sidebar__section-list">
                    <li>Adobe Experience Manager</li>
                  </ul>
                </div>
                <div className="text-sidebar__section">
                  <div className="text-sidebar__section-title">SITE</div>
                  <ul className="text-sidebar__section-list">
                    <li><a href="http://www.bc.edu">bc.edu</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--mockup project__section">
            <InteractivePrototype 
              mockupTitle="Visualizing the design"
              mockupDescription={              
                <p>As a campus wide initiative, it was important the the redesign process was truly inclusive.  In order to get buy in from stakeholders throughout the project, we developed increasingly interactive prototypes to allow users to visualize and vet proposed designs and functionality prior to their release.</p>
              }
              mockupImage={this.state.imageUrl}
            />
          </section>
        </Fade>
        <Fade>
          <section className="section section--text-block section--rays-bg project__section">
            <div className="section__container">
              <div className="text-block">
                <div className="text-block__main">
                  <div className="text-block__circle text-block__circle--right"></div>
                    <p>Relying heavily on our research to identify and connect our target audiences with the content they were looking for, our first step was to rebuild the information architecture, creating smaller, logical sections focused on user needs. While the homepage and upper-level navigation catered to prospective students, the secondary navigation focused on audience-specific information for current students, alumni, parents, faculty and staff.</p>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--project-media project__section">
            <div className="media-block media-block--fullwidth">
              <img src="/assets/images/boston-college-devices-desktop.jpg" alt="Laptop with Boston College website displayed" />
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--text-block project__section">
            <div className="section__container">
              <div className="text-block text-block--title">
                <div className="text-block__side">
                  <h2 className="text-block__verticle-title">Controlled Flexibility</h2>
                </div>
                <div className="text-block__main">
                  <p>When determining the platform for our build, BC decided upon Adobe Experience Manager (AEM), a system that was both powerful and extremely complicated, using the Apache Jackrabbit Oak content repository structure in lieu of the traditional relational database. The primary benefit of this structure was its scalability, allowing us to manage all of our sites using a single code base; something that I have found to be a challenge on both Wordpress and Drupal.</p>
                  <p>AEM also provided a unique editor interface,with drag and drop components for building pages. This allowed our team to develop site features in a modular way that could be combined to achieve custom layouts.</p> 
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--media-responsive">
            <div className="media-responsive">
              <div className="media-responsive__container">
                <img src="/assets/images/boston-college-wireframe-kit.png" alt="Wireframe example with various components" />
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--text-block project__section">
            <div className="section__container">
              <div className="text-block">
                <div className="text-block__main">
                  <p>We coined the term “Controlled Flexibility” to guide our design methodology.  We controlled the look and feel of the overall page template, ensuring a consistent user experience across the entire site, while offering flexibility to editors responsible for managing the page content. We developed section and grid components, allowing for any number of layout combinations. Within each layout, editors would be able to add any number of components, including images, text, sliders, infographics, and customizable feeds.</p>
                  <p>In redesigning the Boston College website, we were provided with a rare opportunity to reevaluate our approach to web development. For the first time we were able to fully integrate user research into our process, informing both the user and the editorial experience. In doing so, we were able to build a flexible, scalable system that could grow to meet the ever-changing needs of the university.</p>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--text-block project__section">
            <div className="text-block text-block--contact">
              <div className="text-block__main">
                <p>Interested in learning more about redesigning a university website?</p>
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

export default BostonCollegeMain;