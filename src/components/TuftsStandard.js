import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header'
import Navigation from './Navigation'
import TuftsStandardBanner from './TuftsStandardBanner'
import TuftsStandardMain from './TuftsStandardMain'
import Footer from './Footer'

class TuftsStandard extends React.Component {
  
  render(){
    return (
      <>
        <Helmet>
          <title>Tufts University Drupal 8 Standard - Mikal Morello</title>
          <meta name="description" content="As a technical strategist, I helped develop the Tufts University Drupal Standard, as a scalable web platform for creating Drupal 8 websites." />
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
        <TuftsStandardBanner />
        <TuftsStandardMain />
        <Footer />
      </>
    )
  }
  
}

export default TuftsStandard;