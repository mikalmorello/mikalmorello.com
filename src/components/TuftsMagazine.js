import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header'
import Navigation from './Navigation'
import TuftsMagazineBanner from './TuftsMagazineBanner'
import TuftsMagazineMain from './TuftsMagazineMain'
import Footer from './Footer'

class TuftsMagazine extends React.Component {
  
  render(){
    return (
      <>
        <Helmet>
          <title>Tufts University Magazine Redesign - Mikal Morello</title>
          <meta name="description" content="As the lead front-end web developer, I developed the Tufts University Magazine website on Drupal 8." />
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
        <TuftsMagazineBanner />
        <TuftsMagazineMain />
        <Footer />
      </>
    )
  }
  
}

export default TuftsMagazine;