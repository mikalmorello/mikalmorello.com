import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header'
import Navigation from './Navigation'
import ProjectsBanner from './ProjectsBanner'
import ProjectsMain from './ProjectsMain'
import Footer from './Footer'

class Projects extends React.Component {

  
  render(){
    
    document.body.classList.add('body--projects');
    
    return (
      <>
        <Helmet>
          <title>Lastest interactive design / development projects - Mikal Morello</title>
          <meta name="description" content="Check out some of my lastest web design and development projects." />
        </Helmet>  
        <Header 
          setMenuState={this.props.setMenuState}
          menuState={this.props.menuState}
          headerStyle={this.props.headerStyle}
        />
        <Navigation 
          menuState={this.props.menuState}
          closeMenu={this.props.closeMenu}
        />
        <ProjectsBanner />
        <ProjectsMain />
        <Footer />
      </>
    )
  }
  
}

export default Projects;