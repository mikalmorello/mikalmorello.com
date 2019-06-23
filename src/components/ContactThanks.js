import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header'
import Navigation from './Navigation'
import ContactThanksBanner from './ContactThanksBanner'
import ContactMain from './ContactMain'
import Footer from './Footer'


class ContactThanks extends React.Component {

  render(){
    return (
      <>
        <Helmet>
          <title>Thanks for contacting me - Mikal Morello</title>
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
        <ContactThanksBanner />
        <ContactMain />
        <Footer />
      </>
    )
  }
  
}

export default ContactThanks;