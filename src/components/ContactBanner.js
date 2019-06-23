import React from 'react';

class ContactBanner extends React.Component {
  
  render(){
    return (
      <section id="banner" className="banner banner--contact">
        <div className="banner__container">
          <div className="banner__content">
            <div className="banner__content-container">
              <div className="banner__divider">
                <img src="/assets/images/wave-divider.svg" alt=""/>
              </div>
              <h1 className="banner__title">Get In Touch</h1>
              <div className="banner__subtitle">
                Located at the Arsenal in Watertown MA, just outside of Boston.  I’m always looking for new projects, so feel free to reach out.
              </div>
              <div className="banner__form-wrapper">
                <form className="banner__form form form--vertical" action="https://formspree.io/mikalmorello+website@gmail.com" method="POST">
                  <label className="form__label" htmlFor="contactName">Name</label>
                  <input id="contactName" className="form__input" type="text"  name="name" placeholder="Your Name" required />
                  <label className="form__label" htmlFor="contactEmail">Email</label>
                  <input id="contactEmail" className="form__input" type="email" name="_replyto" placeholder="Your Email" required />
                  <label className="form__label" htmlFor="contactSubject">Subject</label>
                  <input id="contactSubject" className="form__input" type="text" name="subject" placeholder="Subject" required />
                  <input type="hidden" name="_next" value="/contact-thanks" />
                  <input type="hidden" name="_subject" value="Website contact" />
                  <button id="contactSubmit" className="form__submit button" type="submit" value="Send">Submit</button>
                </form>
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

export default ContactBanner;