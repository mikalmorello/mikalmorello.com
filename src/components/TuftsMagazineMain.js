import React from 'react';
import { 
  Link
} from 'react-router-dom';
import HorizontalScroll from './HorizontalScroll'
import Fade from 'react-reveal/Fade';

class TuftsMagazineMain extends React.Component {
  
  render(){
    return (
      <main id="main" className="main project">
        <Fade>
          <section className="section section--project-banner project__section">
            <div className="project__banner">
              <picture>
                <source srcSet="/assets/images/tuftsmagazine-project-banner.jpg" media="(min-width: 1025px)" />
                <source srcSet="/assets/images/tuftsmagazine-project-banner--tablet.jpg" media="(min-width: 769px)" />
                <img srcSet="/assets/images/tuftsmagazine-project-banner--mobile.jpg" alt="Tufts Magazine Screenshot" />
              </picture>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--text-block project__section">
            <div className="section__container">
              <div className="text-block text-block--intro">
                <div className="text-block__title">
                  <h2 className="text-block__verticle-title">A Digital Revival</h2>
                </div>
                <div className="text-block__main">
                 <p>To be a truly “digital first” publication, the creation of the magazine would need to be completely rethought, both in terms of how it was to be presented and curated; this shift was not about merely translating print to web, but rather designing their content for the web, leading the charge for how Tufts would approach digital storytelling. Readers of the print publications could now enhance their experience by visiting the website for an array of complimentary rich media features, including photo essays, galleries, podcasts, and videos.</p>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--media-grid project__section">
            <div className="media-grid">
              <div className="media-grid__introduction">
                Storytelling brought to life through engaging audio, video, and photography.
              </div>
              <div className="media-grid__media media-grid__media--one">
                <div className="media-grid__media-text">
                  <a href="https://tuftsmagazine.com/issues/magazine/2016/fall/finding-john-brown">Video</a>
                </div>
                <div className="media-grid__media-element">
                  <img src="/assets/images/tufts-magazine-media-grid-one.jpg" alt="Finding John Brown"/>
                </div>
              </div>
              <div className="media-grid__media media-grid__media--two">
                <div className="media-grid__media-text">
                  <a href="https://tuftsmagazine.com/issues/magazine/2017/fall/storyteller">Photography</a>
                </div>
                <div className="media-grid__media-element">
                  <img src="/assets/images/tufts-magazine-media-grid-two.jpg" alt="The Storyteller"/>
                </div>
              </div>  
              <div className="media-grid__media media-grid__media--three">
                <div className="media-grid__media-text">
                  <a href="https://tuftsmagazine.com/issues/magazine/2016/fall/maestro">Illustration</a>
                </div>
                <div className="media-grid__media-element">
                  <img src="/assets/images/tufts-magazine-media-grid-three.jpg" alt="Maestro illustration"/>
                </div>
              </div>
              <div className="media-grid__media media-grid__media--four">
                 <div className="media-grid__media-text">
                   <a href="https://tuftsmagazine.com/issues/magazine/soldiering-ptsd">Illustration</a>
                </div>
                <div className="media-grid__media-element">
                  <img src="/assets/images/tufts-magazine-media-grid-four.jpg" alt="Illustration of PTSD"/>
                </div>
              </div>
              <div className="media-grid__media media-grid__media--five">
                <div className="media-grid__media-text">
                  <a href="https://tuftsmagazine.com/issues/magazine/2017/spring/tufts-lost-heritage">Hand Drawn</a>
                </div>
                <div className="media-grid__media-element">
                  <img src="/assets/images/tufts-magazine-media-grid-five.jpg" alt="Elephant Drawing"/>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--text-block project__section">
            <div className="section__container">
              <div className="text-block-wrapper text-block-wrapper--sidebar">
                <div className="text-block">
                  <div className="text-block__main">
                    <p>While the concept designs were both beautiful and deceivingly simple, beneath the pixel perfect layouts the site would require a complex data structure and a flexible presentation layer. Relying heavily upon a robust tagging system and issue-based architecture, content was fed throughout the site, allowing users to explore by issue, related categories, or through curated topics, weaving in news and web-only features so the website would appear fresh between print issues.</p> 
                  </div>
                </div>
                <div className="text-block text-block--title">
                  <div className="text-block__side">
                    <h2 className="text-block__verticle-title">Empowering Editors</h2>
                  </div>
                  <div className="text-block__main">
                    <p>Similar to the intricate process of laying out a printed page, the website empowered editors to customize the look and feel of their content, and control how it would be presented. Editors were able to select from various article templates, layouts, themes, and treatments, building articles ranging from long form immersive stories to quick read lists, creating a variety of visually interesting and distinct layouts mimicking the experience of thumbing through a physical magazine.</p>
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
                    <li>Editorial, University Communications and Marketing, Tufts University</li>
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
                    <li><a href="http://www.tuftsmagazine.com">tuftsmagazine.com</a></li>
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
                      Digitally Crafted
                    </h2>
                    <div className="horizontal-scroll__description">
                      Visually distinct layouts and designs, carefully crafted for both online and print publications.
                    </div>
                  </div>
                </div>
                <div className="horizontal-scroll__item horizontal-scroll__item--2">
                  <div className="horizontal-scroll__item-container">
                    <img className="horizontal-scroll__item-media" src="/assets/images/tufts-magazine-maestro-print.png" alt="" />
                  </div>
                </div>
                <div className="horizontal-scroll__item horizontal-scroll__item--3">
                  <div className="horizontal-scroll__item-container">
                    <img className="horizontal-scroll__item-media" src="/assets/images/tufts-magazine-maestro-macbook.png" alt="" />
                  </div>
                </div>
                <div className="horizontal-scroll__item horizontal-scroll__item--4">
                  <div className="horizontal-scroll__item-container">
                    <img className="horizontal-scroll__item-media" src="/assets/images/tufts-magazine-john-brown-print.png" alt="" />
                  </div>
                </div>
                <div className="horizontal-scroll__item horizontal-scroll__item--5">
                  <div className="horizontal-scroll__item-container">
                    <img className="horizontal-scroll__item-media" src="/assets/images/tufts-magazine-john-brown-macbook.png" alt="" />
                  </div>
                </div>
                <div className="horizontal-scroll__item horizontal-scroll__item--4">
                  <div className="horizontal-scroll__item-container">
                    <img className="horizontal-scroll__item-media" src="/assets/images/tufts-magazine-help-print.png" alt="" />
                  </div>
                </div>
                <div className="horizontal-scroll__item horizontal-scroll__item--5">
                  <div className="horizontal-scroll__item-container">
                    <img className="horizontal-scroll__item-media" src="/assets/images/tufts-magazine-help-macbook.png" alt="" />
                  </div>
                </div>
              </>
            }
          />
        </Fade>
        <Fade>
          <section className="section section--text-block project__section">
            <div className="section__container">
              <div className="text-block">
                <div className="text-block__main">
                  <p>As developers, balancing the complexity of the editing experience against the flexibility of the article’s design was key, hiding many of the dynamic design features behind simple pre-configured options.</p>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--media-cards project__section">
            <div className="media-cards">
              <div className="media-cards__container">
                <div className="media-cards__introduction">
                  <div className="media-cards__introduction-header">
                    <h2 className="media-cards__title">
                      Editor Driven
                    </h2>
                    <div className="media-cards__description">
                      Enabling editors to control how their content is presented, from banners to headlines, through a simple select dropdown in the admin interface.
                    </div>
                  </div>
                  <div className="media-cards__introduction-media">
                    <div className="media-cards__media-element">
                      <img src="/assets/images/tufts-magazine-screenshot-1.jpg" alt="Type over banner" />
                    </div>
                  </div>
                </div>
                <div className="media-cards__content">
                  <div className="media-cards__media-element media-cards__media-element--wrap">
                    <img src="/assets/images/tufts-magazine-screenshot-6.jpg" alt="Typographic banner" />
                  </div>
                  <div className="media-cards__media-element media-cards__media-element--wrap">
                    <img src="/assets/images/tufts-magazine-screenshot-3.jpg" alt="Type and text over banner" />
                  </div>
                  <div className="media-cards__media-element media-cards__media-element--wrap"> 
                    <img src="/assets/images/tufts-magazine-screenshot-4.jpg" alt="Video Banner" />
                  </div>
                  <div className="media-cards__media-element media-cards__media-element--wrap">
                    <img src="/assets/images/tufts-magazine-screenshot-5.jpg" alt="50 / 50 layout" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--text-block project__section">
            <div className="section__container">
              <div className="text-block-wrapper">
                <div className="text-block">
                  <div className="text-block__main">
                    <p>With mobile readership on the rise, it was important to ensure the online magazine offered an optimized user experience, regardless of the device or platform it was viewed on. We met this challenge by developing the capability for the editor to create custom versions of banner images for the variety of mobile breakpoints, developing the system to allow editors to manage the focal point, aspect ratio, and pixel density of each image, based upon the rendered screen size.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--mobile-device project__section">
            <div className="mobile-device mobile-device--right">
              <div className="mobile-device__container">
                <div className="mobile-device__introduction">
                  <h2 className="mobile-device__title">
                    Mobile Optimized
                  </h2>
                  <div className="mobile-device__description">
                    With 70% of the site’s web traffic coming from mobile devices, a customized mobile experience was a crucial component to the user experience .
                  </div>
                </div>
                <div className="mobile-device__device-container">
                  <div className="mobile-device__device">
                    <div className="mobile-device__phone">
                      <img src="/assets/images/tufts-magazine-screenshot-mobile-1.jpg" alt="Mobile layout example"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--project-media project__section">
            <div className="media-block media-block--fullwidth">
              <img src="/assets/images/tufts-magazine-devices-desktop.png" alt="Laptop with magazine site on screen" />
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--text-block project__section">
            <div className="section__container">
              <div className="text-block text-block--title">
                <div className="text-block__side">
                  <h2 className="text-block__verticle-title">Up to the Challenge</h2>
                </div>
                <div className="text-block__main">
                  <p>In developing Tufts Magazine, we experienced both the power and shortcomings of being an early adopter of Drupal 8. The tools available to us did not always feel fully baked, but with a little ingenuity we were able to develop a flexible system that continues to grow and support the evolving needs of the site today.</p>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="section section--text-block project__section">
            <div className="text-block text-block--contact">
              <div className="text-block__main">
                <p>Interested in learning more about creating an online magazine?</p>
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

export default TuftsMagazineMain;