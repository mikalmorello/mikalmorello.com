import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header'
import Navigation from './Navigation'
import ContactBanner from './ContactBanner'
import ContactMain from './ContactMain'
import Footer from './Footer'


class Contact extends React.Component {

  render(){
    return (
      <>
        <Helmet>
          <title>Contact Team Morello - Mikal Morello</title>
          <meta name="description" content="Looking to start a new interactive project, feel free to get in touch. I am based in Watertown MA, right outside of Boston" />
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
        <ContactBanner />
        <ContactMain />
        <Footer />
      </>
    )
  }
  
}

export default Contact;