import React from 'react';

class ProjectsBanner extends React.Component {
  
  render(){
    return (
      <section id="banner" className="banner banner--projects">
        <div className="banner__container">
          <div className="banner__content">
            <div className="banner__content-container">
              <div className="banner__divider">
                <img src="/assets/images/wave-divider-white.svg" alt=""/>
              </div>
              <h1 className="banner__title">Projects</h1>
              <div className="banner__subtitle">
                With nearly a decade of experience working in higher ed, I have designed and developed everything from alumni newsletters to student information systems. I approach every project focused on strategically marrying the needs of the user with the goals of the client. Review some my latest work, and feel free to <a href="/contact.html">connect with me</a> if you have questions or want to discuss similar projects.
              </div>
            </div>
          </div>
        </div>
      </section> 
    )
  }
  
}

export default ProjectsBanner;