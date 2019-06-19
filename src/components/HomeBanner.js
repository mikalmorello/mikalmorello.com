import React from 'react';

class HomeBanner extends React.Component {
  
  setBannerTheme(bannerState, headerStyle){
    this.props.setBannerState(bannerState);
    if(bannerState === 'designer'){
      this.props.setHeaderStyle('light');
    } else if(bannerState === 'developer') {
      this.props.setHeaderStyle('dark');
    } else if (bannerState === 'strategist') {
      this.props.setHeaderStyle('light');
    }
  }
  
  setBannerSubtitle(bannerState){
    if(bannerState === 'designer'){
      return (
        <h2 id="subtitleDesigner" className="banner__subtitle banner__subtitle--designer banner__subtitle--active">
          As a designer from the outset, I look to my arts background to ensure my work is unique and engaging and leaves its mark on the digital universe.
        </h2>
      )
    } else if(bannerState === 'developer') {
      return (
        <h2 id="subtitleDeveloper" className="banner__subtitle banner__subtitle--developer banner__subtitle--active">
          As a developer, I thrive on getting lost in my editor, crafting clean, organized, and accessible code.
        </h2>
      )
    } else if (bannerState === 'strategist') {
      return (
        <h2 id="subtitleStrategist" className="banner__subtitle banner__subtitle--strategist banner__subtitle--active">
          A strategist at heart, with the constant need to innovate, I enjoy the challenges and opportunities every new project brings.
        </h2>
      )
    } 
  }

  
  render(){
    return (
      <section id="banner" className={`banner banner--split banner--${this.props.bannerState}`}>
        <div className="banner__introduction">
          <div className="banner__content">
            <div className="banner__header">
              <h1 className="banner__title">
                <span className="banner__title-small">
                  Hi, my name is Mikal Morello,  I am a:
                </span>
                <span className="banner__title-large">
                  <button className="banner__button banner__button--designer" onClick={(e)=>this.setBannerTheme('designer', 'light')}>Designer</button>, <button className="banner__button banner__button--developer" onClick={(e)=>this.setBannerTheme('developer', 'dark')}>developer</button>, and <button className="banner__button banner__button--strategist" onClick={(e)=>this.setBannerTheme('strategist', 'light')}>digital strategist</button>.
                </span>
              </h1>
              {this.setBannerSubtitle(this.props.bannerState)}
            </div>
            <div className="banner__link">
              <a href="#main" className="scroll">Learn More</a>
            </div>
          </div>
          <div className="banner__portrait">
            <button id="bannerPortrait" className="banner__portrait-button" onClick={(e)=>this.props.setBannerState('default')}>
              <picture>
                <source srcSet="/assets/images/mikal-morello-portrait.png" media="(min-width: 960px)" />
                <img srcSet="/assets/images/mikal-morello-portrait--mobile.png" alt="Mikal Morello" />
              </picture>
            </button>
          </div>
        </div>
        <div className="banner__media">
        </div>
        
      </section>
    )
  }
  
}

export default HomeBanner;